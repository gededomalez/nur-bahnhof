# Nur Bahnhof

Ein KI-Grundkurs als Web-App in vier Sprachen (Deutsch, Englisch, Spanisch, Arabisch): sechs kurze Etappen mit Quiz, Sortierkarten und Mini-Spielen, dazu Glossar und Quellenliste. Die App ist eine Testfassung und kann mit Einwilligung der Teilnehmenden anonym mitzählen, wie weit sie kommen.

Live: https://gededomalez.github.io/nur-bahnhof/

## Aufbau

| Datei | Zweck |
|---|---|
| `index.html` | Die App: Gestaltung, Ablauf und alle deutschen Texte |
| `texte-en.js`, `texte-es.js`, `texte-ar.js` | Die Übersetzungen. Aufbau und Reihenfolge müssen zu den deutschen Lektionen passen |
| `manifest.json`, `icon-*.png`, `apple-touch-icon.png` | Damit sich die App auf den Home-Bildschirm legen lässt |
| `*.woff2` | Die beiden Schriften als lokale Dateien, damit nichts von Dritten nachgeladen wird |
| `Code.gs` | Skript für die Google-Tabelle, die die Messdaten sammelt |

## Vor dem Teilen

1. Die Tabelle ist eingerichtet und bei `messUrl` eingetragen. Wie das ging, steht unten.
2. In `index.html` bei `betreiber` Name, Anschrift und E-Mail-Adresse für das Impressum eintragen.
3. Den Text unter „Datenschutz“ in der App prüfen lassen. Er ist ein Entwurf und keine Rechtsberatung.
4. Alle Inhalte einmal von einem Menschen gegenlesen lassen. Das gilt besonders für die Übersetzungen: Sie wurden mit KI erstellt und brauchen je eine Person, die die Sprache als Muttersprache spricht.

Solange `messUrl` leer ist, zählt die App nichts und fragt auch nicht nach einer Einwilligung.

## Tabelle einrichten

Das dauert etwa zehn Minuten und geht am besten am Computer.

1. Lege unter [sheets.new](https://sheets.new) eine neue Google-Tabelle an und gib ihr einen Namen, zum Beispiel „Nur Bahnhof Messung“.
2. Öffne in der Tabelle **Erweiterungen → Apps Script**.
3. Lösche den Beispielcode und füge den gesamten Inhalt von `Code.gs` ein. Speichere.
4. Wähle oben die Funktion `einrichten` und klicke auf **Ausführen**. Google fragt einmal nach der Berechtigung für diese Tabelle. Danach gibt es die Blätter „Ereignisse“ und „Auswertung“.
5. Klicke auf **Bereitstellen → Neue Bereitstellung**, wähle als Typ **Web-App**, bei „Ausführen als“ dich selbst und bei „Zugriff“ **Jeder**. Bestätige.
6. Kopiere die angezeigte Web-App-Adresse. Sie endet auf `/exec`. Wenn du sie im Browser öffnest, erscheint „Nur Bahnhof: Die Messung läuft.“
7. Trage die Adresse in `index.html` ganz oben im Skript bei `messUrl` ein.

Wenn du `Code.gs` später änderst, musst du unter **Bereitstellen → Bereitstellungen verwalten** eine neue Version veröffentlichen. Die Adresse bleibt gleich.

## Was gemessen wird

Nur nach einem Ja auf die Einwilligungsfrage, und nie mit Namen:

| Ereignis | Wann | Zusatzangaben |
|---|---|---|
| `start` | direkt nach dem Ja | Link-Kürzel, Sprache |
| `halt_start` | ein Halt wird begonnen | Nummer des Halts |
| `halt_fertig` | ein Halt wird abgeschlossen | richtige Aufgaben, Aufgaben gesamt, Sekunden |
| `kurs_fertig` | zum ersten Mal sind alle Halte geschafft | Gesamtpunkte |
| `feedback` | „Rückmeldung senden“ auf der Fahrkarte | Verständlichkeit 1 bis 5, Weitermachen, Freitext |

Jede Zeile trägt eine zufällige Kennung, die im Browser der Person entsteht. Wer Nein sagt, taucht in der Tabelle nicht auf. Die Auswertung kennt deshalb nur die Menschen, die zugestimmt haben.

Das Blatt „Auswertung“ rechnet bei jedem neuen Ereignis neu: Gestartete, geschaffte Halte mit Anteil, Abschlussquote, Wiederkehrer, Trefferquote und Dauer je Halt, Rückmeldungen und eine Aufteilung nach Link-Kürzel.

## Sprachen

Die App wählt die Sprache in dieser Reihenfolge: die eigene Wahl über die Knöpfe oben, dann `?l=` im Link, dann die Sprache des Browsers, sonst Deutsch.

```
https://gededomalez.github.io/nur-bahnhof/?l=ar
https://gededomalez.github.io/nur-bahnhof/?l=es&q=verein
```

Arabisch wird von rechts nach links gesetzt. Wer einen deutschen Text ändert, muss dieselbe Stelle in den drei `texte-*.js` nachziehen. In der Tabelle steht die Sprache in einer eigenen Spalte, die Auswertung zeigt Gestartete und Abschlüsse je Sprache.

## Kanäle vergleichen

Hänge an den Link ein Kürzel an, um zu sehen, woher die Leute kommen:

```
https://DEIN-NAME.github.io/nur-bahnhof/?q=familie
https://DEIN-NAME.github.io/nur-bahnhof/?q=vhs
```

Erlaubt sind Buchstaben, Ziffern und Bindestriche, höchstens 24 Zeichen.

## Grenzen

- Die Adresse der Tabelle steht offen im Code. Jemand mit bösem Willen könnte falsche Ereignisse schicken. Das Skript prüft jedes Feld und nimmt höchstens 20.000 Zeilen an, mehr Schutz gibt es nicht.
- Wer den Browser wechselt oder die Browserdaten löscht, zählt als neue Person.
- Die App erfährt nicht, ob ein Ereignis wirklich angekommen ist. Bei schlechter Verbindung können einzelne Zeilen fehlen.

## Inhalte ändern

Alle Lektionen stehen in `index.html` in der Liste `HALTE`, die Quellen in `Q`, das Glossar in `GLOSSAR`. Jede Zahl im Kurs verweist auf einen Eintrag in `Q`.

## Schriften

Atkinson Hyperlegible (Braille Institute of America), Barlow Condensed (The Barlow Project Authors) und Noto Sans Arabic (The Noto Project Authors), alle unter der SIL Open Font License 1.1. Die Lizenztexte liegen in den `LICENSE-…`-Dateien.
