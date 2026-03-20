// ============================================================
// wombTwin Project Hub — Data (v3 · 20Mar26)
// ============================================================
// Edit this file to change content. No HTML or CSS here.
// The renderer (render.js) reads this and builds the page.
// Bilingual: each text field is { en: '...', fr: '...' }
// ============================================================

const PROJECT = {

  title: 'wombTwin',

  premise: {
    fr: 'Un homme découvre qu\'il a eu une sœur jumelle morte in utero. Cette révélation lui permet de donner du sens à certains situations de son passé ainsi qu\'une nouvelle orientation à sa vie, plus apaisée, plus légère malgré la douleur. La fin ne doit pas être fermée mais ouverte. Elle laisse entrevoir un après, un "1er jour du reste de sa vie".',
    en: 'A man learns he once had a twin who died in utero. That knowledge reorders his past and gently reorients his future — lighter, starting the healing path. The ending must not be closed but open, like Aikane. It hints at something beyond.',
  },

  meta: [
    { label: { en: 'Format', fr: 'Format' },     value: { en: 'Animated short · < 20 min', fr: 'Court-métrage animé · < 20 min' } },
    { label: { en: 'A Reference', fr: 'Une Référence' }, value: { en: 'Aikāne', fr: 'Aikāne' } },
    { label: { en: 'Ending', fr: 'Fin' },          value: { en: 'Open, not resolved', fr: 'Ouverte, non résolue' } },
  ],

  // === UI LABELS ===
  labels: {
    heroLabel:      { en: 'project hub', fr: 'hub du projet' },
    beatsSection:   { en: 'Emotional Architecture', fr: 'Architecture Émotionnelle' },
    playFullArc:    { en: 'Play the being-built soundtrack — listen to all beats in sequence', fr: 'Écouter la bande son en cours d\' élaboration du film — tous les sons en séquence' },
    registers:      { en: 'Six Emotional Registers', fr: 'Six Registres Émotionnels' },
    artifacts:      { en: 'Interactive Artifacts', fr: 'Artefacts Interactifs' },
    artifactsDesc:  {
      en: 'The interactive artifacts are emotional-architecture prototypes — they\'re not visualizations of the film, they\'re tools for thinking about it. Each one encodes the same emotional structure (6 beats, 6 registers) through a different sensory metaphor. They\'re closer to buildexplorablations (invented word) — building interactive representations as a form of thinking about the film, not illustrations of it.',
      fr: 'Les artefacts interactifs sont des prototypes d\'architecture émotionnelle — ce ne sont pas des visualisations du film, mais des outils pour y réfléchir. Chacun encode la même structure émotionnelle (6 beats, 6 registres) à travers une métaphore sensorielle différente. Ce sont des buildexplorablations (mot inventé) — construire des représentations interactives comme forme de réflexion sur le film, pas des illustrations de celui-ci.',
    },
    status:         { en: 'Project Status', fr: 'État du Projet' },
    locked:         { en: 'What\'s Locked', fr: 'Verrouillé' },
    openThreads:    { en: 'Next Actions', fr: 'À faire' },
    questions:      { en: 'Questions That Will Reshape The Project', fr: 'Questions qui redéfiniront le projet' },
    missingTrack:   { en: 'Missing track(s) — to discuss with composer', fr: 'Piste(s) manquante(s) — à discuter avec le compositeur' },
    alsoFits:       { en: 'also fits', fr: 'convient aussi pour' },
    footer1:        { en: 'an animated short film in progress', fr: 'un court-métrage animé en cours' },
    footer2:        { en: 'Emotional architecture · sound-led · open ending', fr: 'Architecture émotionnelle · portée par le son · fin ouverte' },
    beat:           { en: 'Beat', fr: 'Beat' },
  },

  // === BEATS ===
  beats: [
    {
      id: 'before',
      name: { en: 'Before', fr: 'Avant' },
      subtitle: { en: 'Latent misalignment', fr: 'Désalignement latent' },
      color: '#9b8ec4',
      description: {
        en: 'A life lived at a slight distance from itself. Persistent wrongness, unnamed grief. The grief track is already active at 0.0 — his whole life was already a mourning he didn\'t yet know the name of.',
        fr: 'Une vie vécue à une légère distance d\'elle-même. Un malaise persistant, un deuil sans nom. La piste du deuil est déjà active à 0.0 — toute sa vie était déjà un deuil dont il ne connaissait pas encore le nom.',
      },
      quote: null,
      quoteSource: null,
      tracks: [],
    },
    {
      id: 'access',
      name: { en: 'Access', fr: 'Accès' },
      subtitle: { en: 'Body knows first', fr: 'Le corps sait en premier' },
      color: '#4a9ab8',
      description: {
        en: 'The hypnosis session. Access to memories that will let him understand what he suffers from. Previous scenes replay, but this time making sense under the revealing angle of a presence that was there from the very first second.',
        fr: 'La séance d\'hypnose. L\'accès aux souvenirs qui vont lui permettre de comprendre ce dont il souffre. Le repassage de précédentes scènes, mais cette fois prenant du sens sous l\'angle révélateur d\'une présence présente dès les premières secondes.',
      },
      quote: {
        en: 'Perhaps the pieces interlock to reveal the adequate orientation of each piece of the puzzle, to see appear the sister who was always there.',
        fr: 'Peut-être que les pièces s\'imbriquent pour donner un sens, la réalisation de l\'orientation adéquate à donner à chacune des pièces du puzzle pour voir apparaître la sœur qui a toujours été là.',
      },
      quoteSource: null,
      tracks: [
        {
          file: 'audio/track_mundus_paul.mp3',
          title: 'track_mundus_paul',
          source: { en: 'Tempo matches envisioned rhythm', fr: 'Le tempo correspond au rythme imaginé pour ce beat' },
          startAt: 0,
          note: {
            en: 'The image: a piece of something hitting a surface, accumulating, and due to acceleration, breaking through it — like water drops on glass during rain. Hence the link with "Access."',
            fr: 'L\'image : quelque chose qui frappe une surface, s\'accumule, et par accélération, la traverse — comme des gouttes d\'eau sur une vitre pendant la pluie. D\'où le lien avec « Accès ».',
          },
          confidence: null,
          alsoFits: null,
          usedInArc: true,
        },
      ],
    },
    {
      id: 'revelation',
      name: { en: 'Revelation', fr: 'Révélation' },
      subtitle: { en: 'Everything falls into place', fr: 'Tout prend sens' },
      color: '#6bb8c4',
      description: {
        en: 'The smoothness of how everything now glides in one\'s memory, now that one significantly foundational piece of information that was missing is known. Revelation 1: he had a twin sister in utero.',
        fr: 'La fluidité avec laquelle tout glisse désormais dans la mémoire, maintenant qu\'une information fondamentale qui manquait est enfin connue. Révélation 1 du puzzle : il a eu une sœur jumelle in utero.',
      },
      quote: 'C\'était bouleversant, magique, puissant… je n\'ai pas assez de mots pour le décrire. Tellement mon cœur battait fort et toutes les cellules de mon corps ressentaient si puissamment ma sœur\u00a0!',
      quoteSource: { en: '— Anonymous testimony, womb twin survivor', fr: '— Témoignage anonyme, survivante d\'un jumeau perdu in utero' },
      tracks: [
        {
          file: 'audio/track_pianoMinimalist_producer.mp3',
          title: 'track_pianoMinimalist_producer',
          source: { en: 'Producer.ai · minimalist piano', fr: 'Producer.ai · piano minimaliste' },
          startAt: 0,
          note: {
            en: 'Transmits smoothness — how everything flows in memory once the missing information is known.',
            fr: 'Transmet la fluidité — comment tout coule dans la mémoire une fois l\'information manquante connue.',
          },
          confidence: null,
          alsoFits: { en: 'Beat 5', fr: 'Beat 5' },
          usedInArc: true,
        },
      ],
    },
    {
      id: 'euphoric-reunion',
      name: { en: 'Euphoric Reunion', fr: 'Retrouvailles euphoriques' },
      subtitle: { en: 'Amniotic return', fr: 'Retour amniotique' },
      color: '#5cb87a',
      description: {
        en: 'A choreography of the twins in their original environment: the amniotic fluid water. That moment when they were one. For a few seconds, they are together again. Intensity 1.0 on the twin track — the only note at maximum intensity in the entire score.',
        fr: 'Une chorégraphie des jumeaux dans leur environnement originel : l\'eau du liquide amniotique. Ce moment où iels ne formaient qu\'un.e. Pendant quelques secondes, iels sont de nouveau ensemble. Intensité émotionnelle maximale.',
      },
      quote: 'L\'espace de quelques secondes, c\'est comme si nous étions de nouveau toutes les deux réunies.',
      quoteSource: { en: '— Anonymous testimony, womb twin survivor', fr: '— Témoignage anonyme, survivante d\'un jumeau perdu in utero' },
      tracks: [
        {
          file: 'audio/track_eerieCor_producer.mp3',
          title: 'track_eerieCor_producer',
          source: { en: 'Producer.ai · 3 min', fr: 'Producer.ai · 3 min' },
          startAt: 0,
          note: {
            en: 'At 1:29, a cor (wind instrument) enters and transports. It makes one listen and be carried away. Every listen confirms it.',
            fr: 'À 1:29, un cor entre et transporte. Il fait écouter et emporte. Chaque écoute le confirme.',
          },
          confidence: { score: '7/7', level: 'high', label: { en: 'keeping this', fr: 'on garde' } },
          alsoFits: null,
          usedInArc: true,
        },
      ],
    },
    {
      id: 'grief',
      name: { en: 'Grief + Revelation 2', fr: 'Deuil + Révélation 2' },
      subtitle: { en: 'Losing her a second time', fr: 'La perdre une deuxième fois' },
      color: '#c45a5a',
      description: {
        en: 'Once he accessed that original pool, he must say goodbye to his sister. She makes him understand it is only a goodbye until the day of their reunion. The real grief begins. Revelation 2: this information was always present unconsciously all these years. His whole life, what he was trying to do was grieve. Then we show scenes we\'ve already seen, this time highlighting the unconscious signs that were under his eyes. Certain elements in previous scenes take on meaning. And then a slight smile — proof of a form of euphoria.',
        fr: 'Une fois qu\'il a eu accès à ce bassin originel il doit dire au revoir à sa sœur. Qui lui fait comprendre que ce n\'est qu\'un au revoir en attendant le jour de leur réunion. Le véritable deuil commence. Révélation 2 : cette information a toujours été présente inconsciemment pendant toutes ces années. Toute sa vie, ce qu\'il cherchait à faire était un deuil. Puis on remontre des scènes qu\'on a déjà vues, cette fois en mettant en évidence des signes inconscients qu\'il avait sous les yeux. Certains éléments dans les scènes précédentes prennent sens. Et puis un léger sourire — preuve d\'une forme d\'euphorie.',
      },
      quote: {
        fr: 'Le véritable deuil a commencé quand j\'ai compris que la revoir serait impossible. J\'ai eu la sensation de la perdre une deuxième fois. — Euphorie, car quand on passe une grande partie de sa vie à chercher des réponses, et qu\'un jour, tout s\'éclaire enfin, tout prend enfin un SENS, cela fait une décharge d\'adrénaline et cela procure beaucoup de bien\u00a0! Je ne suis pas folle\u00a0! Mon mal-être a enfin une véritable cause car j\'ai vécu un traumatisme réel et RECONNU\u00a0!',
        en: 'The real grief began when I understood that seeing her again would be impossible. I had the sensation of losing her a second time. — Euphoria, because when you spend a large part of your life searching for answers, and one day everything finally becomes clear, everything finally makes SENSE, it gives a rush of adrenaline and it feels so good! I\'m not crazy! My suffering finally has a real cause because I lived through a real and RECOGNIZED trauma!',
      },
      quoteSource: { en: '— Anonymous testimony, womb twin survivor', fr: '— Témoignage anonyme, survivante d\'un jumeau perdu in utero' },
      tracks: [
        {
          file: 'audio/track_pianoMinimalist_producer.mp3',
          title: 'track_pianoMinimalist_producer',
          source: { en: 'Producer.ai · minimalist piano', fr: 'Producer.ai · piano minimaliste' },
          startAt: 0,
          note: {
            en: 'A soothing melody to accompany grief — minimalist enough to give space for pain, present enough to feel a comforting "better days are coming" presence.',
            fr: 'Une mélodie apaisante pour accompagner le deuil — assez minimaliste pour laisser de l\'espace à la douleur, assez présente pour sentir un réconfort « des jours meilleurs arrivent ».',
          },
          confidence: null,
          alsoFits: { en: 'Beat 3', fr: 'Beat 3' },
          usedInArc: false,
        },
        {
          file: 'audio/track_percuGroove_producer.mp3',
          title: 'track_percuGroove_producer',
          source: { en: 'Producer.ai · 3:35 · key section from 2:00', fr: 'Producer.ai · 3:35 · section clé à partir de 2:00' },
          startAt: 125,
          note: {
            en: '0:00–2:04: sounds introduced gradually from silence. From 2:05: percussive beats introduce a get-you-going groove that shifts the mood — the transition from grief-sadness to Revelation 2 and reorientation.',
            fr: '0:00–2:04 : sons introduits progressivement depuis le silence. À partir de 2:05 : des percussions introduisent un groove entraînant qui change l\'humeur — la transition du deuil-tristesse vers la Révélation 2 et la réorientation.',
          },
          confidence: { score: '5/7', level: 'mid', label: { en: 'match · 3–4/7 certainty for final', fr: 'correspondance · 3–4/7 certitude pour la version finale' } },
          alsoFits: null,
          usedInArc: true,
        },
      ],
    },
    {
      id: 'reorientation',
      name: { en: 'Reorientation', fr: 'Réorientation' },
      subtitle: { en: 'Same life, not the same person', fr: 'La même vie, pas la même personne' },
      color: '#c4b44e',
      description: {
        en: 'We pick up the film as at the beginning with apparently identical scenes. He resumes his life which appears unchanged (we see scenes again), but through small details we understand this is no longer the same person as at the beginning. The ending is open, not resolved — like Aikāne.',
        fr: 'On reprend le film comme au début avec des scènes en apparence identiques. Il reprend sa vie qui en apparence n\'a pas changée, mais à travers des petits détails on comprend que ce n\'est plus du tout la même personne qu\'au début. La fin est ouverte, non résolue — comme Aikāne.',
      },
      quote: {
        en: 'Not resolution, not healing, not closure — orientation, lightness, permission to live forward.',
        fr: 'Pas de résolution, pas de guérison, pas de clôture — une orientation, une légèreté, la permission de vivre vers l\'avant.',
      },
      quoteSource: null,
      tracks: [],
    },
  ],

  // === EMOTIONAL REGISTERS ===
  registers: [
    { name: { en: 'Body', fr: 'Corps' },       color: '#c4826a', description: { en: 'Somatic experience — claustrophobia, phantom pain, heart beating, physical recognition', fr: 'Expérience somatique — claustrophobie, douleur fantôme, battements de cœur, reconnaissance physique' } },
    { name: { en: 'Memory', fr: 'Mémoire' },    color: '#6a8ec4', description: { en: 'Cognitive layer — the two revelations, replaying past scenes with new meaning', fr: 'Couche cognitive — les deux révélations, rejouer des scènes passées avec un nouveau sens' } },
    { name: { en: 'Twin', fr: 'Jumeau' },       color: '#5aaa8a', description: { en: 'The other presence — sparse until reunion, then maximum intensity', fr: 'L\'autre présence — éparse jusqu\'aux retrouvailles, puis intensité maximale' } },
    { name: { en: 'Grief', fr: 'Deuil' },       color: '#c46a7a', description: { en: 'Active from note 0 — unnamed mourning, the grief was always there', fr: 'Actif dès la note 0 — deuil sans nom, le chagrin a toujours été là' } },
    { name: { en: 'Silence', fr: 'Silence' },    color: '#8a7a9a', description: { en: 'The gaps, the breath, moments between states; carries reorientation', fr: 'Les vides, le souffle, les moments entre les états ; porte la réorientation' } },
    { name: { en: 'Light', fr: 'Lumière' },      color: '#c4a44e', description: { en: 'The euphoria inside the grief; the healing orientation at end', fr: 'L\'euphorie à l\'intérieur du deuil ; l\'orientation vers la guérison à la fin' } },
  ],

  // === INTERACTIVE ARTIFACTS ===
  artifacts: [
    { tag: { en: 'Primary Tool', fr: 'Outil principal' },   name: 'Piano Roll — Emotional Score',  href: 'artifacts/pianoroll_concept.html',    description: { en: '6-track canvas visualizer. Time moves left-to-right, emotional registers visible simultaneously. Play/pause, scrub, zoom.', fr: 'Visualiseur 6 pistes sur canvas. Le temps défile de gauche à droite, registres émotionnels visibles simultanément. Lecture/pause, défilement, zoom.' } },
    { tag: { en: 'Visual Concept', fr: 'Concept visuel' },   name: 'Interference Patterns',         href: 'artifacts/interference_concept.html', description: { en: 'Two wave fields interfering. Separation slider moves through the emotional arc. Color shifts: union → interference → grief.', fr: 'Deux champs d\'ondes en interférence. Le curseur de séparation parcourt l\'arc émotionnel. Changements de couleur : union → interférence → deuil.' } },
    { tag: { en: 'Visual Concept', fr: 'Concept visuel' },   name: 'Oscilloscope — Heartbeat',      href: 'artifacts/oscilloscope_concept.html', description: { en: 'ECG-style waveforms with CRT phosphor persistence. Dual-channel heartbeat tied to emotional states (62–118 BPM).', fr: 'Formes d\'ondes style ECG avec persistance phosphore CRT. Battement de cœur bi-canal lié aux états émotionnels (62–118 BPM).' } },
    { tag: { en: 'Visual Concept', fr: 'Concept visuel' },   name: 'Amniotic Fluid + Grid',         href: 'artifacts/amniotic_concept.html',     description: { en: 'Metaball fluid field with distorted grid overlay. Presence slider from pure fluid to reunion. Grid = structure, fluid = unity.', fr: 'Champ fluide metaball avec grille déformée en superposition. Curseur de présence du fluide pur aux retrouvailles. Grille = structure, fluide = unité.' } },
    { tag: { en: 'Design Tool', fr: 'Outil de design' },     name: 'Direction Palette',              href: 'artifacts/direction_palette.html',    description: { en: 'Dashboard exploring 6 strategies for mapping emotional registers to visual tile proportions. Includes dimension axes and combinations.', fr: 'Tableau de bord explorant 6 stratégies de correspondance entre registres émotionnels et proportions visuelles. Axes de dimensions et combinaisons.' } },
    { tag: { en: 'Editor', fr: 'Éditeur' },                  name: 'Score Workbench',                href: 'artifacts/pianoroll_workbench.html',  description: { en: 'Interactive score editor with draw/erase/select tools, intensity adjustment, JSON export/import for composition.', fr: 'Éditeur de partition interactif avec outils dessin/gomme/sélection, ajustement d\'intensité, export/import JSON.' } },
  ],

  // === PROJECT STATUS ===
  locked: [
    { en: 'Core narrative: man discovers he had a twin', fr: 'Récit central : un homme découvre qu\'il a eu une jumelle in utero'},
    { en: 'Emotional skeleton: 6 beats, 6 registers', fr: 'Squelette émotionnel : 6 beats, 6 registres' },
    { en: 'Grief starts at 0.0 (not caused by revelation)', fr: 'Le deuil commence à 0.0 (pas causé par la révélation)' },
    { en: 'Twin track intensity peaks at 1.0 only during euphoric reunion', fr: 'L\'éphémère réunion réprésente un paroxysme émotionnel' },
    { en: 'Ending: open, not resolved', fr: 'Fin : ouverte, non résolue' },
  ],

  openThreads: [
    { status: 'needed', text: { en: 'Send the composer invitation with hub link', fr: 'Envoyer l\'invitation au compositeur avec le lien du hub' } },
    { status: 'needed', text: { en: 'Produce/find tracks for Beats 1 and 6', fr: 'Produire/trouver des pistes pour les Beats 1 et 6' } },
    { status: 'open',   text: { en: 'Write the opening scenes (BEFORE beat)', fr: 'Écrire les scènes d\'ouverture (beat AVANT)' } },
    { status: 'open',   text: { en: 'Decide the ritual moment and place it in the timeline', fr: 'Décider le moment rituel et le placer dans la timeline' } },
    { status: 'open',   text: { en: 'Choose the visual language direction', fr: 'Choisir la direction du langage visuel' } },
    { status: 'open',   text: { en: 'Calibrate beats to real timing (once rough cut exists)', fr: 'Calibrer les beats en temps réel (quand un rough cut existera)' } },
    { status: 'open',   text: { en: 'Build audio sync into the piano roll artifact', fr: 'Intégrer la synchronisation audio dans l\'artefact piano roll' } },
  ],

  questions: [
    { en: 'Will the final film <em>be</em> the piano roll, or will the piano roll be a tool that generates a different visual language?', fr: 'Le film final <em>sera-t-il</em> le piano roll, ou le piano roll sera-t-il un outil qui génère un langage visuel différent ?' },
    { en: 'Is the interference pattern a metaphor for the entire film, or just a moment?', fr: 'Le motif d\'interférence est-il une métaphore pour tout le film, ou juste un moment ?' },
    { en: 'Can the opening "before" be beautiful without being sad?', fr: 'L\'ouverture « avant » peut-elle être belle sans être triste ?' },
    { en: 'What does the twin look like visually, if never shown as a fetus or face?', fr: 'À quoi ressemble le jumeau visuellement, s\'il n\'est jamais montré comme fœtus ou visage ?' },
    { en: 'Does the film end with the man alone, or is there another presence?', fr: 'Le film se termine-t-il avec l\'homme seul, ou y a-t-il une autre présence ?' },
  ],
};
