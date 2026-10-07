/* Bilingual switch. German lives in the HTML (works without JS); English lives here. */
(function () {
  "use strict";

  var EN = {
    title: "Recep Baş – Junior IT professional in Vienna",
    desc: "Recep Baş, HTL graduate (TGM Wien, business informatics, 2026) with experience in Python, SQL and web development. Diploma thesis: medical knowledge database with FastAPI and SQLite. Looking for an entry-level role in software development, IT support or business software in Vienna.",
    skip: "Skip to content",
    navLabel: "Main navigation",
    navProjects: "Projects",
    navPath: "Background",
    navSkills: "Skills",
    navContact: "Contact",
    status: "Open to offers · Vienna",
    role: "HTL graduate · Industrial Engineering – Business Informatics",
    lede: "I have experience in Python, SQL and web development. In my diploma thesis I built a web-based medical knowledge database with FastAPI and SQLite. I am looking for an entry-level role in software development, IT support or business software and ERP.",
    btnMail: "Send e-mail",
    btnCv: "CV",
    btnCall: "Call",
    photoAlt: "Portrait of Recep Baş in a dark blazer and white shirt",
    factsLabel: "Key facts",
    fDegree: "Qualification",
    fDegreeV: "Matura & diploma, TGM Wien, 2026",
    fPlace: "Location",
    fPlaceV: "Vienna, Austria",
    fLang: "Languages",
    fLangV: "German, Turkish, English",
    fSeek: "Looking for",
    fSeekV: "Software development, IT support, business software / ERP",
    hProjects: "Projects",
    techLabel: "Technologies",
    p1Title: "Digital Medical Knowledge Database",
    p1Meta: "Diploma thesis · Team project",
    p1Text: "A web-based knowledge database, part of an AI-assisted medical assistance system. My focus was the knowledge database.",
    p1B1: "Create, edit and archive entries; organisation via categories and keywords; search and filter functions",
    p1B2: "Backend and REST API with Python and FastAPI, data storage in SQLite, web interface with HTML, CSS and JavaScript, JSON export",
    p1B3: "Also: concept, research, testing, documentation and final presentation",
    p2Meta: "Real-time ASL recognition · HACK_002 24h AI Hackathon",
    p2Text: "A browser-based prototype that recognises isolated ASL signs via webcam, running directly on the device.",
    codeGh: "Code on GitHub",
    demo: "Demo",
    p3Meta: "Rare disease knowledge graph · Hack-Nation 7th Global AI Hackathon, Vienna Hub · built together as a team",
    p3Text: "A knowledge graph that structures rare diseases by underlying mechanisms rather than by name alone. Connections are shown with sources and evidence levels.",
    hPath: "Background",
    eduMeta: "Matura & engineering diploma, Industrial Engineering – Business Informatics",
    eduText: "Focus: software development, databases, ERP systems, project management, networks.",
    workTitle: "SPAR Austria, Vienna",
    workMeta: "Retail associate, checkout (part-time)",
    workText: "Customer service and checkout; responsible handling of cash and goods. Accurate work under time pressure.",
    hSkills: "Skills",
    gDev: "Development",
    gDevV: "Python, FastAPI, REST API, SQL / SQLite, HTML / CSS, JavaScript, TypeScript / React (basics), Git / GitHub",
    gBiz: "Business & Cloud",
    gBizV: "SAP ERP (basics), Odoo (basics), Microsoft Azure Fundamentals, MS Office",
    gLang: "Languages",
    gLangV: "German and Turkish (native), English (fluent, business proficient)",
    gCert: "Certificates",
    gCertV: "Microsoft Certified: Azure Fundamentals (2025) · SAP ERP Fundamentals (2026) · Odoo 18 Business Game (2026) · CLIL Certificate (2026) · Safety Representative (SVP) · Driving licence category B",
    hContact: "Contact",
    contactIntro: "I am happy about every message and glad to answer questions about my projects.",
    cMail: "E-mail",
    cPhone: "Phone",
    cvTitle: "Download CV",
    cvDe: "German",
    cvEn: "English",
    cvEnNo: "English, without photo",
    legalSum: "Legal notice & privacy",
    legalText: "Disclosure under § 25 Austrian Media Act: Recep Baş, residing in Vienna, Austria, is the media owner and publisher. This website is for personal presentation and job applications. Contact: Recep.Bas_@hotmail.com.<br><br>Privacy: This site uses no cookies, no tracking and no external services or fonts. Your chosen language is stored only locally in your browser. The hosting provider may process technical access data (for example the IP address) in server logs. If you contact me by e-mail or phone, I process your details only to reply to you."
  };

  var KEY = "rb-lang";
  var root = document.documentElement;
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".lang button"));
  var descMeta = document.querySelector('meta[name="description"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var de = { title: document.title, desc: descMeta ? descMeta.content : "" };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (el) { de[el.getAttribute("data-i18n")] = el.innerHTML; });

  var attrs = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-attr]")).map(function (el) {
    var parts = el.getAttribute("data-i18n-attr").split(":");
    return { el: el, attr: parts[0], key: parts[1], de: el.getAttribute(parts[0]) };
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
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "de";
    return String(nav).toLowerCase().indexOf("en") === 0 ? "en" : "de";
  }

  function apply(lang) {
    var dict = lang === "en" ? EN : de;
    root.lang = lang;
    document.title = dict.title;
    if (descMeta) descMeta.content = dict.desc;
    if (ogTitle) ogTitle.content = dict.title;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    attrs.forEach(function (a) {
      var v = lang === "en" ? EN[a.key] : a.de;
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
  if (start !== "de") apply(start);
})();
