// ============================================================
// wombTwin Project Hub — Renderer (bilingual)
// ============================================================
// Reads PROJECT from data.js and builds the page HTML.
// Supports EN/FR toggle. Language state stored in window.hubLang.
// ============================================================

(function() {
  const D = PROJECT;

  // === Language state ===
  window.hubLang = 'fr';

  // === Helpers ===
  function esc(s) {
    if (!s) return '';
    const el = document.createElement('span');
    el.textContent = s;
    return el.innerHTML;
  }

  // Resolve a bilingual field: { en: '...', fr: '...' } or plain string
  function t(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[window.hubLang] || field.en || '';
  }

  // === Render all (called on init and on language switch) ===
  function renderAll() {
    document.getElementById('playback-bar-mount').innerHTML = renderPlaybackBar();
    document.getElementById('hub-mount').innerHTML =
      renderHero() +
      renderBeats() +
      renderRegisters() +
      renderArtifacts() +
      renderStatus() +
      renderFooter();
  }

  // === LANGUAGE TOGGLE ===
  function renderLangToggle() {
    const L = window.hubLang;
    return `
    <div class="lang-toggle" id="langToggle">
      <button class="lang-btn ${L === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      <button class="lang-btn ${L === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
    </div>`;
  }

  // === HERO ===
  function renderHero() {
    const metaHtml = D.meta.map(m =>
      `<div>${esc(t(m.label))} <span>${esc(t(m.value))}</span></div>`
    ).join('');

    return `
    <header class="hero">
      ${renderLangToggle()}
      <div class="hero-label">${esc(t(D.labels.heroLabel))}</div>
      <h1><em>${esc(D.title)}</em></h1>
      <p class="hero-premise">${esc(t(D.premise))}</p>
      <div class="hero-meta">${metaHtml}</div>
    </header>`;
  }

  // === BEATS / TIMELINE ===
  function renderTrackCard(track, beatColor) {
    const iconBg = beatColor + '26';
    let html = `
    <div class="music-card">
      <div class="music-icon" style="background: ${iconBg}; color: ${beatColor};">&#9835;</div>
      <div class="music-info">
        <div class="music-title">${esc(track.title)}</div>
        <div class="music-source">${esc(t(track.source))}</div>
        <audio class="music-player" controls preload="metadata">
          <source src="${esc(track.file)}" type="audio/mpeg">
        </audio>
        <div class="music-note">${esc(t(track.note))}</div>`;

    if (track.confidence) {
      html += `<span class="music-confidence confidence-${track.confidence.level}">${esc(track.confidence.score)} — ${esc(t(track.confidence.label))}</span>`;
    }
    if (track.alsoFits) {
      html += `<span class="also-fits">${esc(t(D.labels.alsoFits))} ${esc(t(track.alsoFits))}</span>`;
    }

    html += `</div></div>`;
    return html;
  }

  function renderMissingCard(beatName, beatColor) {
    const iconBg = beatColor + '26';
    return `
    <div class="music-card">
      <div class="music-icon" style="background: ${iconBg}; color: ${beatColor};">&#9835;</div>
      <div class="music-info">
        <div class="music-title">${esc(t(beatName))} — Music</div>
        <div class="music-placeholder">${esc(t(D.labels.missingTrack))}</div>
      </div>
    </div>`;
  }

  function renderBeats() {
    const beatsHtml = D.beats.map((beat, i) => {
      let quoteHtml = '';
      if (beat.quote) {
        const sourceHtml = beat.quoteSource
          ? `<div class="beat-quote-source">${esc(t(beat.quoteSource))}</div>`
          : '';
        quoteHtml = `<div class="beat-quote">\u201C${esc(t(beat.quote))}\u201D${sourceHtml}</div>`;
      }

      let tracksHtml;
      if (beat.tracks.length === 0) {
        tracksHtml = renderMissingCard(beat.name, beat.color);
      } else {
        tracksHtml = beat.tracks.map(tr => renderTrackCard(tr, beat.color)).join('');
      }

      return `
      <div class="beat" id="beat-${i}">
        <div class="beat-time">${esc(t(D.labels.beat))} ${i + 1}</div>
        <div class="beat-line"><div class="beat-dot" style="background: ${beat.color}"></div></div>
        <div class="beat-content">
          <div class="beat-name" style="color: ${beat.color}">${esc(t(beat.name))}</div>
          <div class="beat-subtitle">${esc(t(beat.subtitle))}</div>
          <div class="beat-desc">${esc(t(beat.description))}</div>
          ${quoteHtml}
          ${tracksHtml}
        </div>
      </div>`;
    }).join('');

    return `
    <section>
      <div class="section-label">${esc(t(D.labels.beatsSection))} — ${D.beats.length} Beats</div>
      <div class="playback-toggle">
        <button class="playback-launch-btn" id="launchPlayback">&#9654; ${esc(t(D.labels.playFullArc))}</button>
      </div>
      <div class="timeline">${beatsHtml}</div>
    </section>`;
  }

  // === REGISTERS ===
  function renderRegisters() {
    const cards = D.registers.map(r => `
      <div class="register-card" style="border-left-color: ${r.color}">
        <div class="register-name">${esc(t(r.name))}</div>
        <div class="register-desc">${esc(t(r.description))}</div>
      </div>`).join('');

    return `
    <section>
      <div class="section-label">${esc(t(D.labels.registers))}</div>
      <div class="registers-grid">${cards}</div>
    </section>`;
  }

  // === ARTIFACTS ===
  function renderArtifacts() {
    const cards = D.artifacts.map(a => `
      <a class="artifact-card" href="${esc(a.href)}">
        <div class="artifact-tag">${esc(t(a.tag))}</div>
        <div class="artifact-name">${esc(a.name)}</div>
        <div class="artifact-desc">${esc(t(a.description))}</div>
      </a>`).join('');

    return `
    <section>
      <div class="section-label">${esc(t(D.labels.artifacts))}</div>
      <p class="section-intro">${esc(t(D.labels.artifactsDesc))}</p>
      <div class="artifacts-grid">${cards}</div>
    </section>`;
  }

  // === STATUS (3 columns: locked, next actions, open questions) ===
  function renderStatus() {
    const lockedHtml = D.locked.map(l =>
      `<li><span class="tag-locked">LOCKED</span> ${esc(t(l))}</li>`
    ).join('');

    const threadsHtml = D.openThreads.map(th =>
      `<li><span class="tag-${th.status}">${th.status.toUpperCase()}</span> ${esc(t(th.text))}</li>`
    ).join('');

    const questionsHtml = D.questions.map(q =>
      `<li>${t(q)}</li>`
    ).join('');

    return `
    <section>
      <div class="section-label">${esc(t(D.labels.status))}</div>
      <div class="three-col">
        <div>
          <h3 class="status-heading">${esc(t(D.labels.locked))}</h3>
          <ul class="status-list">${lockedHtml}</ul>
          <p class="status-footnote">${esc(t(D.labels.everything))}</p>
        </div>
        <div>
          <h3 class="status-heading">${esc(t(D.labels.openThreads))}</h3>
          <ul class="status-list">${threadsHtml}</ul>
        </div>
        <div>
          <h3 class="status-heading">${esc(t(D.labels.questions))}</h3>
          <ul class="questions-list">${questionsHtml}</ul>
        </div>
      </div>
    </section>`;
  }

  // === FOOTER ===
  function renderFooter() {
    return `
    <footer class="footer">
      <div class="footer-line"></div>
      <p><em>${esc(D.title)}</em> — ${esc(t(D.labels.footer1))}</p>
      <p style="margin-top: 8px;">${esc(t(D.labels.footer2))}</p>
    </footer>`;
  }

  // === PLAYBACK BAR ===
  function renderPlaybackBar() {
    return `
    <div class="playback-bar" id="playbackBar">
      <button class="playback-close" id="btnClose" title="Close player">&times;</button>
      <div class="playback-inner">
        <div class="playback-controls">
          <button class="pb-btn" id="btnPrev" title="Previous beat">&#9664;&#9664;</button>
          <button class="pb-btn main" id="btnPlay" title="Play / Pause">&#9654;</button>
          <button class="pb-btn" id="btnNext" title="Next beat">&#9654;&#9654;</button>
          <div class="playback-info">
            <div>
              <div class="playback-beat-name" id="playbackBeatName">&mdash;</div>
              <div class="playback-track-name" id="playbackTrackName"></div>
            </div>
            <div class="playback-time" id="playbackTime">0:00 / 0:00</div>
          </div>
        </div>
        <div class="playback-track" id="playbackTrack"></div>
      </div>
    </div>`;
  }

  // === INIT ===
  renderAll();

  // === Language toggle event delegation ===
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    const newLang = btn.dataset.lang;
    if (newLang === window.hubLang) return;
    window.hubLang = newLang;
    // Re-render (player.js will re-init via the event below)
    renderAll();
    document.dispatchEvent(new CustomEvent('hub-rerender'));
  });

  // Expose renderAll for external use
  window.hubRenderAll = renderAll;
})();
