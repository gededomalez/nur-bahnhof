/* Prüft, ob die Übersetzungen zur deutschen Fassung in index.html passen.
   Aufruf: node werkzeug/pruef.js   (Ergebnis: "Fehler: 0") */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const seg = html.slice(html.indexOf('const Q = {'), html.indexOf('const INSTALL_DE'));
const box = { window: {} }; vm.createContext(box);
for (const l of ['en', 'es', 'ar', 'tr', 'uk']) vm.runInContext(fs.readFileSync(path.join(ROOT, 'texte-' + l + '.js'), 'utf8'), box);
vm.runInContext(seg + '\nthis.HALTE=HALTE;this.GLOSSAR=GLOSSAR;this.UI_DE=UI_DE;this.Q=Q;', box);
const { HALTE, GLOSSAR, UI_DE, Q } = box; const T = box.window.NB_TEXTE;
let fehler = 0; const f = m => { fehler++; console.log('FEHLER', m); };
const ph = s => (String(s).match(/\{\w+\}/g) || []).sort().join(',');
const tags = s => (s.match(/<\/?\w+/g) || []).join('');

// Deutsche Fassung in sich
let aufgaben = 0;
HALTE.forEach((h, i) => h.schritte.forEach((st, j) => {
  const wo = `de H${i + 1} S${j + 1} (${st.typ})`;
  for (const q of st.quelle || []) if (!Q[q]) f(wo + ' Quelle fehlt: ' + q);
  if (st.typ === 'quiz' || st.typ === 'vorhersage') aufgaben++;
  if (st.typ === 'sortieren') { aufgaben += st.karten.length; st.karten.forEach(k => { for (const q of k.quelle || []) if (!Q[q]) f(wo + ' Quelle fehlt: ' + q); if (!(k.e >= 0 && k.e < st.eimer.length)) f(wo + ' Eimer'); }); }
  if (st.typ === 'tokens') st.beispiele.forEach((b, n) => { if (b.k.join('') !== b.t) f(wo + ` Beispiel ${n + 1}: Tokens ergeben nicht den Satz`); });
}));
const reihen = html.match(/const reihenfolge = (\[[^\]]+\])/); const liste = JSON.parse(reihen[1]);
for (const k of Object.keys(Q)) if (!liste.includes(k)) f('Quelle nicht in der Quellenliste: ' + k);
for (const k of liste) if (!Q[k]) f('Quellenliste nennt unbekannte Quelle: ' + k);

for (const l of ['en', 'es', 'ar', 'tr', 'uk']) {
  const t = T[l]; if (!t) { f(l + ' fehlt'); continue; }
  for (const k of Object.keys(UI_DE)) {
    const a = UI_DE[k], b = t.ui[k];
    if (b == null) { f(`${l} ui.${k} fehlt`); continue; }
    if (Array.isArray(a)) { if (!Array.isArray(b) || a.length !== b.length) f(`${l} ui.${k} Listenlänge`); }
    else if (ph(a) !== ph(b)) f(`${l} ui.${k} Platzhalter ${ph(a)} vs ${ph(b)}`);
    if (typeof b === 'string' && a !== '' && b === '') f(`${l} ui.${k} leer`);
  }
  for (const k of Object.keys(t.ui)) if (!(k in UI_DE)) f(`${l} ui.${k} überzählig`);
  if (t.halte.length !== HALTE.length) f(l + ' Halte-Anzahl');
  HALTE.forEach((h, i) => {
    const x = t.halte[i];
    if (!x.titel || !x.kurz || x.mitnehmen.length !== h.mitnehmen.length) f(`${l} H${i + 1} Kopf`);
    if (x.s.length !== h.schritte.length) { f(`${l} H${i + 1} Schrittzahl ${x.s.length} vs ${h.schritte.length}`); return; }
    h.schritte.forEach((st, j) => {
      const y = x.s[j], wo = `${l} H${i + 1} S${j + 1} (${st.typ})`;
      if (st.typ === 'text') { if (!y.h || !y.html) f(wo + ' h/html'); if (!!st.merke !== !!y.merke) f(wo + ' merke'); if (tags(st.html) !== tags(y.html || '')) f(wo + ' HTML-Gerüst weicht ab'); }
      if (st.typ === 'quiz') { if (!y.frage || !y.warum || y.optionen.length !== st.optionen.length) f(wo); }
      if (st.typ === 'sortieren') { if (!y.h || y.eimer.length !== st.eimer.length || y.karten.length !== st.karten.length) f(wo); else y.karten.forEach((k, n) => { if (!k.t || !k.warum) f(wo + ' Karte ' + (n + 1)); if ('e' in k) f(wo + ' Karte hat e'); }); }
      if (st.typ === 'vorhersage') { if (!y.h || !y.frage || !y.satz || !y.warum || y.optionen.length !== st.optionen.length) f(wo); }
      if (st.typ === 'tokens') { if (!y.h || !y.beispiele || y.beispiele.length !== st.beispiele.length) f(wo); else y.beispiele.forEach((b, n) => { if (!b.merke || b.k.join('') !== b.t) f(wo + ` Beispiel ${n + 1}`); }); }
      if (st.typ === 'bauen') {
        if (!y.h || !y.intro || !y.basis || y.bausteine.length !== st.bausteine.length || !y.antwort) f(wo);
        else for (const k of Object.keys(st.antwort)) { const a = st.antwort[k], b = y.antwort[k]; if (b == null || Array.isArray(a) !== Array.isArray(b) || (Array.isArray(a) && (a.length !== b.length || a.some((v, n) => !!v !== !!b[n])))) f(wo + ' antwort.' + k); }
      }
      for (const k of ['richtig', 'typ', 'quelle']) if (k in y) f(wo + ' überschreibt ' + k);
    });
  });
  if (t.glossar.length !== GLOSSAR.length) f(l + ' Glossar-Länge');
  if (!t.install) f(l + ' install fehlt');
  // Zahlen, die jede Übersetzung enthalten muss
  const all = JSON.stringify(t.halte);
  for (const n of ['1956', '45', '31', '485', '92', '170', '78', '2026', '18', '22', '94']) if (!all.includes(n)) f(`${l} Zahl ${n} fehlt`);
  for (const n of [['0,26', '0.26'], ['0,24', '0.24'], ['34,7', '34.7'], ['0,8', '0.8'], ['1,5', '1.5'], ['3.000', '3,000', '3000']]) if (!n.some(v => all.includes(v))) f(`${l} Zahl ${n[0]} fehlt`);
}
console.log('Prüfung fertig. Fehler:', fehler, '| Aufgaben mit Wertung:', aufgaben, '| UI-Schlüssel:', Object.keys(UI_DE).length, '| Quellen:', Object.keys(Q).length);
process.exit(fehler ? 1 : 0);
