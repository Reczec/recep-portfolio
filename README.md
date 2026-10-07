# Recep Baş – Portfolio

Persönliche Portfolio-Website von Recep Baş: HTL-Absolvent (TGM Wien, Wirtschaftsingenieurwesen – Betriebsinformatik, 2026), auf der Suche nach dem Einstieg in Softwareentwicklung, IT-Support oder Business Software / ERP in Wien.

Die aktuelle Seite liegt in [`docs/`](docs/): reines HTML, CSS und JavaScript, ohne Build-Schritt.

## Funktionen

- Dunkles, minimalistisches Design, mobil zuerst
- Zweisprachig: Deutsch (Standard) und Englisch per DE/EN-Schalter. Die Browsersprache wird beim ersten Besuch berücksichtigt, die Wahl wird lokal gespeichert.
- Projekte, Werdegang, Kenntnisse und Zertifikate, Kontakt
- Lebenslauf zum Download (Deutsch, Englisch, Englisch ohne Foto)
- Keine Cookies, kein Tracking, keine externen Dienste; die Schrift (Geist) wird lokal ausgeliefert
- Tastaturbedienbar, sichtbarer Fokus, `prefers-reduced-motion` wird beachtet

## Lokal ansehen

```bash
python -m http.server 3036 --directory docs
```

Dann `http://localhost:3036` öffnen.

## Inhalte ändern

- Deutsche Texte: `docs/index.html`
- Englische Texte: `docs/app.js` (Objekt `EN`, gleiche Schlüssel wie `data-i18n` im HTML)
- Lebensläufe: `docs/cv/` (PDFs ersetzen, Dateinamen beibehalten)
- Foto: `docs/img/recep.webp`
- Farben, Schrift, Abstände: `docs/style.css`

## Veröffentlichen

Der Ordner `docs/` ist direkt als statische Seite veröffentlichbar. Bei GitHub Pages: *Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch `main`, Ordner `/docs`*. Alternativ lässt sich `docs/` auf jeden statischen Host legen (Netlify, Vercel); es ist kein Build nötig.

## Projektdokumentation

- [`PRODUCT.md`](PRODUCT.md): Zielgruppe, Zweck und belegte Inhalte der Seite
- [`DESIGN.md`](DESIGN.md): Design-System (Farben, Typografie, Komponenten)

## Kontakt

- E-Mail: Recep.Bas_@hotmail.com
- [LinkedIn](https://www.linkedin.com/in/recep-ba%C5%9F/)
- [GitHub](https://github.com/Reczec)
