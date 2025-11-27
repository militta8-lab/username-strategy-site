let currentLang = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";

function renderPage() {
  const t = TEXTS[currentLang];
  const L = LINKS;

  const root = document.getElementById("root");

  root.innerHTML = `
    <header class="navbar">
      <div class="container">
        <div class="navbar-inner">
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
      <section class="hero">
        <div class="container">
          <div class="hero-grid">
            <div>
              <div class="hero-eyebrow">
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
                <div class="hero-note-pill">
                  ${t.hero.notePill}
                </div>
                <span>${t.hero.noteText}</span>
              </div>
              <div class="hero-grid-metrics">
                ${t.hero.metrics.map(m => `
                  <div class="metric-card">
                    <div class="metric-label">${m.label}</div>
                    <div class="metric-value">${m.value}</div>
                    <div class="metric-helper">${m.helper}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="hero-right">
              <div class="hero-card">
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
                      ${t.hero.rightCard.loopSteps.map(s => `
                        <li>
                          <span><span class="dot"></span>${s.left}</span>
                          <span class="model-pill">${s.right}</span>
                        </li>
                      `).join("")}
                    </ul>
                  </div>
                  <div class="model-card">
                    <div class="model-title">${t.hero.rightCard.signalsTitle}</div>
                    <ul class="model-list">
                      ${t.hero.rightCard.signals.map(s => `
                        <li>
                          <span>• ${s.left}</span>
                          <span class="model-pill">${s.right}</span>
                        </li>
                      `).join("")}
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
          <div class="section-header">
            <div class="section-title-block">
              <div class="section-kicker">${t.how.kicker}</div>
              <h2 class="section-title">${t.how.title}</h2>
            </div>
            <div class="section-subtitle">${t.how.subtitle}</div>
          </div>

          <div class="grid-3">
            ${t.how.steps.map((step, idx) => `
              <div class="step-card">
                <div class="step-index">${idx + 1}</div>
                <div class="step-title">${step.title}</div>
                <p class="step-body">${step.body}</p>
                <div class="step-label">${step.label}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- NUMBERS & TOKENOMICS -->
      <section id="numbers">
        <div class="container">
          <div class="section-header">
            <div class="section-title-block">
              <div class="section-kicker">${t.numbers.kicker}</div>
              <h2 class="section-title">${t.numbers.title}</h2>
            </div>
            <div class="section-subtitle">${t.numbers.subtitle}</div>
          </div>

          <div class="grid-2">
            <div class="card">
              <h3>${t.numbers.market.title}</h3>
              <p>${t.numbers.market.text}</p>
              <div class="pill-row">
                ${t.numbers.market.pills.map(p => `
                  <div class="pill ${p.variant}">${p.text}</div>
                `).join("")}
              </div>
            </div>

            <div class="card" id="tokenomics">
              <h3>${t.tokenomics.title}</h3>
              <p>${t.tokenomics.text}</p>
              <div class="tokenomics-row">
                ${t.tokenomics.items.map(i => `
                  <div>
                    <div class="tokenomics-label">${i.label}</div>
                    <div class="tokenomics-value">${i.value}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <div class="container">
          <div class="section-header">
            <div class="section-title-block">
              <div class="section-kicker">${t.faq.kicker}</div>
              <h2 class="section-title">${t.faq.title}</h2>
            </div>
            <div class="section-subtitle">${t.faq.subtitle}</div>
          </div>

          <div class="faq-list">
            ${t.faq.items.map((item, idx) => `
              <div class="faq-item ${idx === 0 ? "open" : ""}">
                <div class="faq-question">
                  <span>${item.q}</span>
                  <span class="faq-toggle">›</span>
                </div>
                <div class="faq-answer">${item.a}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="container">
          <div class="cta-box">
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

  // FAQ toggle
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

  // Lang toggle
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ru" : "en";
      renderPage();
    });
  }
}

document.addEventListener("DOMContentLoaded", renderPage);
