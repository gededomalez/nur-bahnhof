/**
 * @OnlyCurrentDoc
 *
 * Nur Bahnhof – Messung in einer Google-Tabelle
 *
 * Die Zeile oben beschränkt das Skript auf genau diese eine Tabelle.
 *
 * Dieses Skript nimmt die anonymen Ereignisse der App entgegen, schreibt jedes
 * als Zeile in das Blatt „Ereignisse“ und berechnet daraus das Blatt „Auswertung“.
 * Einrichtung: siehe README.md im Repository, Abschnitt „Tabelle einrichten“.
 */

const BLATT_EREIGNISSE = 'Ereignisse';
const BLATT_AUSWERTUNG = 'Auswertung';
const KOPF = ['Zeit', 'Kennung', 'Quelle', 'Ereignis', 'Halt', 'Richtig', 'Gesamt', 'Sekunden', 'Verständlich', 'Weitermachen', 'Freitext', 'Version', 'Sprache'];
const ERLAUBT = ['start', 'halt_start', 'halt_fertig', 'kurs_fertig', 'feedback'];
const SPRACHEN = ['de', 'en', 'es', 'ar'];
const ANZAHL_HALTE = 6;
const MAX_ZEILEN = 20000;

/** Einmal von Hand ausführen: legt beide Blätter an. */
function einrichten() {
  ereignisBlatt_();
  auswerten();
}

/** Menü in der Tabelle. */
function onOpen() {
  SpreadsheetApp.getUi().createMenu('Nur Bahnhof')
    .addItem('Auswertung aktualisieren', 'auswerten')
    .addToUi();
}

/** Die App schickt jedes Ereignis als JSON-Text hierher. */
function doPost(e) {
  try {
    const roh = (e && e.postData && e.postData.contents) || '';
    if (!roh || roh.length > 2000) return antwort_('abgelehnt');
    const zeile = pruefe(JSON.parse(roh), new Date());
    if (!zeile) return antwort_('abgelehnt');
    const sperre = LockService.getScriptLock();
    sperre.waitLock(10000);
    try {
      const blatt = ereignisBlatt_();
      if (blatt.getLastRow() < MAX_ZEILEN) blatt.appendRow(zeile);
      try { auswerten(); } catch (err) { /* Auswertung darf das Speichern nie verhindern */ }
    } finally {
      sperre.releaseLock();
    }
    return antwort_('ok');
  } catch (err) {
    return antwort_('fehler');
  }
}

/** Zum Testen im Browser: Adresse aufrufen, es erscheint dieser Satz. */
function doGet() {
  return antwort_('Nur Bahnhof: Die Messung läuft.');
}

function antwort_(text) {
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.TEXT);
}

function ereignisBlatt_() {
  const mappe = SpreadsheetApp.getActiveSpreadsheet();
  let blatt = mappe.getSheetByName(BLATT_EREIGNISSE);
  if (!blatt) {
    blatt = mappe.insertSheet(BLATT_EREIGNISSE);
    blatt.appendRow(KOPF);
    blatt.setFrozenRows(1);
  }
  return blatt;
}

/**
 * Prüft ein eingehendes Ereignis und gibt die Tabellenzeile zurück, oder null.
 * Alles Unerwartete wird verworfen, damit niemand Unsinn oder Formeln einschleust.
 */
function pruefe(d, jetzt) {
  if (!d || typeof d !== 'object') return null;
  if (ERLAUBT.indexOf(d.e) < 0) return null;
  if (typeof d.id !== 'string' || !/^[a-f0-9]{16}$/.test(d.id)) return null;
  const zahl = function (x, min, max) {
    const n = Number(x);
    return x !== undefined && x !== null && x !== '' && isFinite(n) && Math.floor(n) === n && n >= min && n <= max ? n : '';
  };
  const quelle = typeof d.q === 'string' ? d.q.replace(/[^a-z0-9-]/gi, '').slice(0, 24).toLowerCase() : '';
  const version = typeof d.v === 'string' && /^[0-9.]{1,8}$/.test(d.v) ? d.v : '';
  const weiter = ['Ja', 'Vielleicht', 'Nein'].indexOf(d.weiter) >= 0 ? d.weiter : '';
  const sprache = SPRACHEN.indexOf(d.l) >= 0 ? d.l : '';
  let text = typeof d.text === 'string' ? d.text.replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, 400) : '';
  if (/^[=+\-@]/.test(text)) text = "'" + text; // nie als Formel auswerten
  return [
    jetzt, d.id, quelle, d.e,
    zahl(d.h, 1, ANZAHL_HALTE), zahl(d.r, 0, 99), zahl(d.g, 0, 99), zahl(d.s, 0, 36000),
    zahl(d.verst, 1, 5), weiter, text, version, sprache
  ];
}

/** Liest alle Ereignisse und schreibt die Auswertung neu. */
function auswerten() {
  const mappe = SpreadsheetApp.getActiveSpreadsheet();
  const quelle = ereignisBlatt_();
  const letzte = quelle.getLastRow();
  const zeilen = letzte > 1 ? quelle.getRange(2, 1, letzte - 1, KOPF.length).getValues() : [];
  const tabelle = berechne(zeilen, new Date());
  let ziel = mappe.getSheetByName(BLATT_AUSWERTUNG);
  if (!ziel) ziel = mappe.insertSheet(BLATT_AUSWERTUNG);
  ziel.clearContents();
  ziel.getRange(1, 1, tabelle.length, 3).setValues(tabelle);
  ziel.setFrozenRows(1);
}

/**
 * Reine Rechnung ohne Tabellenzugriff.
 * zeilen: Array von Zeilen in der Reihenfolge von KOPF. Gibt Zeilen mit drei Spalten zurück.
 */
function berechne(zeilen, jetzt) {
  const gestartet = {};          // Kennung -> true
  const geschafft = [];          // je Halt: Kennung -> {r, g, s}
  for (let h = 0; h < ANZAHL_HALTE; h++) geschafft.push({});
  const tage = {};               // Kennung -> {Tag: true}
  const quelleVon = {};          // Kennung -> Quelle
  const spracheVon = {};         // Kennung -> zuletzt genutzte Sprache
  const feedback = {};           // Kennung -> {verst, weiter}
  let freitexte = 0;

  zeilen.forEach(function (z) {
    const zeit = z[0], id = z[1], q = z[2], e = z[3], h = z[4], r = z[5], g = z[6], s = z[7], verst = z[8], weiter = z[9], text = z[10];
    if (!id) return;
    gestartet[id] = true;
    if (!(id in quelleVon)) quelleVon[id] = q || '(ohne Kürzel)';
    if (z[12]) spracheVon[id] = z[12];
    const tag = zeit instanceof Date ? zeit.getFullYear() + '-' + (zeit.getMonth() + 1) + '-' + zeit.getDate() : String(zeit).slice(0, 10);
    if (!tage[id]) tage[id] = {};
    tage[id][tag] = true;
    if (e === 'halt_fertig' && h >= 1 && h <= ANZAHL_HALTE) {
      const alt = geschafft[h - 1][id];
      // erster Durchlauf zählt für die Dauer, bestes Ergebnis für die Punkte
      if (!alt) geschafft[h - 1][id] = { r: Number(r) || 0, g: Number(g) || 0, s: Number(s) || 0 };
      else if ((Number(r) || 0) > alt.r) alt.r = Number(r) || 0;
    }
    if (e === 'feedback') {
      feedback[id] = { verst: Number(verst) || 0, weiter: weiter };
      if (text) freitexte++;
    }
  });

  const ids = Object.keys(gestartet);
  const n = ids.length;
  const anteil = function (x) { return n ? Math.round((x / n) * 1000) / 10 + ' %' : ''; };
  const median = function (a) {
    if (!a.length) return '';
    const s = a.slice().sort(function (x, y) { return x - y; });
    const m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  };
  const runde = function (x) { return Math.round(x * 10) / 10; };

  const aus = [['Kennzahl', 'Wert', 'Anteil an allen Gestarteten']];
  aus.push(['Stand', jetzt, '']);
  aus.push(['Gestartet (mit Einwilligung)', n, '']);
  for (let h = 0; h < ANZAHL_HALTE; h++) {
    aus.push(['Halt ' + (h + 1) + ' geschafft', Object.keys(geschafft[h]).length, anteil(Object.keys(geschafft[h]).length)]);
  }
  const komplett = ids.filter(function (id) {
    for (let h = 0; h < ANZAHL_HALTE; h++) if (!geschafft[h][id]) return false;
    return true;
  });
  aus.push(['Alle Halte geschafft', komplett.length, anteil(komplett.length)]);
  const wiederkehrer = ids.filter(function (id) { return Object.keys(tage[id]).length > 1; });
  aus.push(['An mehr als einem Tag dabei', wiederkehrer.length, anteil(wiederkehrer.length)]);

  aus.push(['', '', '']);
  aus.push(['Ergebnisse je Halt', 'Richtig im Schnitt', 'Minuten (Median)']);
  for (let h = 0; h < ANZAHL_HALTE; h++) {
    const werte = Object.keys(geschafft[h]).map(function (id) { return geschafft[h][id]; });
    const mitAufgaben = werte.filter(function (w) { return w.g > 0; });
    const quote = mitAufgaben.length ? runde(mitAufgaben.reduce(function (a, w) { return a + w.r / w.g; }, 0) / mitAufgaben.length * 100) + ' %' : '';
    const minuten = median(werte.filter(function (w) { return w.s > 0; }).map(function (w) { return w.s / 60; }));
    aus.push(['Halt ' + (h + 1), quote, minuten === '' ? '' : runde(minuten)]);
  }

  const fb = Object.keys(feedback).map(function (id) { return feedback[id]; });
  const bewertet = fb.filter(function (f) { return f.verst > 0; });
  aus.push(['', '', '']);
  aus.push(['Rückmeldungen', fb.length, anteil(fb.length)]);
  aus.push(['Verständlichkeit im Schnitt (1 bis 5)', bewertet.length ? runde(bewertet.reduce(function (a, f) { return a + f.verst; }, 0) / bewertet.length) : '', '']);
  ['Ja', 'Vielleicht', 'Nein'].forEach(function (w) {
    const k = fb.filter(function (f) { return f.weiter === w; }).length;
    aus.push(['Weitere Halte: ' + w, k, fb.length ? Math.round((k / fb.length) * 1000) / 10 + ' % der Rückmeldungen' : '']);
  });
  aus.push(['Rückmeldungen mit Freitext', freitexte, '']);

  const jeQuelle = {};
  ids.forEach(function (id) {
    const q = quelleVon[id];
    if (!jeQuelle[q]) jeQuelle[q] = { start: 0, komplett: 0 };
    jeQuelle[q].start++;
  });
  komplett.forEach(function (id) { jeQuelle[quelleVon[id]].komplett++; });
  aus.push(['', '', '']);
  aus.push(['Nach Link-Kürzel', 'Gestartet', 'Alle Halte geschafft']);
  Object.keys(jeQuelle).sort().forEach(function (q) { aus.push([q, jeQuelle[q].start, jeQuelle[q].komplett]); });

  const jeSprache = {};
  ids.forEach(function (id) {
    const l = spracheVon[id] || '(unbekannt)';
    if (!jeSprache[l]) jeSprache[l] = { start: 0, komplett: 0 };
    jeSprache[l].start++;
  });
  komplett.forEach(function (id) { jeSprache[spracheVon[id] || '(unbekannt)'].komplett++; });
  aus.push(['', '', '']);
  aus.push(['Nach Sprache', 'Gestartet', 'Alle Halte geschafft']);
  Object.keys(jeSprache).sort().forEach(function (l) { aus.push([l, jeSprache[l].start, jeSprache[l].komplett]); });

  return aus;
}
