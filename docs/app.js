/* Bilingual switch. English lives in the HTML (works without JS); German lives here. */
(function () {
  "use strict";

  var DE = {
    title: "Recep Baş – Berufseinsteiger IT in Wien",
    desc: "Recep Baş, HTL-Absolvent (TGM Wien, Betriebsinformatik, 2026) mit Erfahrung in Python, SQL und Webentwicklung. Diplomarbeit: medizinische Wissensdatenbank mit FastAPI und SQLite. Sucht den Einstieg in Softwareentwicklung, IT-Support oder Business Software in Wien.",
    skip: "Zum Inhalt springen",
    navLabel: "Hauptnavigation",
    navProjects: "Projekte",
    navPath: "Werdegang",
    navSkills: "Kenntnisse",
    navContact: "Kontakt",
    status: "Offen für Angebote · Wien",
    role: "HTL-Absolvent · Wirtschaftsingenieurwesen – Betriebsinformatik",
    lede: "Ich habe Erfahrung in Python, SQL und Webentwicklung. In meiner Diplomarbeit habe ich eine webbasierte medizinische Wissensdatenbank mit FastAPI und SQLite entwickelt. Ich suche den Einstieg in Softwareentwicklung, IT-Support oder Business Software und ERP.",
    btnMail: "E-Mail schreiben",
    btnCv: "Lebenslauf",
    photoAlt: "Porträt von Recep Baş im dunklen Sakko und weißen Hemd",
    factsLabel: "Steckbrief",
    fDegree: "Abschluss",
    fDegreeV: "Matura &amp; Diplom, TGM Wien, 2026",
    fPlace: "Standort",
    fPlaceV: "Wien, Österreich",
    fLang: "Sprachen",
    fLangV: "Deutsch, Türkisch, Englisch",
    fSeek: "Gesucht",
    fSeekV: "Softwareentwicklung, IT-Support, Business Software / ERP",
    hProjects: "Projekte",
    techLabel: "Technologien",
    p1Title: "Digitale Medizinische Wissensdatenbank",
    p1Meta: "Diplomarbeit · Teamprojekt",
    p1Text: "Webbasierte Wissensdatenbank für ein KI-gestütztes medizinisches Assistenzsystem. Mein Schwerpunkt war die Wissensdatenbank (Einträge verwalten, Kategorien, Suche und Filter).",
    p2Meta: "ASL-Erkennung in Echtzeit · HACK_002 24h AI Hackathon",
    p2Text: "Browser-Prototyp, der einzelne ASL-Zeichen per Webcam direkt auf dem Gerät erkennt.",
    codeGh: "Code auf GitHub",
    demo: "Demo",
    p3Meta: "Wissensgraph für seltene Erkrankungen · Hack-Nation 7th Global AI Hackathon, Vienna Hub · gemeinsam im Team entwickelt",
    p3Text: "Ein Wissensgraph, der seltene Erkrankungen nach zugrunde liegenden Mechanismen statt nur nach Namen strukturiert.",
    hPath: "Werdegang",
    eduMeta: "Reife- und Diplomprüfung, Wirtschaftsingenieurwesen – Betriebsinformatik",
    eduIT: "IT: Softwareentwicklung und Projektmanagement, Datenbanken, Informatik und Informationssysteme (ERP mit SAP und Odoo), Netzwerke und Embedded Software, Cloud Computing und Infrastructure",
    eduBiz: "Wirtschaft und Technik: Betriebstechnik, Unternehmensführung und Wirtschaftsrecht, Angewandte Mathematik, Angewandte Mechatronik, Laboratorium",
    eduElec: "Freigegenstände: Technisch innovative Projekte, Volleyball",
    workTitle: "SPAR Österreich, Wien",
    workMeta: "Marktmitarbeiter, Kassa (geringfügig)",
    workText: "Kundenbetreuung und Kassa; verantwortlicher Umgang mit Bargeld und Waren. Genaues Arbeiten unter Zeitdruck.",
    hSkills: "Kenntnisse",
    gDev: "Entwicklung",
    gDevV: "Python, FastAPI, REST-API, SQL / SQLite, HTML / CSS, JavaScript, TypeScript / React (Grundlagen), Git / GitHub",
    gBiz: "Business &amp; Cloud",
    gBizV: "SAP ERP (Grundlagen), Odoo (Grundlagen), Microsoft Azure Fundamentals, MS Office",
    gLang: "Sprachen",
    gLangV: "Deutsch und Türkisch (Muttersprache), Englisch (fließend)",
    gCert: "Zertifikate",
    gCertV: "Microsoft Certified: Azure Fundamentals (2025) · SAP ERP-Grundlagen (2026) · Odoo 18 Business Game (2026) · CLIL Certificate (2026) · Sicherheitsvertrauensperson (SVP) · Führerschein Klasse B",
    hContact: "Kontakt",
    contactIntro: "Ich freue mich über jede Nachricht und beantworte gern Fragen zu meinen Projekten.",
    cMail: "E-Mail",
    cvTitle: "Lebenslauf herunterladen",
    cvDe: "Deutsch",
    cvEn: "Englisch",
    cvEnNo: "Englisch, ohne Foto",
    legalSum: "Impressum &amp; Datenschutz",
    legalText: "Offenlegung nach § 25 Mediengesetz: Medieninhaber und Herausgeber ist Recep Baş, Wohnort Wien, Österreich. Diese Website dient der persönlichen Vorstellung und Bewerbung. Kontakt: Recep.Bas_@hotmail.com.<br><br>Datenschutz: Diese Seite verwendet keine Cookies, kein Tracking und keine externen Dienste oder Schriften. Die gewählte Sprache wird nur lokal in Ihrem Browser gespeichert. Der Hosting-Anbieter kann technisch bedingt Zugriffsdaten (z. B. IP-Adresse) in Server-Logs verarbeiten. Bei Kontakt per E-Mail verarbeite ich Ihre Angaben nur, um Ihnen zu antworten."
  };

  var KEY = "rb-lang";
  var root = document.documentElement;
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang button"));
  var descMeta = document.querySelector('meta[name="description"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var en = { title: document.title, desc: descMeta ? descMeta.content : "" };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (el) { en[el.getAttribute("data-i18n")] = el.innerHTML; });

  var attrs = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-attr]")).map(function (el) {
    var parts = el.getAttribute("data-i18n-attr").split(":");
    return { el: el, attr: parts[0], key: parts[1], en: el.getAttribute(parts[0]) };
  });
  var hrefs = Array.prototype.slice.call(document.querySelectorAll("[data-href-de]"));

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* storage blocked: fine */ }
  }

  function initial() {
    var saved = read();
    if (saved === "de" || saved === "en") return saved;
    return "en";
  }

  function apply(lang) {
    var dict = lang === "de" ? DE : en;
    root.lang = lang;
    document.title = dict.title;
    if (descMeta) descMeta.content = dict.desc;
    if (ogTitle) ogTitle.content = dict.title;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    attrs.forEach(function (a) {
      var v = lang === "de" ? DE[a.key] : a.en;
      if (v != null) a.el.setAttribute(a.attr, v);
    });
    hrefs.forEach(function (a) { a.setAttribute("href", a.getAttribute("data-href-" + lang)); });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-lang");
      apply(lang);
      write(lang);
    });
  });

  var start = initial();
  if (start !== "en") apply(start);
})();
