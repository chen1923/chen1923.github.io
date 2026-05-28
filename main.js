/* ===========================================================================
   main.js — applies config.js (window.SITE) to the page and runs the tab UI.
   Loaded with `defer`, so the DOM is already parsed when this runs.
   =========================================================================== */
(function () {
  "use strict";
  var SITE = window.SITE || {};

  /* ---- Fonts: inject the web-font stylesheet + apply family stacks ---- */
  var fonts = SITE.fonts || {};
  if (fonts.googleHref) {
    var fl = document.createElement("link");
    fl.rel = "stylesheet";
    fl.href = fonts.googleHref;
    document.head.appendChild(fl);
  }
  var rootStyle = document.documentElement.style;
  if (fonts.serif) rootStyle.setProperty("--serif", fonts.serif);
  if (fonts.sans)  rootStyle.setProperty("--sans", fonts.sans);
  if (fonts.mono)  rootStyle.setProperty("--mono", fonts.mono);

  /* ---- Images: <img data-img="key"> -> SITE.images[key] -------------- */
  var images = SITE.images || {};
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var src = images[el.getAttribute("data-img")];
    if (src) el.src = src;
  });

  /* ---- Links: <a data-link="key"> -> SITE.links[key] ----------------- */
  var links = SITE.links || {};
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    var val = links[key];
    if (!val) return;
    if (key === "email") {
      el.href = "mailto:" + val;
      if (!el.textContent.trim()) el.textContent = val;
    } else {
      el.href = val;
    }
  });

  /* ---- Footer year --------------------------------------------------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Mobile menu --------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("navlinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* ---- Tabs ---------------------------------------------------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('[role="tabpanel"]'));
  var panelIds = panels.map(function (p) { return p.id; });
  var main = document.querySelector(".main");

  function setTab(id, pushHash) {
    if (panelIds.indexOf(id) === -1) id = panelIds[0];
    tabs.forEach(function (t) {
      var on = t.getAttribute("aria-controls") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.classList.toggle("active", on);
      if (on) t.setAttribute("tabindex", "0");
      else    t.setAttribute("tabindex", "-1");
    });
    panels.forEach(function (p) {
      var on = p.id === id;
      if (on) {
        p.hidden = false;
        // restart panel-in animation
        p.style.animation = "none";
        // force reflow
        void p.offsetWidth;
        p.style.animation = "";
      } else {
        p.hidden = true;
      }
    });
    if (main) main.scrollTop = 0;
    if (pushHash && location.hash.slice(1) !== id) {
      history.replaceState(null, "", "#" + id);
    }
  }

  /* Any in-page link to a tabpanel becomes a tab activation. */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    if (panelIds.indexOf(id) === -1) return;
    e.preventDefault();
    setTab(id, true);
    if (navLinks) navLinks.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });

  /* Keyboard nav on the tab list (Left/Right/Home/End) */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    tablist.addEventListener("keydown", function (e) {
      var idx = tabs.indexOf(document.activeElement);
      if (idx === -1) return;
      var next = idx;
      if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
      else if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = tabs.length - 1;
      else return;
      e.preventDefault();
      tabs[next].focus();
      setTab(tabs[next].getAttribute("aria-controls"), true);
    });
  }

  /* Initial tab from URL hash, default to first panel */
  var initial = (location.hash || "").slice(1);
  setTab(initial || panelIds[0], false);

  /* React to back/forward */
  window.addEventListener("hashchange", function () {
    setTab((location.hash || "").slice(1) || panelIds[0], false);
  });
})();
