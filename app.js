(function () {
  "use strict";
  var LANGS = ["cat", "es", "fr", "en"];
  var CAT_ORDER = ["entrants","amanides","sopes","pasta","pasta_farcida","pizzes","pizzes_blanques","carn","postres","begudes","cerveses","alcohol","coctels","cafe_te","suplements"];
  var HIDE_TAKE = { sopes:1, cafe_te:1, alcohol:1, coctels:1 };
  var CATS = {
    cat: {entrants:"Entrants",amanides:"Amanides",sopes:"Sopes",pasta:"Pasta",pasta_farcida:"Pasta farcida",pizzes:"Pizzes",pizzes_blanques:"Pizzes blanques",carn:"Carn",postres:"Postres",begudes:"Begudes",cerveses:"Cerveses",alcohol:"Alcohol",coctels:"Còctels",cafe_te:"Cafè i te",suplements:"Suplements"},
    es: {entrants:"Entrantes",amanides:"Ensaladas",sopes:"Sopas",pasta:"Pasta",pasta_farcida:"Pasta rellena",pizzes:"Pizzas",pizzes_blanques:"Pizzas blancas",carn:"Carne",postres:"Postres",begudes:"Bebidas",cerveses:"Cervezas",alcohol:"Alcohol",coctels:"Cócteles",cafe_te:"Café y té",suplements:"Suplementos"},
    fr: {entrants:"Entrées",amanides:"Salades",sopes:"Soupes",pasta:"Pâtes",pasta_farcida:"Pâtes farcies",pizzes:"Pizzas",pizzes_blanques:"Pizzas blanches",carn:"Viande",postres:"Desserts",begudes:"Boissons",cerveses:"Bières",alcohol:"Alcools",coctels:"Cocktails",cafe_te:"Café et thé",suplements:"Suppléments"},
    en: {entrants:"Starters",amanides:"Salads",sopes:"Soups",pasta:"Pasta",pasta_farcida:"Stuffed pasta",pizzes:"Pizzas",pizzes_blanques:"White pizzas",carn:"Meat",postres:"Desserts",begudes:"Drinks",cerveses:"Beers",alcohol:"Spirits",coctels:"Cocktails",cafe_te:"Coffee & tea",suplements:"Extras"}
  };
  var I18N = {
    "nav.menu": {cat:"La carta",es:"La carta",fr:"La carte",en:"Menu"},
    "nav.house": {cat:"El restaurant",es:"El restaurante",fr:"Le restaurant",en:"The restaurant"},
    "nav.visit": {cat:"Com arribar",es:"Cómo llegar",fr:"Accès",en:"Find us"},
    "jobs.cta": {cat:"Enviar CV",es:"Enviar CV",fr:"Envoyer le CV",en:"Send CV"},
    "nav.privacy": {cat:"Privadesa",es:"Privacidad",fr:"Confidentialité",en:"Privacy"},
    "ch.rest": {cat:"Restaurant",es:"Restaurante",fr:"Restaurant",en:"Restaurant"},
    "ch.take": {cat:"Per emportar",es:"Para llevar",fr:"À emporter",en:"Takeaway"},
    "call": {cat:"Trucar",es:"Llamar",fr:"Appeler",en:"Call"},
    "hero.title": {cat:"La taula italiana, a casa vostra.",es:"La mesa italiana, en casa.",fr:"La table italienne, chez vous.",en:"The Italian table, at home."},
    "hero.sub": {cat:"Plats cuinats amb cura, servei atent i ambient acollidor. Carta en català, castellà, francès i anglès.",es:"Platos cocinados con cuidado, servicio atento y ambiente acogedor. Carta en catalán, castellano, francés e inglés.",fr:"Des plats cuisinés avec soin, un service attentif et une salle chaleureuse.",en:"Carefully cooked dishes, attentive service and a warm room."},
    "hero.cta": {cat:"Veure la carta",es:"Ver la carta",fr:"Voir la carte",en:"View the menu"},
    "badge.dine": {cat:"MENJAR AL LOCAL",es:"COMER EN EL LOCAL",fr:"SUR PLACE",en:"DINE-IN"},
    "badge.take": {cat:"PER EMPORTAR",es:"PARA LLEVAR",fr:"À EMPORTER",en:"TAKEAWAY"},
    "info.addr": {cat:"ADREÇA",es:"DIRECCIÓN",fr:"ADRESSE",en:"ADDRESS"},
    "info.hours": {cat:"HORARI",es:"HORARIO",fr:"HORAIRES",en:"HOURS"},
    "info.hoursV": {cat:"Dt – ds · 13:00–16:00 / 19:30–22:30",es:"Ma – sá · 13:00–16:00 / 19:30–22:30",fr:"Ma – sa · 13:00–16:00 / 19:30–22:30",en:"Tue – Sat · 13:00–16:00 / 19:30–22:30"},
    "info.closed": {cat:"Tancat diumenges i dilluns · fitxa de Google",es:"Cerrado domingos y lunes · ficha de Google",fr:"Fermé dimanche et lundi · fiche Google",en:"Closed Sunday and Monday · Google listing"},
    "info.how": {cat:"Com arribar",es:"Cómo llegar",fr:"Comment venir",en:"How to get here"},
    "info.hoursLink": {cat:"Veure horari complet",es:"Ver horario completo",fr:"Voir les horaires",en:"See full hours"},
    "info.tel": {cat:"TELÈFON",es:"TELÉFONO",fr:"TÉLÉPHONE",en:"PHONE"},
    "info.telN": {cat:"Reserves i comandes per emportar",es:"Reservas y pedidos para llevar",fr:"Réservations et commandes à emporter",en:"Bookings and takeaway orders"},
    "info.call": {cat:"Trucar ara",es:"Llamar ahora",fr:"Appeler",en:"Call now"},
    "menu.k": {cat:"LA CARTA",es:"LA CARTA",fr:"LA CARTE",en:"THE MENU"},
    "menu.t": {cat:"Cuina italiana, sense dreceres.",es:"Cocina italiana, sin atajos.",fr:"Cuisine italienne, sans raccourcis.",en:"Italian cooking, no shortcuts."},
    "menu.p": {cat:"Carta digital del catàleg intern. Sense botons de compra: és una carta de restaurant, no una botiga.",es:"Carta digital del catálogo interno. Sin botones de compra: es una carta de restaurante, no una tienda.",fr:"Carte numérique du catalogue interne. Pas de bouton d’achat.",en:"Digital menu from the internal catalogue. No buy buttons."},
    "menu.more": {cat:"Ampliar la carta",es:"Ampliar la carta",fr:"Voir toute la carte",en:"Full menu"},
    "menu.allergen": {cat:"Al·lèrgens pendent de validació al catàleg. Consulteu-nos al local.",es:"Alérgenos pendientes de validación. Consúltanos en el local.",fr:"Allergènes en attente de validation. Demandez-nous sur place.",en:"Allergens pending validation. Ask us in the restaurant."},
    "house.k": {cat:"EL RESTAURANT",es:"EL RESTAURANTE",fr:"LE RESTAURANT",en:"THE RESTAURANT"},
    "house.t": {cat:"Sala petita, cuina italiana, tracte de casa.",es:"Sala pequeña, cocina italiana, trato de casa.",fr:"Petite salle, cuisine italienne, accueil de maison.",en:"A small room, Italian cooking, house hospitality."},
    "house.p": {cat:"Bella Ciao és la pizzeria italiana de confiança a Santa Coloma: plats cuinats amb cura, servei atent i ambient acollidor.",es:"Bella Ciao es la pizzería italiana de confianza en Santa Coloma.",fr:"Bella Ciao est la pizzeria italienne de confiance à Santa Coloma.",en:"Bella Ciao is Santa Coloma’s trusted Italian pizzeria."},
    "house.p2": {cat:"A la fitxa de Google: menjar al local i per emportar. No consta lliurament a domicili.",es:"En la ficha de Google: comer en el local y para llevar. No consta entrega a domicilio.",fr:"Sur Google : sur place et à emporter. Pas de livraison à domicile.",en:"Google lists dine-in and takeaway. No home delivery."},
    "visit.k": {cat:"COM ARRIBAR",es:"CÓMO LLEGAR",fr:"ACCÈS",en:"FIND US"},
    "visit.t": {cat:"Santa Coloma, a peu de l’avinguda d’Enclar.",es:"Santa Coloma, a pie de la avenida d’Enclar.",fr:"Santa Coloma, au pied de l’avinguda d’Enclar.",en:"Santa Coloma, on Avinguda d’Enclar."},
    "visit.maps": {cat:"Obrir a Google Maps",es:"Abrir en Google Maps",fr:"Ouvrir dans Google Maps",en:"Open in Google Maps"},
    "day.mon": {cat:"Dilluns",es:"Lunes",fr:"Lundi",en:"Monday"},
    "day.tue": {cat:"Dimarts – Dissabte",es:"Martes – Sábado",fr:"Mardi – Samedi",en:"Tuesday – Saturday"},
    "day.sun": {cat:"Diumenge",es:"Domingo",fr:"Dimanche",en:"Sunday"},
    "closed": {cat:"Tancat",es:"Cerrado",fr:"Fermé",en:"Closed"},
    "jobs.k": {cat:"TREBALLA AMB NOSALTRES",es:"TRABAJA CON NOSOTROS",fr:"REJOIGNEZ-NOUS",en:"WORK WITH US"},
    "jobs.p": {cat:"Envia el teu CV a staffandorra@andorra.ad. No recollim candidatures en un formulari intern.",es:"Envía tu CV a staffandorra@andorra.ad. No recogemos candidaturas en un formulario interno.",fr:"Envoyez votre CV à staffandorra@andorra.ad.",en:"Send your CV to staffandorra@andorra.ad."},
    "foot.tag": {cat:"Cuina italiana a Santa Coloma, Andorra.",es:"Cocina italiana en Santa Coloma, Andorra.",fr:"Cuisine italienne à Santa Coloma, Andorre.",en:"Italian cooking in Santa Coloma, Andorra."},
    "foot.follow": {cat:"SEGUEIX-NOS",es:"SÍGUENOS",fr:"NOUS SUIVRE",en:"FOLLOW"},
    "foot.iva": {cat:"Preus en euros, IVA inclòs. Carta subjecta a canvis.",es:"Precios en euros, IVA incluido. Carta sujeta a cambios.",fr:"Prix en euros, TVA comprise.",en:"Prices in euros, VAT included."},
    "cookie.t": {cat:"Galetes",es:"Cookies",fr:"Cookies",en:"Cookies"},
    "cookie.p": {cat:"Fem servir galetes tècniques per mostrar la carta. Les opcionals només s’activen si ho accepteu. Rebutjar és tan fàcil com acceptar. Llei 29/2021 (LQPD) i APDA.",es:"Usamos cookies técnicas para mostrar la carta. Las opcionales solo se activan si las aceptáis. Rechazar es tan fácil como aceptar.",fr:"Cookies techniques pour afficher la carte. Les optionnels ne s’activent que si vous les acceptez.",en:"We use technical cookies to show the menu. Optional cookies only run if you accept them."},
    "cookie.ok": {cat:"Acceptar opcionals",es:"Aceptar opcionales",fr:"Accepter les optionnels",en:"Accept optional"},
    "cookie.no": {cat:"Només les necessàries",es:"Solo las necesarias",fr:"Uniquement les nécessaires",en:"Necessary only"},
    "cookie.read": {cat:"Llegir la política de privadesa",es:"Leer la política de privacidad",fr:"Lire la politique de confidentialité",en:"Read the privacy policy"}
  };

  var state = { lang: "cat", channel: "restaurant" };
  var menu = [];

  function money(n) {
    if (n == null || n === 0) {
      return {cat:"Consultar",es:"Consultar",fr:"Nous demander",en:"Ask us"}[state.lang];
    }
    return n.toLocaleString("ca-AD", { style: "currency", currency: "EUR" });
  }
  function t(key) {
    var e = I18N[key];
    return (e && e[state.lang]) || (e && e.cat) || key;
  }
  function items() {
    return menu.filter(function (d) {
      if (state.channel === "delivery") return d.takeaway && !HIDE_TAKE[d.cat];
      return true;
    });
  }
  function catsOf(list) {
    return CAT_ORDER.filter(function (c) { return list.some(function (d) { return d.cat === c; }); });
  }
  function row(d) {
    var name = d.name[state.lang] || d.name.cat;
    var desc = d.desc[state.lang] || d.desc.cat;
    var price = money(state.channel === "delivery" ? d.priceT : d.priceR);
    var r = document.createElement("div");
    r.className = "menu-row";
    var line = document.createElement("div");
    line.className = "menu-line";
    var nm = document.createElement("div");
    nm.className = "menu-name";
    nm.textContent = name;
    var pr = document.createElement("div");
    pr.className = "menu-price";
    pr.textContent = price;
    line.appendChild(nm);
    line.appendChild(pr);
    r.appendChild(line);
    if (desc) {
      var p = document.createElement("div");
      p.className = "menu-desc";
      p.textContent = desc;
      r.appendChild(p);
    }
    return r;
  }
  function cols(list) {
    var wrap = document.createElement("div");
    wrap.className = "menu-cols";
    var half = Math.ceil(list.length / 2) || 1;
    [list.slice(0, half), list.slice(half)].forEach(function (part) {
      var c = document.createElement("div");
      c.className = "menu-col";
      part.forEach(function (d) { c.appendChild(row(d)); });
      wrap.appendChild(c);
    });
    return wrap;
  }
  function renderPreview() {
    var host = document.getElementById("preview-panel");
    if (!host) return;
    host.innerHTML = "";
    var list = items().filter(function (d) { return d.cat === "pizzes"; }).slice(0, 6);
    if (!list.length) list = items().slice(0, 6);
    host.appendChild(cols(list));
  }
  function renderCarta() {
    var host = document.getElementById("menu-body");
    var index = document.getElementById("menu-index");
    var title = document.getElementById("menu-title");
    var intro = document.getElementById("menu-intro");
    if (!host) return;
    var list = items();
    var cats = catsOf(list);
    host.innerHTML = "";
    if (index) index.innerHTML = "";
    if (title) title.textContent = state.channel === "delivery" ? t("ch.take") : t("ch.rest");
    if (intro) {
      intro.textContent = state.channel === "delivery"
        ? t("house.p2")
        : list.length + " plats · " + cats.length + " seccions.";
    }
    cats.forEach(function (c, i) {
      var rows = list.filter(function (d) { return d.cat === c; }).sort(function (a, b) { return a.orden - b.orden; });
      var block = document.createElement("section");
      block.className = "menu-block";
      block.id = c;
      var head = document.createElement("div");
      head.className = "block-head";
      var h = document.createElement("h3");
      h.textContent = CATS[state.lang][c];
      head.appendChild(h);
      block.appendChild(head);
      block.appendChild(cols(rows));
      host.appendChild(block);
      if (index) {
        var a = document.createElement("a");
        a.className = "tab" + (i === 0 ? " is-active" : "");
        a.href = "#" + c;
        a.textContent = CATS[state.lang][c];
        index.appendChild(a);
      }
    });
  }
  function translate() {
    document.documentElement.lang = state.lang === "cat" ? "ca" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === state.lang));
    });
    document.querySelectorAll("[data-channel]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-channel") === state.channel));
    });
    var h = document.querySelector(".site-header");
    if (h) document.documentElement.style.setProperty("--header-h", h.offsetHeight + "px");
  }
  function cookies() {
    var bar = document.getElementById("cookie");
    if (!bar) return;
    try {
      if (!localStorage.getItem("bc-cookies")) bar.hidden = false;
    } catch (e) { bar.hidden = false; }
    bar.querySelectorAll("[data-cookie]").forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.setItem("bc-cookies", b.getAttribute("data-cookie")); } catch (err) {}
        bar.hidden = true;
      });
    });
  }
  function save() {
    try {
      localStorage.setItem("bc-lang", state.lang);
      localStorage.setItem("bc-channel", state.channel);
    } catch (e) {}
    try {
      var u = new URL(location.href);
      u.searchParams.set("lang", state.lang);
      u.searchParams.set("canal", state.channel);
      history.replaceState(null, "", u);
    } catch (e) {}
  }
  function load() {
    var p = new URLSearchParams(location.search);
    var l = p.get("lang"), c = p.get("canal");
    try {
      l = l || localStorage.getItem("bc-lang");
      c = c || localStorage.getItem("bc-channel");
    } catch (e) {}
    if (LANGS.indexOf(l) >= 0) state.lang = l;
    if (c === "delivery" || c === "restaurant") state.channel = c;
  }
  function paint() {
    translate();
    renderPreview();
    renderCarta();
  }
  function bind() {
    document.addEventListener("click", function (e) {
      var langBtn = e.target.closest("[data-lang]");
      if (langBtn) {
        e.preventDefault();
        state.lang = langBtn.getAttribute("data-lang");
        save();
        paint();
        return;
      }
      var chBtn = e.target.closest("[data-channel]");
      if (chBtn) {
        e.preventDefault();
        var next = chBtn.getAttribute("data-channel");
        var onCarta = /carta\.html/i.test(location.pathname + location.href);
        if (!onCarta) {
          location.href = "carta.html?canal=" + encodeURIComponent(next) + "&lang=" + encodeURIComponent(state.lang);
          return;
        }
        state.channel = next;
        save();
        paint();
        return;
      }
      var cook = e.target.closest("[data-cookie]");
      if (cook) {
        e.preventDefault();
        try { localStorage.setItem("bc-cookies", cook.getAttribute("data-cookie")); } catch (err) {}
        var bar = document.getElementById("cookie");
        if (bar) bar.hidden = true;
        return;
      }
      var toggle = e.target.closest("#navToggle");
      if (toggle) {
        var panel = document.getElementById("navPanel");
        if (!panel) return;
        var open = panel.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      }
    });
  }
  function init() {
    load();
    bind();
    cookies();
    translate();
    function ready(data) { menu = data || []; paint(); }
    if (window.BC_MENU) ready(window.BC_MENU);
    else fetch("menu.json").then(function (r) { return r.json(); }).then(ready).catch(function () { ready([]); });
    window.addEventListener("resize", translate);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
