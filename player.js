// ============================================================
// wombTwin Project Hub — Playback Engine
// ============================================================
// Reads PROJECT from data.js, finds <audio> elements built by
// render.js, and wires up unified continuous playback.
// ============================================================

(function() {
  const D = PROJECT;

  // === Build playlist from data ===
  // For each beat, find the track marked usedInArc (or first track, or null)
  const playlist = D.beats.map((beat, i) => {
    const arcTrack = beat.tracks.find(t => t.usedInArc) || null;
    return {
      beat: beat.name,
      color: beat.color,
      beatId: 'beat-' + i,
      startAt: arcTrack ? arcTrack.startAt : 0,
      trackName: arcTrack ? arcTrack.title : 'No track yet',
      audioMatch: arcTrack ? arcTrack.file : null,
      missing: !arcTrack,
    };
  });

  // === DOM refs ===
  const bar        = document.getElementById('playbackBar');
  const btnPlay    = document.getElementById('btnPlay');
  const btnPrev    = document.getElementById('btnPrev');
  const btnNext    = document.getElementById('btnNext');
  const trackEl    = document.getElementById('playbackTrack');
  const elBeatName = document.getElementById('playbackBeatName');
  const elTrackName= document.getElementById('playbackTrackName');
  const elTime     = document.getElementById('playbackTime');
  const launchBtn  = document.getElementById('launchPlayback');

  let currentIdx = -1;
  let playing = false;
  let raf = null;
  let segments = [];
  let managedPlay = false;

  // === Resolve DOM audio elements ===
  const allPageAudios = Array.from(document.querySelectorAll('audio.music-player'));

  playlist.forEach(item => {
    item.audioEl = null;
    item.beatEl = document.getElementById(item.beatId);
    item.musicCard = null;
    if (item.audioMatch) {
      const found = allPageAudios.find(a => {
        const src = a.querySelector('source');
        return src && src.getAttribute('src') === item.audioMatch;
      });
      if (found) {
        item.audioEl = found;
        item.musicCard = found.closest('.music-card');
      }
    }
  });

  // === Helpers ===
  function fmt(s) {
    if (isNaN(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return m + ':' + (ss < 10 ? '0' : '') + ss;
  }

  function findNextPlayable(from, direction) {
    let i = from + direction;
    while (i >= 0 && i < playlist.length) {
      if (playlist[i].audioEl) return i;
      i += direction;
    }
    return -1;
  }

  function pauseAll() {
    allPageAudios.forEach(a => { if (!a.paused) a.pause(); });
  }

  function clearBeatHighlights() {
    document.querySelectorAll('.beat.now-playing').forEach(el => el.classList.remove('now-playing'));
    document.querySelectorAll('.music-card.active-player').forEach(el => el.classList.remove('active-player'));
  }

  function highlightBeat(idx) {
    clearBeatHighlights();
    if (idx >= 0 && idx < playlist.length) {
      const item = playlist[idx];
      if (item.beatEl) {
        item.beatEl.classList.add('now-playing');
        const barH = bar.offsetHeight || 80;
        const rect = item.beatEl.getBoundingClientRect();
        const top = window.scrollY + rect.top - barH - 20;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
      if (item.musicCard) {
        item.musicCard.classList.add('active-player');
      }
    }
  }

  // === Build segments ===
  function buildSegments() {
    trackEl.innerHTML = '';
    segments = [];
    playlist.forEach((item, i) => {
      const seg = document.createElement('div');
      const hasSrc = !!item.audioEl;
      seg.className = 'playback-segment' + (hasSrc ? ' has-track' : ' missing');
      seg.style.borderColor = item.color;
      seg.style.backgroundColor = item.color;
      seg.style.flex = hasSrc ? '1' : '0.5';
      seg.title = item.beat + (hasSrc ? '' : ' — no track');

      var label = item.beat.split('+')[0].trim().split(' ')[0];
      seg.innerHTML =
        '<div class="seg-fill"></div>' +
        '<div class="seg-playhead"></div>' +
        '<span class="seg-label">' + label + '</span>';

      seg.addEventListener('click', (e) => {
        if (!hasSrc) return;
        if (i === currentIdx && item.audioEl && item.audioEl.duration) {
          const rect = seg.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          const playableRange = item.audioEl.duration - item.startAt;
          item.audioEl.currentTime = item.startAt + pct * playableRange;
          if (!playing) updateUI();
        } else {
          playIndex(i);
        }
      });

      trackEl.appendChild(seg);
      segments.push(seg);
    });
  }

  // === UI update loop ===
  function updateUI() {
    segments.forEach((seg, i) => {
      seg.classList.remove('active', 'done');
      const fill = seg.querySelector('.seg-fill');
      const head = seg.querySelector('.seg-playhead');

      if (i < currentIdx) {
        seg.classList.add('done');
        fill.style.width = playlist[i].audioEl ? '100%' : '0%';
        head.style.display = 'none';
      } else if (i === currentIdx) {
        seg.classList.add('active');
        const item = playlist[i];
        if (item.audioEl && item.audioEl.duration) {
          const elapsed = item.audioEl.currentTime - item.startAt;
          const total = item.audioEl.duration - item.startAt;
          const pct = Math.max(0, Math.min(100, (elapsed / total) * 100));
          fill.style.width = pct + '%';
          head.style.left = pct + '%';
          head.style.display = 'block';
        }
      } else {
        fill.style.width = '0%';
        head.style.display = 'none';
      }
    });

    if (currentIdx >= 0 && currentIdx < playlist.length) {
      const item = playlist[currentIdx];
      elBeatName.textContent = 'Beat ' + (currentIdx + 1) + ' — ' + item.beat;
      elBeatName.style.color = item.color;
      elTrackName.textContent = item.trackName;
      if (item.audioEl && !isNaN(item.audioEl.duration)) {
        elTime.textContent = fmt(item.audioEl.currentTime) + ' / ' + fmt(item.audioEl.duration);
      }
    }

    btnPrev.disabled = findNextPlayable(currentIdx, -1) === -1;
    btnNext.disabled = findNextPlayable(currentIdx, 1) === -1;

    if (playing) raf = requestAnimationFrame(updateUI);
  }

  // === Playback control ===
  function stopAudio() {
    pauseAll();
    playlist.forEach(item => {
      if (item.audioEl) item.audioEl.removeEventListener('ended', onEnded);
    });
    if (raf) cancelAnimationFrame(raf);
    playing = false;
    btnPlay.classList.remove('playing');
    btnPlay.innerHTML = '&#9654;';
    clearBeatHighlights();
  }

  function playIndex(idx) {
    stopAudio();

    while (idx >= 0 && idx < playlist.length && !playlist[idx].audioEl) {
      if (segments[idx]) segments[idx].classList.add('done');
      idx++;
    }
    if (idx < 0 || idx >= playlist.length) {
      currentIdx = playlist.length;
      elBeatName.textContent = 'End of arc';
      elBeatName.style.color = '';
      elTrackName.textContent = '';
      elTime.textContent = '';
      segments.forEach(s => { s.classList.remove('active'); if (s.classList.contains('has-track')) s.classList.add('done'); });
      btnPlay.innerHTML = '&#8634;';
      clearBeatHighlights();
      return;
    }

    currentIdx = idx;
    const item = playlist[idx];
    const audioEl = item.audioEl;

    audioEl.addEventListener('ended', onEnded);

    const doPlay = () => {
      audioEl.currentTime = item.startAt;
      managedPlay = true;
      audioEl.play();
      managedPlay = false;
      playing = true;
      btnPlay.classList.add('playing');
      btnPlay.innerHTML = '&#10074;&#10074;';
      highlightBeat(idx);
      updateUI();
    };

    if (audioEl.readyState >= 2) {
      doPlay();
    } else {
      audioEl.addEventListener('canplay', doPlay, { once: true });
      audioEl.load();
    }
  }

  function onEnded() {
    const item = playlist[currentIdx];
    if (item && item.audioEl) item.audioEl.removeEventListener('ended', onEnded);

    const next = findNextPlayable(currentIdx, 1);
    if (next !== -1) {
      playIndex(next);
    } else {
      if (segments[currentIdx]) { segments[currentIdx].classList.remove('active'); segments[currentIdx].classList.add('done'); }
      playIndex(playlist.length);
    }
  }

  function togglePlay() {
    if (currentIdx >= playlist.length || currentIdx < 0) {
      playIndex(0);
      return;
    }
    const item = playlist[currentIdx];
    if (!item || !item.audioEl) {
      playIndex(0);
      return;
    }
    if (playing) {
      item.audioEl.pause();
      playing = false;
      if (raf) cancelAnimationFrame(raf);
      btnPlay.classList.remove('playing');
      btnPlay.innerHTML = '&#9654;';
    } else {
      managedPlay = true;
      item.audioEl.play();
      managedPlay = false;
      playing = true;
      btnPlay.classList.add('playing');
      btnPlay.innerHTML = '&#10074;&#10074;';
      highlightBeat(currentIdx);
      updateUI();
    }
  }

  function goPrev() {
    const prev = findNextPlayable(currentIdx, -1);
    if (prev !== -1) playIndex(prev);
  }

  function goNext() {
    const next = findNextPlayable(currentIdx, 1);
    if (next !== -1) playIndex(next);
  }

  // === Intercept individual audio play events ===
  allPageAudios.forEach(audioEl => {
    audioEl.addEventListener('play', () => {
      if (managedPlay) return;
      const idx = playlist.findIndex(item => item.audioEl === audioEl);
      if (idx === -1) return;
      allPageAudios.forEach(a => { if (a !== audioEl && !a.paused) a.pause(); });
      if (!bar.classList.contains('visible')) {
        bar.classList.add('visible');
        document.body.classList.add('playback-active');
        if (launchBtn) launchBtn.style.display = 'none';
      }
      if (raf) cancelAnimationFrame(raf);
      playlist.forEach(item => {
        if (item.audioEl) item.audioEl.removeEventListener('ended', onEnded);
      });
      currentIdx = idx;
      audioEl.addEventListener('ended', onEnded);
      playing = true;
      btnPlay.classList.add('playing');
      btnPlay.innerHTML = '&#10074;&#10074;';
      highlightBeat(idx);
      updateUI();
    });

    audioEl.addEventListener('pause', () => {
      if (managedPlay) return;
      const idx = playlist.findIndex(item => item.audioEl === audioEl);
      if (idx === currentIdx && playing) {
        playing = false;
        if (raf) cancelAnimationFrame(raf);
        btnPlay.classList.remove('playing');
        btnPlay.innerHTML = '&#9654;';
      }
    });
  });

  // === Keyboard shortcuts ===
  document.addEventListener('keydown', (e) => {
    if (!bar.classList.contains('visible')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') { e.preventDefault(); goNext(); }
    if (e.code === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
  });

  // === Close bar ===
  function closeBar() {
    stopAudio();
    bar.classList.remove('visible');
    document.body.classList.remove('playback-active');
    clearBeatHighlights();
    currentIdx = -1;
    if (launchBtn) launchBtn.style.display = '';
  }

  // === Init ===
  buildSegments();

  btnPlay.addEventListener('click', togglePlay);
  btnPrev.addEventListener('click', goPrev);
  btnNext.addEventListener('click', goNext);
  document.getElementById('btnClose').addEventListener('click', closeBar);

  launchBtn.addEventListener('click', () => {
    bar.classList.add('visible');
    document.body.classList.add('playback-active');
    launchBtn.style.display = 'none';
    playIndex(0);
  });
})();
