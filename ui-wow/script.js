let currentLang = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";

function renderPage() {
  const t = TEXTS[currentLang];
  const L = LINKS;
  const root = document.getElementById("root");

  root.innerHTML = `
    <header class="navbar">
      <div class="container">
        <div class="navbar-inner animate-fade-up">
          <div class="brand">
            <div class="brand-logo">$</div>
            <div class="brand-main">
              <div class="brand-title">
                ${t.nav.brandTitle}
                <span class="brand-pill">${t.nav.brandPill}</span>
              </div>
              <div class="brand-sub">${t.nav.brandSub}</div>
            </div>
          </div>
          <nav class="nav-links">
            <a href="#how">${t.nav.linkHow}</a>
            <a href="#numbers">${t.nav.linkNumbers}</a>
            <a href="#tokenomics">${t.nav.linkTokenomics}</a>
            <a href="#faq">${t.nav.linkFaq}</a>
          </nav>
          <div class="nav-right">
            <button class="lang-toggle ${currentLang === "ru" ? "lang-toggle-active" : ""}" id="langToggle">
              <span>${currentLang === "ru" ? "RU" : "EN"}</span>
            </button>
            <a class="btn btn-outline btn-sm" href="${L.telegram}" target="_blank" rel="noreferrer">
              ${t.nav.btnTelegram}
            </a>
            <a class="btn btn-primary btn-sm" href="${L.buy}" target="_blank" rel="noreferrer">
              ${t.nav.btnBuy}
            </a>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- HERO -->
      <section class="hero animate-parallax">
        <div class="hero-parallax" id="heroParallax">
          <div class="parallax-orb orb-green"></div>
          <div class="parallax-orb orb-purple"></div>
        </div>
        <div class="container">
          <div class="hero-grid">
            <div class="animate-fade-up" data-delay="0.04">
              <div class="hero-eyebrow glow-hover">
                <span>${t.hero.badge}</span>
                ${t.hero.badgeText}
              </div>
              <h1 class="hero-title">
                ${t.hero.title.before}
                <span class="highlight">${t.hero.title.highlight}</span>
                ${t.hero.title.after}
              </h1>
              <p class="hero-subtitle">
                ${t.hero.subtitle}
              </p>
              <div class="hero-cta-row">
                <a class="btn btn-primary" href="${L.buy}" target="_blank" rel="noreferrer">
                  ${t.hero.btnBuy}
                </a>
                <a class="btn btn-outline" href="#how">
                  ${t.hero.btnHow}
                </a>
              </div>
              <div class="hero-note">
                <div class="hero-note-pill">${t.hero.notePill}</div>
                <span>${t.hero.noteText}</span>
              </div>
              <div class="hero-grid-metrics">
                ${t.hero.metrics
                  .map(
                    (m, idx) => `
                  <div class="metric-card glow-hover animate-scale-in" data-delay="${idx * 0.06}">
                    <div class="metric-label">${m.label}</div>
                    <div class="metric-value">${m.value}</div>
                    <div class="metric-helper">${m.helper}</div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="hero-right animate-scale-in" data-delay="0.08">
              <div class="hero-card glow-hover">
                <div class="hero-card-header">
                  <span class="label">${t.hero.rightCard.label}</span>
                  <span class="tag">${t.hero.rightCard.tag}</span>
                </div>
                <div class="graph">
                  <div class="graph-header">
                    <div class="graph-token">
                      <span class="symbol">${t.hero.rightCard.graphTitle}</span>
                      <span class="caption">${t.hero.rightCard.graphCaption}</span>
                    </div>
                    <div class="graph-pill">
                      <span class="badge-dot"></span>
                      ${t.hero.rightCard.graphPill}
                    </div>
                  </div>
                  <div class="graph-main">
                    <div class="graph-grid"></div>
                    <div class="graph-line">
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                      <div class="graph-bar"></div>
                    </div>
                  </div>
                  <div class="graph-footer">
                    <span>${t.hero.rightCard.graphFooterLeft}</span>
                    <span><strong>${t.hero.rightCard.graphFooterRight}</strong></span>
                  </div>
                </div>

                <div class="model-row">
                  <div class="model-card">
                    <div class="model-title">${t.hero.rightCard.loopTitle}</div>
                    <ul class="model-list">
                      ${t.hero.rightCard.loopSteps
                        .map(
                          s => `
                        <li>
                          <span><span class="dot"></span>${s.left}</span>
                          <span class="model-pill">${s.right}</span>
                        </li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>
                  <div class="model-card">
                    <div class="model-title">${t.hero.rightCard.signalsTitle}</div>
                    <ul class="model-list">
                      ${t.hero.rightCard.signals
                        .map(
                          s => `
                        <li>
                          <span>• ${s.left}</span>
                          <span class="model-pill">${s.right}</span>
                        </li>
                      `
                        )
                        .join("")}
                    </ul>
                  </div>
                </div>
              </div>
              <div style="position:absolute; inset:auto 6px -16px auto; font-size:10px; color:var(--text-soft); opacity:0.8;">
                ${t.hero.rightCard.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how">
        <div class="container">
          <div class="section-header animate-fade-up">
            <div class="section-title-block">
              <div class="section-kicker">${t.how.kicker}</div>
              <h2 class="section-title">${t.how.title}</h2>
            </div>
            <div class="section-subtitle">${t.how.subtitle}</div>
          </div>

          <div class="grid-3">
            ${t.how.steps
              .map(
                (step, idx) => `
              <div class="step-card glow-hover animate-fade-up" data-delay="${idx * 0.08}">
                <div class="step-index">${idx + 1}</div>
                <div class="step-title">${step.title}</div>
                <p class="step-body">${step.body}</p>
                <div class="step-label">${step.label}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- NUMBERS & TOKENOMICS -->
      <section id="numbers">
        <div class="container">
          <div class="section-header animate-fade-up">
            <div class="section-title-block">
              <div class="section-kicker">${t.numbers.kicker}</div>
              <h2 class="section-title">${t.numbers.title}</h2>
            </div>
            <div class="section-subtitle">${t.numbers.subtitle}</div>
          </div>

          <div class="grid-2">
            <div class="card glow-hover animate-fade-up">
              <h3>${t.numbers.market.title}</h3>
              <p>${t.numbers.market.text}</p>
              <div class="pill-row">
                ${t.numbers.market.pills
                  .map(
                    p => `
                  <div class="pill ${p.variant}">${p.text}</div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div class="card glow-hover animate-scale-in" id="tokenomics">
              <h3>${t.tokenomics.title}</h3>
              <p>${t.tokenomics.text}</p>
              <div class="tokenomics-chart">
                ${t.tokenomics.items
                  .map(
                    i => `
                  <div class="tokenomics-bar">
                    <div class="tokenomics-top">
                      <span>${i.label}</span>
                      <span>${i.value}</span>
                    </div>
                    <div class="tokenomics-progress" data-progress="${i.progress || 60}"></div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- NFT GRID -->
      <section class="nft-section" id="nfts">
        <div class="container">
          <div class="section-header animate-fade-up">
            <div class="section-title-block">
              <div class="section-kicker">${t.nfts.kicker}</div>
              <h2 class="section-title">${t.nfts.title}</h2>
            </div>
            <div class="section-subtitle">${t.nfts.subtitle}</div>
          </div>
          <div class="nft-grid">
            ${t.nfts.items
              .map(
                (card, idx) => `
              <div class="nft-card glow-hover" data-delay="${idx * 0.08}">
                <div class="nft-title">${card.title}</div>
                <div class="nft-tag">${card.tag}</div>
                <div class="nft-note">${card.note}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <div class="container">
          <div class="section-header animate-fade-up">
            <div class="section-title-block">
              <div class="section-kicker">${t.faq.kicker}</div>
              <h2 class="section-title">${t.faq.title}</h2>
            </div>
            <div class="section-subtitle">${t.faq.subtitle}</div>
          </div>

          <div class="faq-list">
            ${t.faq.items
              .map(
                (item, idx) => `
              <div class="faq-item ${idx === 0 ? "open" : ""} glow-hover animate-fade-up" data-delay="${idx * 0.05}">
                <div class="faq-question">
                  <span>${item.q}</span>
                  <span class="faq-toggle">›</span>
                </div>
                <div class="faq-answer">${item.a}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <div class="cta-box glow-hover animate-scale-in">
            <div>
              <h2 class="cta-title">${t.cta.title}</h2>
              <p class="cta-sub">${t.cta.subtitle}</p>
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">
              <a class="btn btn-primary" href="${L.telegram}" target="_blank" rel="noreferrer">
                ${t.cta.btnJoin}
              </a>
              <a class="btn btn-outline" href="${L.buy}" target="_blank" rel="noreferrer">
                ${t.cta.btnTrade}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <div class="footer-row">
          <div>${t.footer.copy}</div>
          <div class="footer-links">
            <a href="#how">${t.footer.linkHow}</a>
            <a href="#tokenomics">${t.footer.linkTokenomics}</a>
            <a href="#faq">${t.footer.linkFaq}</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  initFaq(root);
  initLangToggle();
  initSmoothScroll();
  initHeroParallax();
  initParticles();
  initGsapAnimations();
}

function initFaq(root) {
  root.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
      } else {
        root.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
        item.classList.add("open");
      }
    });
  });
}

function initLangToggle() {
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ru" : "en";
      renderPage();
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", evt => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        evt.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

let parallaxState = { frame: null };
function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const cfg = (window.ANIMATION_CONFIG || {}).parallax || { strength: 18, ease: 0.12 };
  if (!hero) return;

  if (parallaxState.frame) cancelAnimationFrame(parallaxState.frame);
  if (parallaxState.scrollHandler) window.removeEventListener("scroll", parallaxState.scrollHandler);

  const state = {
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  };

  const update = () => {
    state.currentX += (state.targetX - state.currentX) * cfg.ease;
    state.currentY += (state.targetY - state.currentY) * cfg.ease;
    hero.style.setProperty("--parallax-x", `${state.currentX}px`);
    hero.style.setProperty("--parallax-y", `${state.currentY}px`);
    parallaxState.frame = requestAnimationFrame(update);
  };

  const handleMove = e => {
    const rect = hero.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    state.targetX = relX * cfg.strength * 2;
    state.targetY = relY * cfg.strength;
  };

  const handleScroll = () => {
    state.targetY = (window.scrollY / window.innerHeight) * cfg.strength;
  };

  hero.addEventListener("mousemove", handleMove);
  window.addEventListener("scroll", handleScroll, { passive: true });
  parallaxState.scrollHandler = handleScroll;
  update();
}

let nebulaContext;
function initParticles() {
  if (nebulaContext) return;
  const cfg = (window.ANIMATION_CONFIG || {}).particles || {};
  const canvas = document.createElement("canvas");
  canvas.className = "nebula-canvas";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const particles = Array.from({ length: cfg.count || 60 }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * (cfg.maxSize || 3) + 1,
    speedX: (Math.random() - 0.5) * (cfg.baseSpeed || 0.1),
    speedY: (Math.random() - 0.5) * (cfg.baseSpeed || 0.1),
    hue: 140 + Math.random() * 120,
  }));

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX + (Math.random() - 0.5) * (cfg.drift || 0.3);
      p.y += p.speedY + (Math.random() - 0.5) * (cfg.drift || 0.3);

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
      gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, 0.9)`);
      gradient.addColorStop(1, "rgba(2, 3, 10, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };

  draw();
  nebulaContext = { canvas, ctx };
}

function initGsapAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  const cfg = window.ANIMATION_CONFIG || {};
  const reveal = cfg.reveal || { offset: 22, duration: 0.85, stagger: 0.12, ease: "power3.out" };
  const staggerCfg = cfg.staggeredCards || { duration: 0.9, ease: "power2.out", stagger: 0.14 };
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.getAll().forEach(t => t.kill());

  gsap.utils.toArray(".animate-fade-up").forEach(el => {
    const delay = parseFloat(el.dataset.delay || "0");
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: reveal.offset },
      {
        duration: reveal.duration,
        autoAlpha: 1,
        y: 0,
        ease: reveal.ease,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });

  gsap.utils.toArray(".animate-scale-in").forEach(el => {
    const delay = parseFloat(el.dataset.delay || "0");
    gsap.fromTo(
      el,
      { autoAlpha: 0, scale: 0.9 },
      {
        duration: staggerCfg.duration,
        autoAlpha: 1,
        scale: 1,
        ease: staggerCfg.ease,
        delay,
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });

  gsap.utils.toArray(".tokenomics-progress").forEach(bar => {
    const progress = parseFloat(bar.dataset.progress || "60") / 100;
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: progress,
        duration: cfg.tokenomics?.duration || 1.1,
        ease: cfg.tokenomics?.ease || "expo.out",
        scrollTrigger: { trigger: bar, start: "top 90%" },
      }
    );
  });

  const heroCard = document.querySelector(".hero-card");
  if (heroCard) {
    gsap.fromTo(
      heroCard.querySelectorAll(".graph-bar"),
      { scaleY: 0.3 },
      {
        scaleY: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: heroCard, start: "top 80%" },
      }
    );
  }

  gsap.utils.toArray(".nft-card").forEach((card, idx) => {
    gsap.fromTo(
      card,
      { autoAlpha: 0, y: reveal.offset },
      {
        autoAlpha: 1,
        y: 0,
        duration: staggerCfg.duration,
        ease: staggerCfg.ease,
        delay: parseFloat(card.dataset.delay || idx * staggerCfg.stagger),
        scrollTrigger: { trigger: card.closest(".nft-grid"), start: "top 85%" },
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", renderPage);
