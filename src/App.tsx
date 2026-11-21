import { useState } from 'react'

type IconName =
  | 'arrow'
  | 'code'
  | 'database'
  | 'external'
  | 'github'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'menu'
  | 'spark'
  | 'x'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    external: <><path d="M15 4h5v5" /><path d="m10 14 10-10" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>,
    github: <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.66 3.6-.4 7.38-1.77 7.38-8a6.25 6.25 0 0 0-1.67-4.34A5.8 5.8 0 0 0 19.45.7S18.1.27 15 2.36a15 15 0 0 0-8 0C3.9.27 2.55.7 2.55.7A5.8 5.8 0 0 0 1.39 3.1 6.25 6.25 0 0 0-.28 7.44c0 6.22 3.78 7.6 7.38 8A3.7 3.7 0 0 0 6 18.1V22" transform="translate(1.5 .5) scale(.9)" />,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 17h16" /></>,
    spark: <><path d="m12 3-1.4 4.1a5.5 5.5 0 0 1-3.5 3.5L3 12l4.1 1.4a5.5 5.5 0 0 1 3.5 3.5L12 21l1.4-4.1a5.5 5.5 0 0 1 3.5-3.5L21 12l-4.1-1.4a5.5 5.5 0 0 1-3.5-3.5L12 3Z" /></>,
    x: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    number: '01',
    label: 'Geospatial intelligence',
    title: 'IGNIS',
    subtitle: 'Real-time AI fire surveillance',
    description:
      'An end-to-end platform that turns NASA FIRMS satellite telemetry into actionable, sub-second fire alerts. Built for Smart India Hackathon with a production-grade async backend and spatially optimized data layer.',
    metrics: [
      ['99.94%', 'model accuracy'],
      ['<15ms', 'spatial queries'],
      ['180K+', 'observations'],
    ],
    highlights: [
      'Architected an async FastAPI backend with SQLAlchemy and PostgreSQL/PostGIS, ingesting NASA FIRMS data on a 10-minute schedule via Celery and APScheduler.',
      'Trained a soft-voting ensemble using Random Forest, XGBoost, and LightGBM—achieving 98.94% macro F1 and 100% industrial-fire recall.',
      'Optimized PostGIS GiST spatial queries with ST_DWithin and added WebSocket streaming for sub-500ms alerts.',
      'Implemented OAuth2/JWT authentication and Docker-based deployment.',
    ],
    tags: ['FastAPI', 'PostGIS', 'XGBoost', 'WebSockets', 'Docker'],
    github: 'https://github.com/suraj-codes-24/NASA-FIRMS',
    live: 'https://frontend-five-lyart-7gyyyiyia4.vercel.app',
    tone: 'lime',
  },
  {
    number: '02',
    label: 'Private AI research',
    title: 'ResearchNode',
    subtitle: 'Offline GraphRAG reasoning engine',
    description:
      'A privacy-first scientific research engine combining semantic retrieval with knowledge-graph traversal. Multi-agent workflows discover literature, surface contradictions, and suggest experiments—fully offline.',
    metrics: [
      ['2-way', 'hybrid retrieval'],
      ['100%', 'local inference'],
      ['0', 'external APIs'],
    ],
    highlights: [
      'Architected hybrid search combining Qdrant vector retrieval with Neo4j knowledge-graph traversal.',
      'Engineered multi-agent workflows for literature discovery, cross-paper contradiction detection, and experiment suggestions.',
      'Implemented section-aware scientific chunking with Pydantic-based structured extraction.',
      'Built an interactive Cytoscape.js graph visualization with zero third-party API dependencies.',
    ],
    tags: ['Neo4j', 'Qdrant', 'Ollama', 'LangChain', 'React'],
    github: 'https://github.com/suraj-codes-24/Research-Node',
    tone: 'blue',
  },
  {
    number: '03',
    label: 'AI interview platform',
    title: 'ZenPrep',
    subtitle: 'Multimodal interview intelligence',
    description:
      'A production AI interview platform delivering real-time feedback through voice analysis, facial-expression tracking, and NLP evaluation—with live coding, technical interviews, and group discussions in one experience.',
    metrics: [
      ['3-way', 'multimodal analysis'],
      ['Live', 'in production'],
      ['Real-time', 'AI feedback'],
    ],
    highlights: [
      'Engineered a multimodal assessment pipeline evaluating voice cadence, facial expressions, and semantic response quality.',
      'Implemented synchronized code evaluation and automated technical-questioning workflows.',
      'Built simulated AI group-discussion rooms with dynamic moderation and participation scoring.',
      'Deployed the complete product to production at zenprep.xyz.',
    ],
    tags: ['Voice AI', 'Vision AI', 'NLP', 'WebSockets', 'Live Code'],
    github: 'https://github.com/suraj-codes-24/zen-prep',
    live: 'https://zenprep.xyz',
    tone: 'violet',
  },
  {
    number: '04',
    label: 'Spatial machine learning',
    title: 'Geo-Fencing',
    subtitle: 'Spatial proximity and risk engine',
    description:
      'A high-precision spatial boundary classifier for automated hazard-zone polygonization, real-time geometric containment checks, and risk indexing across streaming geospatial telemetry.',
    metrics: [
      ['<1ms', 'containment query'],
      ['Real-time', 'event evaluation'],
      ['GIS', 'risk modeling'],
    ],
    highlights: [
      'Developed coordinate-space containment algorithms and automated spatial risk-polygon generation.',
      'Benchmarked sub-millisecond point-in-polygon queries for streaming event evaluation.',
    ],
    tags: ['Python', 'GeoPandas', 'Shapely', 'PostGIS', 'Scikit-learn'],
    github: 'https://github.com/suraj-codes-24/geo-fencing-model',
    tone: 'amber',
  },
]

const skillGroups = [
  {
    icon: 'code' as IconName,
    title: 'Backend systems',
    copy: 'Async services, secure APIs, real-time streams, and production-ready architecture.',
    skills: 'Python · FastAPI · REST · WebSockets · Celery · OAuth2',
  },
  {
    icon: 'database' as IconName,
    title: 'Data infrastructure',
    copy: 'Relational, spatial, vector, and graph systems designed for fast, reliable retrieval.',
    skills: 'PostgreSQL · PostGIS · Redis · Neo4j · Qdrant',
  },
  {
    icon: 'spark' as IconName,
    title: 'Applied AI',
    copy: 'Practical ML pipelines and retrieval systems—from training through deployment.',
    skills: 'XGBoost · LightGBM · Scikit-learn · RAG · NLP',
  },
]

const technicalIndex = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'C', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    title: 'Python backend',
    items: ['FastAPI', 'REST APIs', 'WebSockets', 'SQLAlchemy', 'GeoAlchemy2', 'Celery', 'Pydantic', 'JWT / OAuth2'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Neo4j', 'Qdrant', 'Redis'],
  },
  {
    title: 'AI, ML & GenAI',
    items: ['XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'RAG / GraphRAG', 'LangChain', 'Ollama', 'Groq'],
  },
  {
    title: 'Web & DevOps',
    items: ['React', 'Leaflet', 'HTML / CSS', 'Docker', 'Git / GitHub', 'VS Code'],
  },
  {
    title: 'DSA & CS core',
    items: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming', 'Binary Search', 'Hashing', 'Heaps', 'Segment Tree', 'DBMS', 'OOP'],
  },
]

const dsaTopics = [
  'Arrays',
  'Trees',
  'Graphs',
  'Dynamic Programming',
  'Binary Search',
  'Sliding Window',
  'Greedy',
  'Stack / Queue',
  'Hashing',
  'Backtracking',
  'Linked Lists',
  'Heap',
]

const journey = [
  {
    date: '2024 — 2028',
    title: 'B.Tech — Computer Science & Engineering',
    place: 'Pranveer Singh Institute of Technology (PSIT), Kanpur',
    detail: 'CGPA: 8.59/10 · Coursework: DSA, DBMS, OOP, Problem Solving',
  },
  {
    date: '2026',
    title: 'Smart India Hackathon 2026',
    place: 'Government of India — National Level',
    detail: 'Built IGNIS, a real-time geospatial fire-surveillance platform. Led backend architecture and ML pipeline development.',
  },
  {
    date: '2025 — 2026',
    title: 'Cloud, Machine Learning & Python',
    place: 'AWS Cloud Solutions · Infosys Springboard',
    detail: 'AWS Cloud Solutions (Coursera) · Machine Learning, EDA & Python Part 1–2 (Infosys Springboard)',
  },
  {
    date: '2022 — 2023',
    title: 'Class XII — CBSE',
    place: 'RPS School, Biharsharif, Bihar',
    detail: 'Scored 81.4%',
  },
  {
    date: '2020 — 2021',
    title: 'Class X — CBSE',
    place: 'Divine Light Public School, Biharsharif, Bihar',
    detail: 'Scored 93.6%',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Suraj Singh, home">
            S<span>/</span>S
          </a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#expertise" onClick={closeMenu}>Expertise</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <Icon name="arrow" size={16} /></a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <Icon name={menuOpen ? 'x' : 'menu'} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow fade-up"><span className="status-dot" /> Available for internships</div>
            <h1 className="fade-up delay-one">I engineer systems that turn <em>complexity</em> into impact.</h1>
            <p className="hero-lede fade-up delay-two">
              Python backend and AI/ML engineer building scalable APIs, intelligent data pipelines, and real-time systems.
            </p>
            <div className="hero-actions fade-up delay-three">
              <a href="#work" className="button button-primary">Explore my work <Icon name="arrow" size={18} /></a>
              <a href="./resume-3-11.pdf" target="_blank" rel="noreferrer" className="button button-secondary">Resume <Icon name="external" size={16} /></a>
              <a href="mailto:suraj14mk@gmail.com" className="text-link">suraj14mk@gmail.com</a>
            </div>
          </div>

          <aside className="hero-panel fade-up delay-two" aria-label="Profile highlights">
            <div className="panel-top">
              <span>PROFILE / 2026</span>
              <span className="panel-mark"><Icon name="spark" size={17} /></span>
            </div>
            <div className="panel-core">
              <p className="mono-label">Current focus</p>
              <h2>Backend × Applied AI</h2>
              <p>Designing systems where robust infrastructure meets useful intelligence.</p>
            </div>
            <div className="panel-stats">
              <div><strong>800+</strong><span>LeetCode solved</span></div>
              <div><strong>8.59</strong><span>Current CGPA</span></div>
              <div><strong>1600+</strong><span>Contest rating</span></div>
            </div>
            <div className="code-line"><span>01</span> systems.build(<b>scale</b>, <b>clarity</b>)</div>
          </aside>

          <div className="scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="proof-strip" aria-label="Key capabilities">
          <div className="container proof-inner">
            <span>FastAPI</span><i />
            <span>PostGIS</span><i />
            <span>Machine Learning</span><i />
            <span>GraphRAG</span><i />
            <span>Real-time systems</span>
          </div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading">
            <div>
              <p className="kicker">Selected work</p>
              <h2>Built to work.<br />Built to matter.</h2>
            </div>
            <p>Flagship projects that combine thoughtful architecture, measurable performance, and real-world purpose.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project project-${project.tone}`} key={project.title}>
                <div className="project-visual">
                  <div className="visual-grid" />
                  <span className="project-number">{project.number}</span>
                  {project.title === 'IGNIS' ? (
                    <div className="radar">
                      <i className="radar-ring ring-one" /><i className="radar-ring ring-two" /><i className="radar-ring ring-three" />
                      <span className="radar-core" /><span className="ping ping-one" /><span className="ping ping-two" />
                    </div>
                  ) : project.title === 'ResearchNode' ? (
                    <div className="network" aria-hidden="true">
                      <svg viewBox="0 0 400 280">
                        <g className="network-lines"><path d="M70 165 148 95l83 42 91-74M148 95l12 119 71-77 72 70M160 214l143-7M231 137l91-74" /></g>
                        <g className="network-dots"><circle cx="70" cy="165" r="8" /><circle cx="148" cy="95" r="12" /><circle cx="231" cy="137" r="9" /><circle cx="322" cy="63" r="7" /><circle cx="160" cy="214" r="7" /><circle cx="303" cy="207" r="11" /></g>
                      </svg>
                    </div>
                  ) : project.title === 'ZenPrep' ? (
                    <div className="zen-console" aria-hidden="true">
                      <div className="zen-header"><i /><span>LIVE ASSESSMENT</span><b>02:48</b></div>
                      <div className="zen-person"><span><Icon name="spark" size={26} /></span><i /><i /><i /></div>
                      <div className="zen-wave">
                        {[18, 34, 23, 47, 64, 38, 71, 51, 30, 58, 42, 68, 31, 20, 45, 29].map((height, index) => (
                          <i key={index} style={{ height }} />
                        ))}
                      </div>
                      <div className="zen-scores"><span>CLARITY <b>92</b></span><span>CONFIDENCE <b>88</b></span></div>
                    </div>
                  ) : (
                    <div className="geo-map" aria-hidden="true">
                      <svg viewBox="0 0 420 310">
                        <path className="contour contour-one" d="M40 206c35-58 55-136 139-151 66-12 79 52 141 59 53 5 72 36 52 83-25 57-84 69-142 65-73-5-148 21-190-56Z" />
                        <path className="contour contour-two" d="M94 196c22-41 30-92 92-104 47-9 61 35 107 40 38 4 53 26 39 60-18 41-62 49-105 46-53-4-103 12-133-42Z" />
                        <path className="contour contour-three" d="M150 181c12-23 17-53 51-59 27-5 35 20 61 23 22 2 31 15 22 34-10 24-35 29-59 27-30-2-58 7-75-25Z" />
                        <circle cx="218" cy="166" r="7" /><path className="geo-cross" d="M218 137v58M189 166h58" />
                      </svg>
                      <div className="geo-readout"><span>LAT 26.4499</span><span>LNG 80.3319</span><b>ZONE / SECURE</b></div>
                    </div>
                  )}
                  <div className="visual-caption"><span>System online</span><span>0{project.number} / ARCHIVE</span></div>
                </div>
                <div className="project-content">
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="metric-row">
                    {project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
                  </div>
                  <div className="engineering-details">
                    <p>Engineering highlights</p>
                    <ul>
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Icon name="github" size={18} /> Source code</a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer"><Icon name="external" size={17} /> Live demo</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a className="more-work" href="https://github.com/suraj-codes-24" target="_blank" rel="noreferrer">
            <span>More work on GitHub</span><Icon name="arrow" size={18} />
          </a>
        </section>

        <section className="expertise-section" id="expertise">
          <div className="container">
            <div className="section-heading light">
              <div>
                <p className="kicker">Expertise</p>
                <h2>What I bring<br />to the table.</h2>
              </div>
              <p>A focused technical toolkit for taking ambitious products from an idea to a dependable system.</p>
            </div>
            <div className="expertise-grid">
              {skillGroups.map((group, index) => (
                <article className="expertise-card" key={group.title}>
                  <div className="expertise-top"><span>0{index + 1}</span><Icon name={group.icon} size={24} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.copy}</p>
                  <div className="skill-line">{group.skills}</div>
                </article>
              ))}
            </div>
            <div className="technical-index">
              <div className="technical-index-heading">
                <span>Complete technical index</span>
                <p>The full toolkit I use across backend engineering, machine learning, data infrastructure, and problem solving.</p>
              </div>
              <div className="technical-groups">
                {technicalIndex.map((group, index) => (
                  <div className="technical-group" key={group.title}>
                    <div className="technical-group-title"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                    <div className="technical-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section container" id="about">
          <div className="about-index">03</div>
          <div className="about-copy">
            <p className="kicker">About me</p>
            <h2>Curious by nature.<br /><em>Rigorous</em> by practice.</h2>
          </div>
          <div className="about-body">
            <p className="about-lead">
              I’m Suraj, a Computer Science undergraduate at PSIT Kanpur who enjoys turning difficult technical problems into elegant, reliable products.
            </p>
            <p>
              My work lives at the intersection of backend engineering and applied AI. I care about performance, clear architecture, and the discipline to measure what I build—not just make it run.
            </p>
            <p>
              At Smart India Hackathon 2026, I built IGNIS to process NASA FIRMS telemetry, run ensemble inference, and deliver sub-500ms alerts. I also built ResearchNode to make private, context-aware scientific analysis possible with Qdrant, Neo4j, and local LLMs.
            </p>
            <p>
              Away from product work, I consistently sharpen my fundamentals through data structures and algorithms—more than 800 LeetCode problems and counting.
            </p>
          </div>
        </section>

        <section className="dsa-section">
          <div className="container dsa-inner">
            <div className="dsa-score">
              <span className="dsa-index">04 / PROBLEM SOLVING</span>
              <strong>800<span>+</span></strong>
              <p>LeetCode problems solved</p>
            </div>
            <div className="dsa-content">
              <p className="kicker">Competitive programming</p>
              <h2>Fundamentals that<br />hold up under pressure.</h2>
              <p>Consistent practice across algorithms, data structures, and mathematical optimization—with a 1600+ contest rating.</p>
              <div className="dsa-links">
                <a href="https://leetcode.com/suraj-codes-24" target="_blank" rel="noreferrer"><Icon name="code" size={18} /> LeetCode profile</a>
                <a href="https://github.com/suraj-codes-24/leetcode_solutions" target="_blank" rel="noreferrer"><Icon name="github" size={18} /> Solutions repository</a>
              </div>
              <div className="dsa-topics">{dsaTopics.map((topic) => <span key={topic}>{topic}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="journey-section container" id="journey">
          <div className="section-heading">
            <div>
              <p className="kicker">Education & credentials</p>
              <h2>The journey<br />so far.</h2>
            </div>
            <p>Academic foundations, national-level building experience, and continued learning across cloud and machine learning.</p>
          </div>
          <div className="journey-list">
            {journey.map((item, index) => (
              <article className="journey-item" key={item.title}>
                <span className="journey-number">0{index + 1}</span>
                <time>{item.date}</time>
                <div><h3>{item.title}</h3><p>{item.place}</p></div>
                <p className="journey-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="kicker">Start a conversation</p>
            <h2>Have an ambitious idea?<br /><em>Let’s build it right.</em></h2>
            <p>I’m currently open to remote internships and collaborative projects in backend engineering, software development, and applied AI.</p>
            <a className="contact-button" href="mailto:suraj14mk@gmail.com">
              <span>Get in touch</span><Icon name="arrow" size={22} />
            </a>
            <div className="social-row">
              <a href="https://github.com/suraj-codes-24" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
              <a href="https://www.linkedin.com/in/suraj-singh-073a22378" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
              <a href="https://leetcode.com/suraj-codes-24" target="_blank" rel="noreferrer"><Icon name="code" /> LeetCode</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a href="#top" className="brand">S<span>/</span>S</a>
          <p>Designed & engineered by Suraj Singh</p>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}
