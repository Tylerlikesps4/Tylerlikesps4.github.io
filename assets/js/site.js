/* Tiny, dependency-free site script: theme toggle, mobile menu, click-to-load embeds. */
(function () {
  "use strict";
  var root = document.documentElement;

  /* Theme toggle */
  var themeBtn = document.querySelector("[data-theme-toggle]");
  function label() {
    if (!themeBtn) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    themeBtn.setAttribute("aria-label", "Switch to " + next + " theme");
  }
  if (themeBtn) {
    label();
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });
  }

  /* Mobile menu */
  var menuBtn = document.querySelector("[data-menu-toggle]");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") !== "true";
      menuBtn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
      if (open) { var first = nav.querySelector("a"); if (first) first.focus(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.focus();
      }
    });
  }

  /* Click-to-load embeds (Twitch, YouTube): nothing third-party loads until you ask. */
  document.querySelectorAll("[data-embed-load]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = btn.closest("[data-embed]");
      if (!box) return;
      var f = document.createElement("iframe");
      f.src = box.getAttribute("data-src");
      f.title = box.getAttribute("data-title") || "Embedded player";
      f.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      box.innerHTML = "";
      box.appendChild(f);
      f.focus();
    });
  });
})();
