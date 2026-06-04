/* ==============================================
   DEVFOLIO v2 — Professional Portfolio Script
   ============================================== */

/* ═══════════════════════════════════════════
   CONFIG — Edit this section to personalize
   ═══════════════════════════════════════════ */
const CONFIG = {
  name: "Your Name",
  titles: [
    "Full Stack Developer",
    "Open Source Enthusiast",
    "UI / UX Lover",
    "Problem Solver"
  ],
  typingSpeed: 70,
  deletingSpeed: 35,
  pauseAfterWord: 2500,

  /* Telegram bot for contact form (optional) */
  telegram: {
    botToken: "YOUR_BOT_TOKEN",
    chatId: "YOUR_CHAT_ID"
  }
};

/* ═══════════════════════════════════════════
   DOM REFS
   ═══════════════════════════════════════════ */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const dom = {
  typing: $("#typing"),
  navLinks: $("#navLinks"),
  navToggle: $("#navToggle"),
  themeToggle: $("#themeToggle"),
  navProgress: $("#navProgress"),
  backToTop: $("#backToTop"),
  contactForm: $("#contactForm"),
  footerName: $("#footerName"),
  footerYear: $("#footerYear"),
  resumeBtn: $("#resumeBtn"),
};

/* ═══════════════════════════════════════════
   TYPING EFFECT
   ═══════════════════════════════════════════ */
function initTyping() {
  if (!dom.typing) return;

  let titleIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = CONFIG.titles[titleIndex];

    if (isDeleting) {
      dom.typing.textContent = current.substring(0, charIndex--);
    } else {
      dom.typing.textContent = current.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length + 1) {
      isDeleting = true;
      setTimeout(type, CONFIG.pauseAfterWord);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % CONFIG.titles.length;
    }

    setTimeout(type, isDeleting ? CONFIG.deletingSpeed : CONFIG.typingSpeed);
  }

  setTimeout(type, 600);
}

/* ═══════════════════════════════════════════
   THEME TOGGLE (Dark / Light)
   ═══════════════════════════════════════════ */
function initTheme() {
  const stored = localStorage.getItem("devfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let theme = stored || (prefersDark ? "dark" : "light");
  setTheme(theme);

  if (dom.themeToggle) {
    dom.themeToggle.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("devfolio-theme", theme);

  if (dom.themeToggle) {
    dom.themeToggle.innerHTML = theme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }

  /* Meta theme-color */
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? "#0b0b12" : "#f5f5f8";
}

/* ═══════════════════════════════════════════
   SCROLL REVEAL (Intersection Observer)
   ═══════════════════════════════════════════ */
function initReveal() {
  const els = $$(".reveal");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  els.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════
   SKILL BARS ANIMATION
   ═══════════════════════════════════════════ */
function initSkillBars() {
  const fills = $$(".skill-bar-fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.style.getPropertyValue("--w") || "0%";
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  fills.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════
   STATS COUNTER
   ═══════════════════════════════════════════ */
function initCounters() {
  const counters = $$(".stat-number");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el, target) {
  let current = 0;
  const increment = Math.ceil(target / 40);
  const duration = 1500;
  const stepTime = Math.floor(duration / 40);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current + "+";
  }, stepTime);
}

/* ═══════════════════════════════════════════
   NAV — Active Link + Progress
   ═══════════════════════════════════════════ */
function initNav() {
  const sections = $$(".section");
  const navLinks = $$(".nav-link");

  function update() {
    let current = "hero";
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });

    /* Progress bar */
    if (dom.navProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      dom.navProgress.style.width = progress + "%";
    }

    /* Back to top */
    if (dom.backToTop) {
      dom.backToTop.classList.toggle("visible", window.scrollY > 400);
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("load", update);
}

/* ═══════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════ */
function initMobileMenu() {
  if (!dom.navToggle || !dom.navLinks) return;

  dom.navToggle.addEventListener("click", () => {
    dom.navToggle.classList.toggle("active");
    dom.navLinks.classList.toggle("open");
  });

  $$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      dom.navToggle.classList.remove("active");
      dom.navLinks.classList.remove("open");
    });
  });
}

/* ═══════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════ */
function initBackToTop() {
  if (!dom.backToTop) return;

  dom.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ═══════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════ */
function initContactForm() {
  if (!dom.contactForm) return;

  const name = $("#formName");
  const email = $("#formEmail");
  const subject = $("#formSubject");
  const message = $("#formMessage");
  const submitBtn = $("#formSubmit");

  /* Real-time validation */
  [name, email, message].forEach(field => {
    if (!field) return;
    field.addEventListener("input", () => {
      field.closest(".form-group").classList.remove("error");
    });
  });

  dom.contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valid = true;

    /* Validate */
    if (!name || !name.value.trim()) {
      name.closest(".form-group").classList.add("error");
      valid = false;
    }
    if (!email || !email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      if (email) email.closest(".form-group").classList.add("error");
      valid = false;
    }
    if (!message || !message.value.trim()) {
      message.closest(".form-group").classList.add("error");
      valid = false;
    }

    if (!valid) return;

    /* Send */
    const btn = submitBtn;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
      const text = [
        `*New Contact Message*`,
        `*Name:* ${name.value.trim()}`,
        `*Email:* ${email.value.trim()}`,
        subject?.value?.trim() ? `*Subject:* ${subject.value.trim()}` : "",
        `*Message:* ${message.value.trim()}`,
        `*Time:* ${new Date().toLocaleString()}`
      ].filter(Boolean).join("\n");

      const url = `https://api.telegram.org/bot${CONFIG.telegram.botToken}/sendMessage`;

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CONFIG.telegram.chatId,
          text,
          parse_mode: "Markdown"
        })
      });

      dom.contactForm.innerHTML = `
        <div class="form-success">
          <div class="form-success-icon"><i class="fas fa-check-circle"></i></div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
        </div>
      `;
    } catch {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span>Send Message</span>';
      alert("Something went wrong. Please try again or email me directly.");
    }
  });
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function initFooter() {
  if (dom.footerName) dom.footerName.textContent = CONFIG.name;
  if (dom.footerYear) dom.footerYear.textContent = new Date().getFullYear();
  if (dom.resumeBtn) {
    dom.resumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      /* Replace with actual resume link */
      alert("Add your resume link in script.js → CONFIG");
    });
  }
}

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTyping();
  initReveal();
  initSkillBars();
  initCounters();
  initNav();
  initMobileMenu();
  initBackToTop();
  initContactForm();
  initFooter();
});
