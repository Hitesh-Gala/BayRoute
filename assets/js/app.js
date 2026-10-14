/* Project BayRoute — page behaviour. Content lives in data.js. */
(function () {
  "use strict";
  var D = window.BAYROUTE;
  if (!D) return;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var catById = {};
  D.categories.forEach(function (c) { catById[c.id] = c; });

  var RANKS = {
    "Gen": "General", "Lt Gen": "Lieutenant General", "Maj Gen": "Major General", "Brig": "Brigadier",
    "Adm": "Admiral", "Vice Adm": "Vice Admiral", "Rear Adm": "Rear Admiral", "Cmde": "Commodore",
    "ACM": "Air Chief Marshal", "Air Marshal": "Air Marshal", "AVM": "Air Vice Marshal", "Air Cmde": "Air Commodore"
  };
  var isMilitary = function (p) { return !!RANKS[p.rank]; };

  function initials(name) {
    var w = name.replace(/['’]/g, "").split(/\s+/).filter(Boolean);
    // "NS Raja Subramani" -> RS, "C Raja Mohan" -> RM: skip leading initials when a fuller name follows
    while (w.length > 2 && /^[A-Z]{1,3}$/.test(w[0])) w.shift();
    return (w[0].charAt(0) + (w.length > 1 ? w[w.length - 1].charAt(0) : "")).toUpperCase();
  }
  function shortName(p) {
    var w = p.name.split(/\s+/);
    return (isMilitary(p) ? p.rank + " " : (p.rank ? p.rank + " " : "")) + w[w.length - 1];
  }
  function cardName(p) {
    var pre = p.rank ? '<span class="rank">' + esc(p.rank) + "</span> " : "";
    var post = p.suffix ? ' <span class="rank">' + esc(p.suffix) + "</span>" : "";
    return pre + esc(p.name) + post;
  }
  function plainName(p) { return [p.rank, p.name, p.suffix].filter(Boolean).join(" "); }

  function portrait(p, eager) {
    var el = document.createElement("div");
    el.className = "portrait";
    el.setAttribute("data-cat", p.category);
    el.innerHTML = '<span class="initials" aria-hidden="true">' + esc(initials(p.name)) + "</span>";
    var img = new Image();
    img.alt = "";
    img.decoding = "async";
    img.loading = eager ? "eager" : "lazy";
    img.style.opacity = "0";
    img.addEventListener("load", function () { img.style.opacity = "1"; });
    img.addEventListener("error", function () { img.remove(); });
    img.src = p.photo || ("assets/img/people/" + p.id + ".jpg");
    el.appendChild(img);
    return el;
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $(".menu-btn"), nav = $("#nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
  }

  var page = document.body.getAttribute("data-page");

  /* ---------- Home: community list with counts ---------- */
  if (page === "home") {
    var list = $("#community-links");
    if (list) {
      list.innerHTML = D.categories.map(function (c) {
        var n = D.people.filter(function (p) { return p.category === c.id; }).length;
        return '<li><a href="interviewees.html#' + c.id + '"><span>' + esc(c.label) + "</span><span>" + n + "</span></a></li>";
      }).join("");
    }
    var total = $("#total-count");
    if (total) total.textContent = D.people.length;
  }

  /* ---------- Interviewees ---------- */
  if (page === "list") {
    var filters = $("#filters"), groupsEl = $("#groups"), search = $("#search"), empty = $("#empty");
    var counts = {};
    D.people.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });

    var chips = [{ id: "all", label: "All", n: D.people.length }].concat(
      D.categories.map(function (c) { return { id: c.id, label: c.short || c.label, n: counts[c.id] || 0 }; })
    );
    filters.innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip" data-filter="' + c.id + '" aria-pressed="false">' +
        esc(c.label) + '<span class="count">' + c.n + "</span></button>";
    }).join("");

    D.categories.forEach(function (c) {
      var people = D.people.filter(function (p) { return p.category === c.id; });
      if (!people.length) return;
      var sec = document.createElement("section");
      sec.className = "group";
      sec.id = "group-" + c.id;
      sec.setAttribute("data-cat", c.id);
      sec.setAttribute("aria-labelledby", "h-" + c.id);
      sec.innerHTML = '<div class="wrap"><div class="group-head"><h2 id="h-' + c.id + '">' + esc(c.label) +
        "</h2><p>" + esc(c.blurb) + '</p></div><div class="grid"></div></div>';
      var grid = $(".grid", sec);
      people.forEach(function (p) {
        var a = document.createElement("a");
        a.className = "card";
        a.href = "person.html?id=" + encodeURIComponent(p.id);
        a.setAttribute("data-search", (plainName(p) + " " + p.role + " " + (p.bio || []).join(" ")).toLowerCase());
        a.appendChild(portrait(p, false));
        var name = document.createElement("h3");
        name.className = "card-name";
        name.innerHTML = cardName(p);
        var role = document.createElement("p");
        role.className = "card-role";
        role.textContent = p.role;
        a.appendChild(name);
        a.appendChild(role);
        grid.appendChild(a);
      });
      groupsEl.appendChild(sec);
    });

    var current = "all";
    function apply() {
      var q = (search.value || "").trim().toLowerCase();
      var shown = 0;
      Array.prototype.forEach.call(groupsEl.querySelectorAll(".group"), function (g) {
        var inCat = current === "all" || g.getAttribute("data-cat") === current;
        var visible = 0;
        Array.prototype.forEach.call(g.querySelectorAll(".card"), function (card) {
          var match = inCat && (!q || card.getAttribute("data-search").indexOf(q) !== -1);
          card.hidden = !match;
          if (match) visible++;
        });
        g.hidden = visible === 0;
        shown += visible;
      });
      Array.prototype.forEach.call(filters.querySelectorAll(".chip"), function (ch) {
        ch.setAttribute("aria-pressed", ch.getAttribute("data-filter") === current ? "true" : "false");
      });
      empty.hidden = shown !== 0;
    }
    function setFilter(id, push) {
      current = catById[id] ? id : "all";
      if (push !== false) {
        var url = current === "all" ? location.pathname + location.search : "#" + current;
        history.replaceState(null, "", url);
      }
      apply();
    }
    filters.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      setFilter(b.getAttribute("data-filter"));
      var active = filters.querySelector('[aria-pressed="true"]');
      if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
    search.addEventListener("input", apply);
    $("#clear").addEventListener("click", function () { search.value = ""; setFilter("all"); search.focus(); });
    window.addEventListener("hashchange", function () { setFilter(location.hash.slice(1), false); });
    setFilter(location.hash.slice(1), false);
  }

  /* ---------- Person ---------- */
  if (page === "person") {
    var root = $("#profile-root");
    var id = new URLSearchParams(location.search).get("id");
    var idx = -1;
    D.people.forEach(function (p, i) { if (p.id === id) idx = i; });

    if (idx === -1) {
      root.innerHTML = '<div class="wrap not-found"><h1>Profile not found</h1><p>That link does not match anyone on the list.</p>' +
        '<a class="button button--ink" href="interviewees.html">See all interviewees</a></div>';
      return;
    }

    var p = D.people[idx];
    var cat = catById[p.category] || { label: p.category };
    var mod = D.modules[p.category];
    var prev = D.people[(idx - 1 + D.people.length) % D.people.length];
    var next = D.people[(idx + 1) % D.people.length];
    document.title = plainName(p) + " | BayRoute";

    var rankLine = "";
    var nameLine = esc(p.name);
    if (isMilitary(p)) {
      rankLine = '<span class="rank">' + esc(RANKS[p.rank]) + (p.suffix ? " " + esc(p.suffix) : "") + "</span>";
    } else {
      nameLine = (p.rank ? esc(p.rank) + " " : "") + nameLine + (p.suffix ? " " + esc(p.suffix) : "");
    }

    var n = 0;
    function part(title, note, qs) {
      if (!qs || !qs.length) return "";
      return '<div class="q-part"><h3>' + esc(title) + "</h3>" + (note ? '<p class="q-note">' + esc(note) + "</p>" : "") +
        '<ol class="q-list">' + qs.map(function (q) {
          n++;
          return '<li><span class="q-num">' + n + "</span><span>" + esc(q) + "</span></li>";
        }).join("") + "</ol></div>";
    }

    var questionsHTML =
      part("Part one: " + D.core.title, D.core.note, D.core.questions) +
      (mod ? part("Part two: " + mod.title, "Asked of everyone in the " + cat.label + " group.", mod.questions) : "") +
      part("Part three: Specific to this conversation", "", p.questions);

    root.innerHTML =
      '<div class="wrap">' +
        '<nav class="crumbs" aria-label="Profile navigation">' +
          '<a href="interviewees.html#' + esc(p.category) + '">Back to all interviewees</a>' +
          '<div class="pager"><a href="person.html?id=' + encodeURIComponent(prev.id) + '" rel="prev">Previous: ' + esc(shortName(prev)) + "</a>" +
          '<a href="person.html?id=' + encodeURIComponent(next.id) + '" rel="next">Next: ' + esc(shortName(next)) + "</a></div>" +
        "</nav>" +
        '<article class="profile" data-cat="' + esc(p.category) + '">' +
          '<aside class="profile-side" id="side"></aside>' +
          '<div class="profile-main">' +
            "<h1>" + rankLine + nameLine + "</h1>" +
            '<p class="profile-role">' + esc(p.role) + "</p>" +
            '<section class="block bio" aria-labelledby="h-bio"><h2 id="h-bio">Profile</h2>' +
              (p.bio || []).map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("") +
            "</section>" +
            (p.focus ? '<section class="block" aria-labelledby="h-why"><h2 id="h-why">Why this conversation</h2><p class="focus">' + esc(p.focus) + "</p></section>" : "") +
            '<section class="block" aria-labelledby="h-q"><h2 id="h-q">Proposed questionnaire</h2>' + questionsHTML +
              '<div class="q-actions"><button type="button" class="button button--ink" id="print">Print questionnaire</button>' +
              '<button type="button" class="button button--quiet" id="copy">Copy questions</button></div>' +
            "</section>" +
          "</div>" +
        "</article>" +
      "</div>";

    var side = $("#side");
    side.appendChild(portrait(p, true));
    var meta = document.createElement("div");
    meta.innerHTML = '<a class="profile-cat" href="interviewees.html#' + esc(p.category) + '">' + esc(cat.label) + "</a>" +
      '<span class="status">Status: <b>' + esc(p.status || "Proposed") + "</b></span>";
    side.appendChild(meta);

    $("#print").addEventListener("click", function () { window.print(); });
    $("#copy").addEventListener("click", function () {
      var btn = this;
      var lines = [plainName(p) + " (" + p.role + ")", ""];
      Array.prototype.forEach.call(root.querySelectorAll(".q-part"), function (qp) {
        lines.push($("h3", qp).textContent);
        Array.prototype.forEach.call(qp.querySelectorAll("li"), function (li) {
          lines.push($(".q-num", li).textContent + ". " + li.lastChild.textContent);
        });
        lines.push("");
      });
      var text = lines.join("\n");
      var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy questions"; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
      } else { fallbackCopy(text); done(); }
    });
    function fallbackCopy(text) {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "absolute"; ta.style.left = "-9999px";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove();
    }
  }
})();
