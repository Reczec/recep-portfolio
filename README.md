# Recep Baş – Portfolio

Persönliche Portfolio-Website von Recep Baş: HTL-Absolvent (TGM Wien, Wirtschaftsingenieurwesen – Betriebsinformatik, 2026), auf der Suche nach dem Einstieg in Softwareentwicklung, IT-Support oder Business Software / ERP in Wien.

Die aktuelle Seite liegt in [`site/`](site/): reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Funktionen

- Dunkles, minimalistisches Design, mobil zuerst
- Zweisprachig: Deutsch (Standard) und Englisch per DE/EN-Schalter. Die Browsersprache wird beim ersten Besuch berücksichtigt, die Wahl wird lokal gespeichert.
- Projekte, Werdegang, Kenntnisse und Zertifikate, Kontakt
- Lebenslauf zum Download (Deutsch, Englisch, Englisch ohne Foto)
- Keine Cookies, kein Tracking, keine externen Dienste; die Schrift (Geist) wird lokal ausgeliefert
- Tastaturbedienbar, sichtbarer Fokus, `prefers-reduced-motion` wird beachtet

## Lokal ansehen

```bash
python -m http.server 3036 --directory site
```

Dann `http://localhost:3036` öffnen.

## Inhalte ändern

- Deutsche Texte: `site/index.html`
- Englische Texte: `site/app.js` (Objekt `EN`, gleiche Schlüssel wie `data-i18n` im HTML)
- Lebensläufe: `site/cv/` (PDFs ersetzen, Dateinamen beibehalten)
- Foto: `site/img/recep.webp`
- Farben, Schrift, Abstände: `site/style.css`

## Veröffentlichen

Den Ordner `site/` auf einen statischen Host legen (GitHub Pages, Netlify, Vercel). Es ist kein Build nötig.

## Projektdokumentation

- [`PRODUCT.md`](PRODUCT.md): Zielgruppe, Zweck und belegte Inhalte der Seite
- [`DESIGN.md`](DESIGN.md): Design-System (Farben, Typografie, Komponenten)

## Ältere Version

Im Repository liegt außerdem die frühere Next.js-Version des Portfolios (`src/`, `public/`, `package.json`). Sie wird von der aktuellen Seite nicht verwendet.

```bash
npm run dev   # Next.js-Version auf Port 3035
```

## Kontakt

- E-Mail: Recep.Bas_@hotmail.com
- [LinkedIn](https://www.linkedin.com/in/recep-ba%C5%9F/)
- [GitHub](https://github.com/Reczec)
