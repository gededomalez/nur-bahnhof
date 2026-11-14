/* Spielt den ganzen Kurs in allen vier Sprachen im Browser durch und prüft Zählung, Lok und Baukasten.
   Braucht Playwright und Chrome. Aufruf: node werkzeug/durchlauf.js [Ordner für Bildschirmfotos]
   Pfade lassen sich über PLAYWRIGHT und CHROME setzen. */
const http = require('http'), fs = require('fs'), path = require('path'), vm = require('vm');
const { chromium } = require(process.env.PLAYWRIGHT || '/opt/npm-tools/node_modules/playwright');
const SITE = path.join(__dirname, '..'), BILDER = process.argv[2] || '';
const events = [];
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.woff2': 'font/woff2', '.json': 'application/json', '.png': 'image/png' };
const srv = http.createServer((req, res) => {
  const f = path.join(SITE, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html'));
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); res.end(d); } });
}).listen(8768);
const box = {}; vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(SITE, 'Code.gs'), 'utf8') + '\nthis.pruefe=pruefe;this.berechne=berechne;', box);
const bild = async (p, name, voll) => { if (BILDER) await p.screenshot({ path: path.join(BILDER, name + '.png'), fullPage: !!voll }); };

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const errs = [], out = {};
  for (const l of ['de', 'en', 'es', 'ar', 'tr', 'uk']) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: 'de-DE', hasTouch: true, isMobile: true, colorScheme: l === 'es' ? 'dark' : 'light' });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(l + ': ' + String(e)));
    await p.route('**/script.google.com/**', r => { events.push(r.request().postData()); r.fulfill({ status: 200, body: 'ok' }); });
    const bad = []; p.on('response', r => { if (r.status() >= 400) bad.push(r.url()); });
    await p.goto('http://localhost:8768/?l=' + l + '&q=test');
    const o = out[l] = { h1: await p.textContent('h1') };
    o.lokStart = await p.evaluate(() => Math.round(document.querySelector('.lok').getBoundingClientRect().left));
    await bild(p, l + '-start');
    await p.tap('.tafel > .knopf'); await p.tap('[data-akt="zaehlen"][data-wert="ja"]'); await p.tap('.kopf [data-akt="schliessen"]');
    let n = 0; o.lok = [];
    for (let h = 0; h < 6; h++) {
      await p.tap(`.zeile[data-halt="${h}"]`);
      for (let g = 0; g < 90; g++) {
        if (await p.$('[data-akt="naechster"]') || await p.$('.fuss [data-akt="schliessen"]')) break;
        if (await p.$('.tokbsp')) {
          o.tokens = [];
          for (let i = 0; i < 4; i++) { await p.tap(`.tokbsp [data-i="${i}"]`); o.tokens.push(await p.textContent('.zaehler')); if (i === 2 || (l === 'ar' && i === 1)) await bild(p, l + '-tokens' + i, true); }
          if (l === 'ar') { await p.tap('.tokbsp [data-i="3"]'); await bild(p, 'ar-tokens3', true); }
        }
        if (await p.$('.bausteine')) {
          const vor = await p.textContent('.antwort');
          await bild(p, l + '-bauen0', true);
          for (let i = 0; i < 4; i++) await p.tap(`.baustein[data-i="${i}"]`);
          const nach = await p.textContent('.antwort');
          o.bauen = { geaendert: vor !== nach, platzVor: (vor.match(/\[/g) || []).length, platzNach: (nach.match(/\[/g) || []).length, prompt: (await p.textContent('.prompt')).length };
          await bild(p, l + '-bauen4', true);
        }
        const opt = await p.$('.option:not([disabled])'); if (opt) { await opt.tap(); n++; }
        if (h === 4 && g === 1) await bild(p, l + '-daten', true);
        await p.tap('[data-akt="weiter"]');
      }
      // Ende des Halts: Lok fährt
      const x0 = await p.evaluate(() => Math.round(document.querySelector('.lok').getBoundingClientRect().left));
      if (h === 1) { await p.waitForTimeout(700); await bild(p, l + '-lok-fahrt'); }
      await p.waitForTimeout(2800);
      const x1 = await p.evaluate(() => Math.round(document.querySelector('.lok').getBoundingClientRect().left));
      o.lok.push([x0, x1]);
      o.voll = await p.evaluate(() => document.querySelectorAll('.strecke i.voll').length);
      if (h === 1) await bild(p, l + '-lok-an');
      await p.tap('.kopf [data-akt="schliessen"]');
    }
    await bild(p, l + '-fahrplan-fertig', true);
    await p.tap('[data-akt="rueck"][data-wert="5"]'); await p.tap('[data-akt="rueck"][data-wert="Vielleicht"]'); await p.tap('[data-akt="senden"]'); await p.waitForTimeout(300);
    o.aufgaben = n; o.overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    for (const v of ['glossar', 'quellen', 'datenschutz']) { await p.goto('http://localhost:8768/?l=' + l + '#' + v); await p.waitForTimeout(100); if (v !== 'glossar' && (l === 'de')) await bild(p, l + '-' + v, true); }
    o.impressum = (await p.textContent('.seite')).includes('Sound&Sun');
    o.bad = bad; await ctx.close();
  }
  console.log(JSON.stringify(out, null, 1));
  const now = new Date(); const rows = events.map(e => box.pruefe(JSON.parse(e), now));
  console.log('Ereignisse', events.length, 'angenommen', rows.filter(Boolean).length);
  console.log('Fehler im Browser', JSON.stringify(errs));
  await b.close(); srv.close();
  process.exit(errs.length || rows.some(r => !r) ? 1 : 0);
})();
