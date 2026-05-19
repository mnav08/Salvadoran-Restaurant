(function () {
  const nav = document.getElementById("site-nav");
  const toggle = nav?.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu?.querySelectorAll(".nav-link");

  if (!nav || !toggle || !navMenu) return;

  function setMenuOpen(isOpen) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(!nav.classList.contains("is-open"));
  });

  navLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        closeMenu();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 769px)").matches) {
      closeMenu();
    }
  });
})();
