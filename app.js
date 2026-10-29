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
    "nav.menu": {cat:"Carta",es:"Carta",fr:"Carte",en:"Menu"},
    "nav.house": {cat:"El restaurant",es:"El restaurante",fr:"Le restaurant",en:"The restaurant"},
    "nav.visit": {cat:"Com arribar",es:"Cómo llegar",fr:"Accès",en:"Find us"},
    "jobs.cta": {cat:"Enviar CV",es:"Enviar CV",fr:"Envoyer le CV",en:"Send CV"},
    "jobs.t": {cat:"Envia’ns el teu CV.",es:"Envíanos tu CV.",fr:"Envoyez-nous votre CV.",en:"Send us your CV."},
    "jobs.legal": {cat:"Les dades de candidatura es tracten segons la Llei 29/2021 (LQPD) i la ",es:"Los datos de candidatura se tratan según la Ley 29/2021 (LQPD) y la ",fr:"Les données de candidature sont traitées selon la loi 29/2021 (LQPD) et la ",en:"Application data is handled under Law 29/2021 (LQPD) and the "},
    "nav.privacy": {cat:"Privadesa",es:"Privacidad",fr:"Confidentialité",en:"Privacy"},
    "ch.rest": {cat:"Restaurant",es:"Restaurante",fr:"Restaurant",en:"Restaurant"},
    "ch.take": {cat:"Per emportar",es:"Para llevar",fr:"À emporter",en:"Takeaway"},
    "call": {cat:"Trucar",es:"Llamar",fr:"Appeler",en:"Call"},
    "hero.title": {cat:"La taula italiana, a casa vostra.",es:"La mesa italiana, en casa.",fr:"La table italienne, chez vous.",en:"The Italian table, at home."},
    "hero.sub": {cat:"Plats cuinats amb cura, servei atent i ambient acollidor. Carta en català, castellà, francès i anglès.",es:"Platos cocinados con cuidado, servicio atento y ambiente acogedor. Carta en catalán, castellano, francés e inglés.",fr:"Des plats cuisinés avec soin, un service attentif et une salle chaleureuse.",en:"Carefully cooked dishes, attentive service and a warm room."},
    "hero.cta": {cat:"Veure la carta",es:"Ver la carta",fr:"Voir la carte",en:"View the menu"},
    "hero.book": {cat:"Reservar",es:"Reservar",fr:"Réserver",en:"Reserve"},
    "badge.reviews": {cat:"ressenyes a Google",es:"reseñas en Google",fr:"avis sur Google",en:"Google reviews"},
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
    "menu.k": {cat:"Carta",es:"Carta",fr:"Carte",en:"Menu"},
    "menu.t": {cat:"Cuina italiana, sense dreceres.",es:"Cocina italiana, sin atajos.",fr:"Cuisine italienne, sans raccourcis.",en:"Italian cooking, no shortcuts."},
    "menu.p": {cat:"Carta digital del catàleg intern. Sense botons de compra: és una carta de restaurant, no una botiga.",es:"Carta digital del catálogo interno. Sin botones de compra: es una carta de restaurante, no una tienda.",fr:"Carte numérique du catalogue interne. Pas de bouton d’achat.",en:"Digital menu from the internal catalogue. No buy buttons."},
    "menu.more": {cat:"Ampliar la carta",es:"Ampliar la carta",fr:"Voir toute la carte",en:"Full menu"},
    "menu.allergen": {cat:"Al·lèrgens pendent de validació al catàleg. Consulteu-nos al local.",es:"Alérgenos pendientes de validación. Consúltanos en el local.",fr:"Allergènes en attente de validation. Demandez-nous sur place.",en:"Allergens pending validation. Ask us in the restaurant."},
    "house.k": {cat:"EL RESTAURANT",es:"EL RESTAURANTE",fr:"LE RESTAURANT",en:"THE RESTAURANT"},
    "house.t": {cat:"Sala petita, cuina italiana, tracte de casa.",es:"Sala pequeña, cocina italiana, trato de casa.",fr:"Petite salle, cuisine italienne, accueil de maison.",en:"A small room, Italian cooking, house hospitality."},
    "house.p": {cat:"Bella Ciao és la pizzeria italiana de confiança a Santa Coloma: plats cuinats amb cura, servei atent i ambient acollidor.",es:"Bella Ciao es la pizzería italiana de confianza en Santa Coloma.",fr:"Bella Ciao est la pizzeria italienne de confiance à Santa Coloma.",en:"Bella Ciao is Santa Coloma’s trusted Italian pizzeria."},
    "house.p2": {cat:"A la fitxa de Google: menjar al local i per emportar. No consta lliurament a domicili.",es:"En la ficha de Google: comer en el local y para llevar. No consta entrega a domicilio.",fr:"Sur Google : sur place et à emporter. Pas de livraison à domicile.",en:"Google lists dine-in and takeaway. No home delivery."},
    "house.cta": {cat:"Conèixer el restaurant →",es:"Conocer el restaurante →",fr:"Découvrir le restaurant →",en:"Discover the restaurant →"},
    "deliv.t": {cat:"Delivery / Take away",es:"Delivery / Take away",fr:"Delivery / Take away",en:"Delivery / Take away"},
    "deliv.p": {cat:"A la fitxa de Google: menjar al local i per emportar. L’enllaç de lliurament a domicili queda pendent de confirmació. Els preus per emportar són els de la carta take away.",es:"En la ficha de Google: comer en el local y para llevar. El enlace de entrega a domicilio queda pendiente. Los precios para llevar son los de la carta take away.",fr:"Sur Google : sur place et à emporter. Le lien de livraison n’est pas encore confirmé. Les prix à emporter sont ceux de la carte take away.",en:"Google lists dine-in and takeaway. A home-delivery link is still pending. Takeaway prices are those on the takeaway menu."},
    "deliv.cta": {cat:"Delivery / Take away",es:"Delivery / Take away",fr:"Delivery / Take away",en:"Delivery / Take away"},
    "visit.k": {cat:"COM ARRIBAR",es:"CÓMO LLEGAR",fr:"ACCÈS",en:"FIND US"},
    "visit.t": {cat:"Santa Coloma, a peu de l’avinguda d’Enclar.",es:"Santa Coloma, a pie de la avenida d’Enclar.",fr:"Santa Coloma, au pied de l’avinguda d’Enclar.",en:"Santa Coloma, on Avinguda d’Enclar."},
    "visit.maps": {cat:"Obrir a Google Maps",es:"Abrir en Google Maps",fr:"Ouvrir dans Google Maps",en:"Open in Google Maps"},
    "day.mon": {cat:"Dilluns",es:"Lunes",fr:"Lundi",en:"Monday"},
    "day.tue": {cat:"Dimarts – Dissabte",es:"Martes – Sábado",fr:"Mardi – Samedi",en:"Tuesday – Saturday"},
    "day.sun": {cat:"Diumenge",es:"Domingo",fr:"Dimanche",en:"Sunday"},
    "closed": {cat:"Tancat",es:"Cerrado",fr:"Fermé",en:"Closed"},
    "jobs.k": {cat:"EQUIP",es:"EQUIPO",fr:"ÉQUIPE",en:"TEAM"},
    "jobs.p": {cat:"Si vols formar part de Bella Ciao, envia el currículum. No recollim candidatures en un formulari intern: el correu s’obre al teu client de correu.",es:"Si quieres formar parte de Bella Ciao, envía el currículum. No recogemos candidaturas en un formulario interno: el correo se abre en tu cliente de correo.",fr:"Pour rejoindre Bella Ciao, envoyez votre CV. Pas de formulaire interne : le mail s’ouvre dans votre messagerie.",en:"To join Bella Ciao, send your CV. We don’t collect applications in an internal form: the email opens in your mail app."},
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
  var SHEET_ID = "1hmqH7DUOsLqShReGywm1i2qxcRQmpBXnSurG-7_h038";
  var SHEET_TAB = "MAESTRA";
  var PHOTOS = {
    "BC-002": "focaccia.png",
    "BC-006": "burrata.jpg",
    "BC-012": "google-wide.jpg",
    "BC-037": "google-wide.jpg",
    "BC-046": "focaccia.png",
    "BC-SUP-009": "burrata.jpg"
  };

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
    var known = CAT_ORDER.filter(function (c) { return list.some(function (d) { return d.cat === c; }); });
    var extra = [];
    list.forEach(function (d) {
      if (d.cat && CAT_ORDER.indexOf(d.cat) < 0 && extra.indexOf(d.cat) < 0) extra.push(d.cat);
    });
    return known.concat(extra);
  }
  function sheetCell(row, idx, name) {
    var i = idx[name];
    if (i == null) return null;
    return (row.c || [])[i];
  }
  function sheetVal(cell) {
    if (!cell) return null;
    return cell.v;
  }
  function sheetStr(cell) {
    var v = sheetVal(cell);
    return v == null ? "" : String(v).trim();
  }
  function sheetNum(cell) {
    var v = sheetVal(cell);
    if (typeof v === "number") return v;
    var t = String(v || "").replace(/€/g, "").replace(/\s/g, "").replace(",", ".");
    var n = parseFloat(t);
    return isNaN(n) ? 0 : n;
  }
  function sheetFlag(cell) {
    var v = sheetVal(cell);
    if (typeof v === "boolean") return v;
    return String(v == null ? "" : v).toUpperCase() === "TRUE";
  }
  function rowsFromSheet(table) {
    var idx = {};
    (table.cols || []).forEach(function (col, i) {
      var label = (col.label || "").trim();
      if (label) idx[label] = i;
    });
    var out = [];
    (table.rows || []).forEach(function (row) {
      var id = sheetStr(sheetCell(row, idx, "ID"));
      if (!id || !sheetFlag(sheetCell(row, idx, "Web"))) return;
      var item = {
        id: id,
        orden: sheetNum(sheetCell(row, idx, "Orden")),
        cat: sheetStr(sheetCell(row, idx, "Categoria")),
        name: {
          cat: sheetStr(sheetCell(row, idx, "Nombre_CAT")),
          es: sheetStr(sheetCell(row, idx, "Nombre_ES")),
          fr: sheetStr(sheetCell(row, idx, "Nombre_FR")),
          en: sheetStr(sheetCell(row, idx, "Nombre_EN"))
        },
        desc: {
          cat: sheetStr(sheetCell(row, idx, "Descripcion_CAT")),
          es: sheetStr(sheetCell(row, idx, "Descripcion_ES")),
          fr: sheetStr(sheetCell(row, idx, "Descripcion_FR")),
          en: sheetStr(sheetCell(row, idx, "Descripcion_EN"))
        },
        priceR: sheetNum(sheetCell(row, idx, "Precio_restaurante_EUR")),
        priceT: sheetNum(sheetCell(row, idx, "Precio_delivery_EUR")),
        takeaway: sheetFlag(sheetCell(row, idx, "Delivery_TakeAway"))
      };
      var img = sheetStr(sheetCell(row, idx, "Imagen_URL")) || PHOTOS[id];
      if (img) item.photo = img;
      out.push(item);
    });
    out.sort(function (a, b) { return a.orden - b.orden || a.id.localeCompare(b.id); });
    return out;
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
  function onCarta() {
    return /carta\.html/i.test(location.pathname);
  }
  var lastTab = "";
  var lockTab = "";
  var lockTimer = 0;
  function sectionProbe() {
    var bar = document.querySelector(".carta-sticky");
    if (bar) return bar.getBoundingClientRect().bottom + 8;
    var h = document.querySelector(".site-header");
    return (h ? h.getBoundingClientRect().bottom : 64) + 8;
  }
  function scrollTabIntoView(tab) {
    var index = document.getElementById("menu-index");
    if (!index || !tab) return;
    var iBox = index.getBoundingClientRect();
    var tBox = tab.getBoundingClientRect();
    var delta = (tBox.left + tBox.right) / 2 - (iBox.left + iBox.right) / 2;
    index.scrollTo({ left: Math.max(0, index.scrollLeft + delta), behavior: "smooth" });
  }
  function setActiveTab(id, fromClick) {
    var index = document.getElementById("menu-index");
    if (!index || !id) return;
    if (fromClick) {
      lockTab = id;
      clearTimeout(lockTimer);
      lockTimer = setTimeout(function () { lockTab = ""; }, 800);
    } else if (lockTab && id !== lockTab) {
      return;
    }
    var active = null;
    index.querySelectorAll(".tab").forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("is-active", on);
      a.setAttribute("aria-current", on ? "true" : "false");
      if (on) active = a;
    });
    if (active && id !== lastTab) scrollTabIntoView(active);
    lastTab = id;
  }
  function markCartaSection() {
    var blocks = document.querySelectorAll("#menu-body .menu-block");
    if (!blocks.length) return;
    var probe = sectionProbe();
    var current = blocks[0];
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].getBoundingClientRect().top <= probe) current = blocks[i];
    }
    setActiveTab(current.id);
  }
  function markNav() {
    var carta = onCarta();
    var hash = location.hash.replace("#", "");
    var casa = document.getElementById("casa");
    var visit = document.getElementById("visitanos");
    var line = (document.querySelector(".site-header") || {}).offsetHeight || 64;
    var section = "";
    if (!carta) {
      if (visit && visit.getBoundingClientRect().top - line <= 80) section = "visitanos";
      else if (casa && casa.getBoundingClientRect().top - line <= 80) section = "casa";
      if (hash === "casa" || hash === "visitanos") section = hash;
    }
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      var active = carta ? /carta\.html/i.test(href) && href.indexOf("#") < 0
        : (section === "casa" && href.indexOf("#casa") >= 0) ||
          (section === "visitanos" && href.indexOf("#visitanos") >= 0);
      a.classList.toggle("is-active", active);
    });
  }
  function renderCarta() {
    var host = document.getElementById("menu-body");
    var index = document.getElementById("menu-index");
    if (!host) return;
    lastTab = "";
    var list = items();
    var cats = catsOf(list);
    host.innerHTML = "";
    if (index) index.innerHTML = "";
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
    markCartaSection();
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
    var bar = document.querySelector(".carta-sticky");
    if (bar) document.documentElement.style.setProperty("--carta-bar", bar.offsetHeight + "px");
  }
  function snapPills(instant) {
    document.querySelectorAll(".seg, .langs").forEach(function (group) {
      var on = group.querySelector("[aria-pressed='true']");
      var thumb = group.querySelector(".pill-thumb");
      if (!on || !thumb) return;
      if (instant) thumb.style.transition = "none";
      thumb.style.width = on.offsetWidth + "px";
      thumb.style.height = on.offsetHeight + "px";
      thumb.style.transform = "translate(" + on.offsetLeft + "px," + on.offsetTop + "px)";
      if (instant) {
        thumb.getBoundingClientRect();
        thumb.style.transition = "";
      }
    });
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
  var pillsReady = false;
  function paint() {
    translate();
    renderCarta();
    markNav();
    requestAnimationFrame(function () {
      snapPills(!pillsReady);
      pillsReady = true;
    });
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
        state.channel = chBtn.getAttribute("data-channel");
        save();
        paint();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      var tab = e.target.closest("#menu-index .tab");
      if (tab) {
        e.preventDefault();
        var id = (tab.getAttribute("href") || "").slice(1);
        var block = document.getElementById(id);
        setActiveTab(id, true);
        if (block) {
          var top = block.getBoundingClientRect().top + window.scrollY - sectionProbe() + 4;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
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
    function fallback() {
      if (window.BC_MENU && window.BC_MENU.length) ready(window.BC_MENU);
      else fetch("menu.json").then(function (r) { return r.json(); }).then(ready).catch(function () { ready([]); });
    }
    fallback();
    var liveApplied = false;
    window.BC_onSheet = function (res) {
      try {
        if (!res || res.status !== "ok" || !res.table) return;
        var parsed = rowsFromSheet(res.table);
        if (parsed.length) {
          liveApplied = true;
          ready(parsed);
        }
      } catch (err) {}
    };
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?tqx=out:json;responseHandler:BC_onSheet&sheet=" + encodeURIComponent(SHEET_TAB) + "&_=" + Date.now();
    s.onerror = function () {};
    document.head.appendChild(s);
    var spyTick = 0;
    window.addEventListener("resize", function () { translate(); markNav(); markCartaSection(); snapPills(true); });
    window.addEventListener("scroll", function () {
      if (spyTick) return;
      spyTick = requestAnimationFrame(function () {
        spyTick = 0;
        markNav();
        markCartaSection();
      });
    }, { passive: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
