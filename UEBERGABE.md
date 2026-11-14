# Übergabe: Nur Bahnhof

Stand 14.11.2026, Version 0.5. Für jede Person oder KI, die an der App weiterarbeitet. Dieses Dokument und die README reichen als Einstieg, ein Gesprächsverlauf wird nicht gebraucht.

## Was die App ist

Ein KI-Grundkurs für Menschen, die sich vom Thema überfordert fühlen. Sechs Stationen, zusammen rund 30 Minuten, in Deutsch, Englisch, Spanisch, Arabisch, Türkisch und Ukrainisch. Sichtbar heißen sie „Station“, im Code `Halt` und `HALTE`. Die App ist eine Testfassung. Sie soll messen, ob Menschen den Kurs durchspielen und wo sie aussteigen, bevor mehr Arbeit hineinfließt.

- Live: https://gededomalez.github.io/nur-bahnhof/
- Repo: `gededomalez/nur-bahnhof`, Zweig `main`. GitHub Pages veröffentlicht `main` automatisch, das dauert ein bis zwei Minuten.
- Messung: eine Google-Tabelle „Nur Bahnhof Messung“ in Gideons Google Drive mit dem Skript `Code.gs` (als Web-App bereitgestellt, Version 1).

## Wie sie gebaut ist

Alles ist reines HTML, CSS und JavaScript ohne Build-Schritt und ohne Abhängigkeiten.

| Wo | Was |
|---|---|
| `index.html` | Gestaltung, Ablauf und alle deutschen Texte. Oben `KONFIG`, dann `Q` (Quellen), `HALTE` (Lektionen), `GLOSSAR`, `UI_DE` (Oberfläche), danach die Logik |
| `texte-en.js`, `texte-es.js`, `texte-ar.js`, `texte-tr.js`, `texte-uk.js` | Übersetzungen. Sie überlagern die deutschen Inhalte Schritt für Schritt nach Position |
| `Code.gs` | Nimmt Ereignisse an, prüft sie und rechnet das Blatt „Auswertung“ |
| `werkzeug/pruef.js` | Vergleicht die Übersetzungen mit der deutschen Fassung |
| `werkzeug/durchlauf.js` | Spielt den Kurs in allen vier Sprachen im Browser durch |

Schritt-Typen in `HALTE`: `text`, `quiz`, `sortieren` (zwei oder drei Eimer), `vorhersage` (nächstes Wort), `tokens` (echte Token-Beispiele), `bauen` (Anfrage-Baukasten mit Beispielantwort).

## Regeln, die man kennen muss

1. **Übersetzungen hängen an der Position.** Wer in `HALTE` einen Schritt einfügt, löscht oder verschiebt, muss dasselbe in allen fünf `texte-*.js` tun. Die Übersetzungen enthalten nie `typ`, `richtig`, `e` oder `quelle`. Bei Textschritten muss das HTML-Gerüst gleich sein.
2. **Nach jeder Änderung prüfen:** `node werkzeug/pruef.js` muss „Fehler: 0“ melden. `node werkzeug/durchlauf.js /tmp/bilder` spielt alles in allen sechs Sprachen durch und legt Bildschirmfotos ab. Spanisch läuft dort im dunklen Modus, Arabisch von rechts nach links. Die Bilder ansehen, nicht nur die Zahlen.
3. **Dunkler Modus:** `--tafel` ist dort dunkelblau, nicht gelb. Markierungen, die gelb bleiben sollen, brauchen die feste Farbe `#FFD400`. Genau dieser Fehler hat in Version 0.3 den Baukasten und die Tokens unlesbar gemacht.
4. **Rechts nach links:** nur logische CSS-Eigenschaften verwenden (`inline-start` statt `left`). Zahlen in arabischem Text brauchen `dir="ltr"`.
5. **Jede Zahl braucht eine Quelle in `Q`**, und jede Quelle muss in `reihenfolge` in `quellenHTML` stehen. Das Prüfskript meldet Lücken.
6. **Token-Beispiele sind echt.** Sie stammen aus dem Tokenizer `o200k_base` (npm-Paket `gpt-tokenizer`). Wer einen Satz ändert, muss ihn neu zerlegen lassen. Das Prüfskript merkt, wenn die Stücke nicht mehr den Satz ergeben.
7. **Sechs Stationen bleiben sechs.** `Code.gs` kennt die Anzahl. Ein siebter Halt braucht eine neue Version des Skripts, und die kann nur Gideon in seinem Google-Konto bereitstellen.
8. **Was gemessen wird, steht in der Einwilligung und im Datenschutztext.** Wer ein neues Feld mitschickt, muss beide Texte in allen sechs Sprachen anpassen.
9. **Türkisch und Ukrainisch brauchen eigene Schriftdateien** (erweitertes Latein und Kyrillisch). Sie sind über `unicode-range` eingebunden. Eine weitere Sprache mit neuer Schrift braucht ebenfalls eine eigene Datei.
10. **Das App-Symbol** entsteht aus `icon.svg`. Wer es ändert, rendert die drei PNG-Dateien neu (512, 192 und 180 Pixel).

## Veröffentlichen

Änderungen auf `main` committen und pushen. Danach die Live-Seite im Browser laden und kurz prüfen. Ein Testlauf mit `?q=claude-test` schreibt echte Zeilen in die Tabelle, diese Zeilen danach wieder löschen.

## Was am 13.11.2026 geprüft wurde

- Alle Aussagen der sechs Halte gegen aktuelle Quellen. Geändert: Stromverbrauch der Rechenzentren (IEA 2026: 485 TWh in 2025), Bitkom-Quelle (jetzt die Presseinformation selbst), EBU-Studie um Einzelwerte ergänzt, neuer Schritt zu den Modellen von 2026 (Stanford AI Index 2026).
- Unverändert richtig: 1956, EBU 45 Prozent aus 18 Ländern, Gender Shades, WEF-Zahlen, Wasserangaben von 2025, Artikel 50 der KI-Verordnung seit 2. August 2026 (der Digital Omnibus hat ihn nicht verschoben).
- Der Daten-Halt wurde neu gebaut: Vergleich mit Mail, Messenger und sozialen Netzwerken, Einstellungen zum Training, Nutzung in Firmen und Hochschulen.

## Offen

- **Übersetzungen** sind mit KI entstanden und nicht von Muttersprachlern gegengelesen. Am wichtigsten sind Arabisch, Türkisch und Ukrainisch.
- **Datenschutztext und Impressum** sind Entwürfe ohne rechtliche Prüfung. Als Anbieter steht auf Gideons Wunsch nur „Sound&Sun“. Ein Einzelunternehmen muss im Impressum in der Regel auch den Namen des Inhabers nennen, das ist nicht geklärt.
- **Auf echten Handys** wurde bisher nur von Gideon getestet. Das Hinzufügen zum Home-Bildschirm ist auf iPhone und Android ungeprüft.
- **Die EBU-Studie** stammt von 2025. Sobald es eine Wiederholung mit neueren Modellen gibt, Halt 3 anpassen.
- **Schalternamen in Halt 5** („Das Modell für alle verbessern“) ändern sich bei den Anbietern oft. Bei jeder größeren Überarbeitung nachsehen.
- Die Datei `Code.gs` im Repo und das Skript in der Tabelle müssen gleich bleiben. Wer `Code.gs` ändert, muss Gideon bitten, den Inhalt in den Apps-Script-Editor zu übernehmen und eine neue Version bereitzustellen.

## Entscheidungen, die schon gefallen sind

- Vom Regensburger KI-Führerschein wird nichts übernommen, weder Code noch Texte.
- Hosting auf GitHub Pages, Messung in Google Sheets, nur mit Einwilligung und ohne Namen.
- Schriften liegen lokal im Repo, es wird nichts von Dritten nachgeladen.
- „Nur Bahnhof“ wird nicht wörtlich übersetzt. Jede Sprache hat ihre eigene Redewendung.
- Geschäftlich ist ein Lizenzmodell mit Pilotpartnern (Volkshochschulen, Verbände, Arbeitgeber) angedacht, kein Verkauf an Einzelne. Erst messen, dann entscheiden.
