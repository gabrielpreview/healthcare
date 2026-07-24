/* ============================================================
   HC360 Landing Page — behavior
   ============================================================ */

/* ------------------------------------------------------------------
   1) DEMO / CTA LINK  ——  EDIT THIS ONE LINE
   Paste your real demo destination here (Calendly, HubSpot form,
   the bringitps.com contact page, etc.). Every "Request a demo"
   button on the page points to it automatically.
------------------------------------------------------------------- */
const DEMO_URL = "https://bringitps.com/contact"; // TODO: replace with your real demo link
const DEMO_NEW_TAB = true;

(function applyCtaLinks() {
  document.querySelectorAll("a[data-cta]").forEach((a) => {
    a.setAttribute("href", DEMO_URL);
    if (DEMO_NEW_TAB) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });
})();

/* ---------- Current year in footer ---------- */
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

/* ---------- Nav: shadow on scroll ---------- */
(function () {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- Nav: mobile menu ---------- */
(function () {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
    menu.hidden = !open;
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
})();

/* ---------- Video: click to load (privacy + performance) ---------- */
(function () {
  document.querySelectorAll(".video__facade[data-yt]").forEach((facade) => {
    facade.addEventListener("click", () => {
      const id = facade.dataset.yt;
      const wrap = facade.closest(".video");
      if (!wrap) return;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
      iframe.title = facade.getAttribute("aria-label") || "HC360 video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    });
  });
})();

/* ---------- Scroll reveal ---------- */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".section__head, .pain, .step, .feature, .interop-card, .timeline__step, .journey__stage, .compare__col, .video, .personas__media, .persona-list, .flow, .hero__copy, .hero__visual, .quote, .cta-final__copy, .cta-final__photo"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = Math.min(i * 60, 180);
          setTimeout(() => entry.target.classList.add("is-in"), delay);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();
