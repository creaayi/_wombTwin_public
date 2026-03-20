// ============================================================
// wombTwin Project Hub — Data
// ============================================================
// Edit this file to change content. No HTML or CSS here.
// The renderer (render.js) reads this and builds the page.
// ============================================================

const PROJECT = {

  title: 'wombTwin',

  premise: {
    en: 'A man learns he once had a twin who died in utero. That knowledge reorders his past and gently reorients his future — lighter, starting the healing path.',
    fr: 'Un homme découvre qu\'il a eu une sœur jumelle morte in utero. Ça lui permet de donner du sens à ses actes passés et futurs.',
  },

  meta: [
    { label: 'Format', value: 'Animated short · < 20 min' },
    { label: 'Reference', value: 'Aikāne' },
    { label: 'Ending', value: 'Open, not resolved' },
  ],

  // === BEATS ===
  beats: [
    {
      id: 'before',
      name: 'Before',
      subtitle: 'Latent misalignment',
      color: '#9b8ec4',
      description: 'A life lived at a slight distance from itself. Persistent wrongness, unnamed grief. The grief track is already active at 0.0 — his whole life was already a mourning he didn\'t yet know the name of.',
      quote: null,
      tracks: [],  // no tracks yet
    },
    {
      id: 'access',
      name: 'Access',
      subtitle: 'Body knows first',
      color: '#4a9ab8',
      description: 'The hypnosis session. Knowledge enters through the body before the mind understands it. "The body knows. The mind was simply the last to be told."',
      quote: null,
      tracks: [
        {
          file: 'audio/track_mundus_paul.mp3',
          title: 'track_mundus_paul',
          source: 'Paul (composer) · tempo matches envisioned rhythm',
          startAt: 0,
          note: 'The image: a piece of something hitting a surface, accumulating, and due to acceleration, breaking through it — like water drops on glass during rain. Hence the link with "Access."',
          confidence: null,
          alsoFits: null,
          usedInArc: true,  // this is the one used in continuous playback
        },
      ],
    },
    {
      id: 'revelation',
      name: 'Revelation',
      subtitle: 'Everything falls into place',
      color: '#6bb8c4',
      description: 'The smoothness of how everything now glides in one\'s memory, now that one significantly foundational piece of information that was missing is known.',
      quote: 'C\'était bouleversant, magique, puissant… tellement mon cœur battait fort et toutes les cellules de mon corps ressentaient si puissamment ma sœur\u00a0!',
      tracks: [
        {
          file: 'audio/track_pianoMinimalist_producer.mp3',
          title: 'track_pianoMinimalist_producer',
          source: 'Producer.ai · minimalist piano',
          startAt: 0,
          note: 'Transmits smoothness — how everything flows in memory once the missing information is known.',
          confidence: null,
          alsoFits: 'Beat 5',
          usedInArc: true,
        },
      ],
    },
    {
      id: 'euphoric-reunion',
      name: 'Euphoric Reunion',
      subtitle: 'Amniotic return',
      color: '#5cb87a',
      description: 'For a few seconds, they are together again. Intensity 1.0 on the twin track — the only note at maximum intensity in the entire score.',
      quote: 'L\'espace de quelques secondes, c\'est comme si nous étions de nouveau toutes les deux réunies.',
      tracks: [
        {
          file: 'audio/track_eerieCor_producer.mp3',
          title: 'track_eerieCor_producer',
          source: 'Producer.ai · 3 min',
          startAt: 0,
          note: 'At 1:29, a cor (wind instrument) enters and transports. It makes one listen and be carried away. Every listen confirms it.',
          confidence: { score: '7/7', level: 'high', label: 'keeping this' },
          alsoFits: null,
          usedInArc: true,
        },
      ],
    },
    {
      id: 'grief',
      name: 'Grief + Revelation 2',
      subtitle: 'Losing her a second time',
      color: '#c45a5a',
      description: 'The real grief begins when understanding that seeing her again will be impossible. The second revelation: he always had her, but in a way that can never be actualized. Highest intensity on the grief track (0.95).',
      quote: 'Le véritable deuil a commencé quand j\'ai compris que la revoir serait impossible. J\'ai eu la sensation de la perdre une deuxième fois.',
      tracks: [
        {
          file: 'audio/track_pianoMinimalist_producer.mp3',
          title: 'track_pianoMinimalist_producer',
          source: 'Producer.ai · minimalist piano',
          startAt: 0,
          note: 'A soothing melody to accompany grief — minimalist enough to give space for pain, present enough to feel a comforting "better days are coming" presence.',
          confidence: null,
          alsoFits: 'Beat 3',
          usedInArc: false,
        },
        {
          file: 'audio/track_percuGroove_producer.mp3',
          title: 'track_percuGroove_producer',
          source: 'Producer.ai · 3:35 · key section from 2:00',
          startAt: 125,
          note: '0:00–2:04: sounds introduced gradually from silence. From 2:05: percussive beats introduce a get-you-going groove that shifts the mood — the transition from grief-sadness to Revelation 2 and reorientation.',
          confidence: { score: '5/7', level: 'mid', label: 'match · 3–4/7 certainty for final' },
          alsoFits: null,
          usedInArc: true,
        },
      ],
    },
    {
      id: 'reorientation',
      name: 'Reorientation',
      subtitle: 'Same life, not the same person',
      color: '#c4b44e',
      description: 'The same scenes as the opening, but differently inhabited. Lighter, starting the healing path. The ending is open, not resolved — like Aikāne.',
      quote: 'Not resolution, not healing, not closure — orientation, lightness, permission to live forward.',
      tracks: [],  // no tracks yet
    },
  ],

  // === EMOTIONAL REGISTERS ===
  registers: [
    { name: 'Body',    color: '#c4826a', description: 'Somatic experience — claustrophobia, phantom pain, heart beating, physical recognition' },
    { name: 'Memory',  color: '#6a8ec4', description: 'Cognitive layer — the two revelations, replaying past scenes with new meaning' },
    { name: 'Twin',    color: '#5aaa8a', description: 'The other presence — sparse until reunion, then maximum intensity' },
    { name: 'Grief',   color: '#c46a7a', description: 'Active from note 0 — unnamed mourning, the grief was always there' },
    { name: 'Silence', color: '#8a7a9a', description: 'The gaps, the breath, moments between states; carries reorientation' },
    { name: 'Light',   color: '#c4a44e', description: 'The euphoria inside the grief; the healing orientation at end' },
  ],

  // === INTERACTIVE ARTIFACTS ===
  artifacts: [
    { tag: 'Primary Tool',   name: 'Piano Roll — Emotional Score',  href: 'artifacts/pianoroll_concept.html',    description: '6-track canvas visualizer. Time moves left-to-right, emotional registers visible simultaneously. Play/pause, scrub, zoom.' },
    { tag: 'Visual Concept',  name: 'Interference Patterns',         href: 'artifacts/interference_concept.html', description: 'Two wave fields interfering. Separation slider moves through the emotional arc. Color shifts: union → interference → grief.' },
    { tag: 'Visual Concept',  name: 'Oscilloscope — Heartbeat',      href: 'artifacts/oscilloscope_concept.html', description: 'ECG-style waveforms with CRT phosphor persistence. Dual-channel heartbeat tied to emotional states (62–118 BPM).' },
    { tag: 'Visual Concept',  name: 'Amniotic Fluid + Grid',         href: 'artifacts/amniotic_concept.html',     description: 'Metaball fluid field with distorted grid overlay. Presence slider from pure fluid to reunion. Grid = structure, fluid = unity.' },
    { tag: 'Design Tool',     name: 'Direction Palette',              href: 'artifacts/direction_palette.html',    description: 'Dashboard exploring 6 strategies for mapping emotional registers to visual tile proportions. Includes dimension axes and combinations.' },
    { tag: 'Editor',          name: 'Score Workbench',                href: 'artifacts/pianoroll_workbench.html',  description: 'Interactive score editor with draw/erase/select tools, intensity adjustment, JSON export/import for composition.' },
  ],

  // === PROJECT STATUS ===
  locked: [
    'Core narrative: man discovers he had a twin',
    'Emotional skeleton: 6 beats, 6 registers',
    'Grief starts at 0.0 (not caused by revelation)',
    'Twin track intensity peaks at 1.0 only during euphoric reunion',
    'Philosophical frame: clarity is epistemic; form shapes understanding',
    'Reference film: Aikāne',
    'Ending: open, not resolved',
  ],

  openThreads: [
    { status: 'open',   text: 'Beginning of film — what precedes the therapy session?' },
    { status: 'open',   text: 'Ritual moment — birthday? tattoo? water? where does it go?' },
    { status: 'open',   text: 'Visual language — abstract vs representational?' },
    { status: 'open',   text: 'Film timing — proportional (0–1) to real minutes' },
    { status: 'needed', text: 'Composer invitation — formalize collaboration' },
    { status: 'needed', text: 'Collect music files into vault' },
    { status: 'needed', text: 'Audio embedding — Web Audio API in piano roll' },
  ],

  questions: [
    'Will the final film <em>be</em> the piano roll, or will the piano roll be a tool that generates a different visual language?',
    'Is the interference pattern a metaphor for the entire film, or just a moment?',
    'Can the opening "before" be beautiful without being sad?',
    'What does the twin look like visually, if never shown as a fetus or face?',
    'Does the film end with the man alone, or is there another presence?',
  ],
};
