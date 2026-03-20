// ============================================================
// wombTwin Project Hub — Renderer
// ============================================================
// Reads PROJECT from data.js and builds the page HTML.
// Separated from theme (CSS) and player (player.js).
// ============================================================

(function() {
  const D = PROJECT;

  // === Helpers ===
  function esc(s) {
    if (!s) return '';
    const el = document.createElement('span');
    el.textContent = s;
    return el.innerHTML;
  }

  // === HERO ===
  function renderHero() {
    const metaHtml = D.meta.map(m =>
      `<div>${esc(m.label)} <span>${esc(m.value)}</span></div>`
    ).join('');

    return `
    <header class="hero">
      <div class="hero-label">project hub</div>
      <h1><em>${esc(D.title)}</em></h1>
      <p class="hero-premise">
        ${esc(D.premise.en)}
        <span class="fr">${esc(D.premise.fr)}</span>
      </p>
      <div class="hero-meta">${metaHtml}</div>
    </header>`;
  }

  // === BEATS / TIMELINE ===
  function renderTrackCard(track, beatColor) {
    const iconBg = beatColor + '26'; // ~15% opacity hex
    let html = `
    <div class="music-card">
      <div class="music-icon" style="background: ${iconBg}; color: ${beatColor};">&#9835;</div>
      <div class="music-info">
        <div class="music-title">${esc(track.title)}</div>
        <div class="music-source">${esc(track.source)}</div>
        <audio class="music-player" controls preload="metadata">
          <source src="${esc(track.file)}" type="audio/mpeg">
        </audio>
        <div class="music-note">${esc(track.note)}</div>`;

    if (track.confidence) {
      html += `<span class="music-confidence confidence-${track.confidence.level}">${esc(track.confidence.score)} — ${esc(track.confidence.label)}</span>`;
    }
    if (track.alsoFits) {
      html += `<span class="also-fits">also fits ${esc(track.alsoFits)}</span>`;
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
        <div class="music-title">${esc(beatName)} — Music</div>
        <div class="music-placeholder">Missing track(s) — to discuss with composer</div>
      </div>
    </div>`;
  }

  function renderBeats() {
    const beatsHtml = D.beats.map((beat, i) => {
      const quoteHtml = beat.quote
        ? `<div class="beat-quote">${esc(beat.quote)}</div>`
        : '';

      let tracksHtml;
      if (beat.tracks.length === 0) {
        tracksHtml = renderMissingCard(beat.name, beat.color);
      } else {
        tracksHtml = beat.tracks.map(t => renderTrackCard(t, beat.color)).join('');
      }

      return `
      <div class="beat" id="beat-${i}">
        <div class="beat-time">Beat ${i + 1}</div>
        <div class="beat-line"><div class="beat-dot" style="background: ${beat.color}"></div></div>
        <div class="beat-content">
          <div class="beat-name" style="color: ${beat.color}">${esc(beat.name)}</div>
          <div class="beat-subtitle">${esc(beat.subtitle)}</div>
          <div class="beat-desc">${esc(beat.description)}</div>
          ${quoteHtml}
          ${tracksHtml}
        </div>
      </div>`;
    }).join('');

    return `
    <section>
      <div class="section-label">Emotional Architecture — ${D.beats.length} Beats</div>
      <div class="playback-toggle">
        <button class="playback-launch-btn" id="launchPlayback">&#9654; Play full arc — listen to all beats in sequence</button>
      </div>
      <div class="timeline">${beatsHtml}</div>
    </section>`;
  }

  // === REGISTERS ===
  function renderRegisters() {
    const cards = D.registers.map(r => `
      <div class="register-card" style="border-left-color: ${r.color}">
        <div class="register-name">${esc(r.name)}</div>
        <div class="register-desc">${esc(r.description)}</div>
      </div>`).join('');

    return `
    <section>
      <div class="section-label">Six Emotional Registers</div>
      <div class="registers-grid">${cards}</div>
    </section>`;
  }

  // === ARTIFACTS ===
  function renderArtifacts() {
    const cards = D.artifacts.map(a => `
      <a class="artifact-card" href="${esc(a.href)}">
        <div class="artifact-tag">${esc(a.tag)}</div>
        <div class="artifact-name">${esc(a.name)}</div>
        <div class="artifact-desc">${esc(a.description)}</div>
      </a>`).join('');

    return `
    <section>
      <div class="section-label">Interactive Artifacts</div>
      <div class="artifacts-grid">${cards}</div>
    </section>`;
  }

  // === STATUS ===
  function renderStatus() {
    const lockedHtml = D.locked.map(l =>
      `<li><span class="tag-locked">LOCKED</span> ${esc(l)}</li>`
    ).join('');

    const threadsHtml = D.openThreads.map(t =>
      `<li><span class="tag-${t.status}">${t.status.toUpperCase()}</span> ${esc(t.text)}</li>`
    ).join('');

    return `
    <section>
      <div class="section-label">Project Status</div>
      <div class="two-col">
        <div>
          <h3 class="status-heading">What's Locked</h3>
          <ul class="status-list">${lockedHtml}</ul>
          <p class="status-footnote">Everything else can change.</p>
        </div>
        <div>
          <h3 class="status-heading">Open Threads</h3>
          <ul class="status-list">${threadsHtml}</ul>
        </div>
      </div>
    </section>`;
  }

  // === QUESTIONS ===
  function renderQuestions() {
    // questions may contain HTML (e.g. <em>), so no escaping
    const items = D.questions.map(q => `<li>${q}</li>`).join('');
    return `
    <section>
      <div class="section-label">Questions That Will Reshape The Project</div>
      <ul class="questions-list">${items}</ul>
    </section>`;
  }

  // === FOOTER ===
  function renderFooter() {
    return `
    <footer class="footer">
      <div class="footer-line"></div>
      <p><em>${esc(D.title)}</em> — an animated short film in progress</p>
      <p style="margin-top: 8px;">Emotional architecture · sound-led · open ending</p>
    </footer>`;
  }

  // === PLAYBACK BAR (static shell, player.js wires it up) ===
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

  // === ASSEMBLE ===
  document.getElementById('playback-bar-mount').innerHTML = renderPlaybackBar();

  document.getElementById('hub-mount').innerHTML =
    renderHero() +
    renderBeats() +
    renderRegisters() +
    renderArtifacts() +
    renderStatus() +
    renderQuestions() +
    renderFooter();
})();
