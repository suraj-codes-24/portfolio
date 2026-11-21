import { useEffect, useState } from 'react'

type IconName = 'arrow' | 'download' | 'code' | 'database' | 'spark' | 'github' | 'pin'
function Icon({ name }: { name: IconName }) {
  const paths = {
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
    code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18',
    database: 'M4 5c0-4 16-4 16 0s-16 4-16 0v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0',
    spark: 'm12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6Z',
    github: 'M9 21v-4c-5 1-5-3-7-3m13 7v-4c0-1-.5-2-1-2 5-.5 7-3 7-6 0-2-1-3-2-4V2l-4 2H9L5 2v3C4 6 3 7 3 9c0 3 2 5.5 7 6-.5 0-1 1-1 2',
    pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM12 7v6m-3-3h6',
  }
  return <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

const profile = {
  github: 'https://github.com/suraj-codes-24',
  email: 'suraj14mk@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suraj-singh-073a22378',
  leetcode: 'https://leetcode.com/u/suraj-codes-24/',
  codeforces: 'https://codeforces.com/profile/suraj-codes-24',
  solved: 800, rating: 1600, cgpa: 8.59, graduation: 2028,
}
const projects = [
  {
    name: 'IGNIS', category: 'Geospatial intelligence', subtitle: 'From satellite signals to actionable fire alerts.',
    problem: 'Satellite fire telemetry is difficult to process and act on in real time.',
    role: 'Implemented the async backend, spatial data layer, ML ensemble, and WebSocket alert pipeline.',
    metrics: [['99.94%', 'model accuracy'], ['<15ms', 'spatial queries'], ['<500ms', 'alert latency']],
    tags: ['FastAPI', 'PostGIS', 'Celery', 'XGBoost'],
    stages: ['NASA FIRMS', 'Celery ingestion', 'FastAPI + ML ensemble', 'PostgreSQL / PostGIS', 'WebSocket alerts', 'React + Leaflet'],
    detail: 'Processes 180K+ observations. A soft-voting Random Forest, XGBoost, and LightGBM ensemble reports 98.94% macro F1. GiST indexes and ST_DWithin support spatial queries; OAuth2/JWT secures the API.',
    repo: 'NASA-FIRMS', live: 'https://frontend-five-lyart-7gyyyiyia4.vercel.app', color: '#c8ff4d',
  },
  {
    name: 'ResearchNode', category: 'Private AI research', subtitle: 'Research insights. Without sending data away.',
    problem: 'Scientific literature is fragmented, and cloud-based analysis can compromise privacy.',
    role: 'Built hybrid retrieval, structured extraction, and multi-agent workflows for local research.',
    metrics: [['Hybrid', 'graph + vector'], ['Local', 'LLM inference'], ['0', 'external AI APIs']],
    tags: ['Qdrant', 'Neo4j', 'Ollama', 'LangChain'],
    stages: ['Scientific papers', 'Chunking + extraction', 'Qdrant + Neo4j', 'Multi-agent reasoning', 'Local Ollama model', 'Research insights'],
    detail: 'Section-aware chunking and Pydantic extraction feed vector search and knowledge-graph traversal. Agents support literature discovery, contradiction detection, and experiment suggestions. Cytoscape.js visualizes relationships.',
    repo: 'Research-Node', live: '', color: '#a8c7ff',
  },
  {
    name: 'ZenPrep', category: 'AI interview platform', subtitle: 'A practice room for your next opportunity.',
    problem: 'Interview preparation rarely provides feedback across speech, expression, and answer quality.',
    role: 'Implemented multimodal assessment, live coding workflows, and AI group discussions.',
    metrics: [['3', 'analysis modalities'], ['Live', 'coding workflows'], ['AI', 'interview feedback']],
    tags: ['Voice AI', 'Computer vision', 'NLP', 'WebSockets'],
    stages: ['Interview session', 'Voice + vision + text', 'Assessment pipeline', 'Structured feedback'],
    detail: 'Combines voice cadence, facial-expression analysis, and semantic evaluation. Technical questioning and synchronized code evaluation complement simulated group discussions with moderation and participation scoring.',
    repo: 'zen-prep', live: 'https://zenprep.xyz', color: '#d0b9f5',
  },
]
const expertise = [
  ['Primary', 'The tools I build with most.', 'Python, FastAPI, PostgreSQL, PostGIS, SQLAlchemy, REST APIs'],
  ['AI & data', 'Models connected to useful systems.', 'Scikit-learn, XGBoost, LightGBM, Pandas, NumPy, RAG'],
  ['Infrastructure', 'The plumbing behind the product.', 'Docker, Redis, Celery, WebSockets, Git'],
  ['Familiar with', 'A supporting, evolving toolkit.', 'Neo4j, Qdrant, LangChain, React, Leaflet, C++'],
]
const reasons = [
  { icon: 'code' as IconName, title: 'Beyond the notebook.', copy: 'Authentication, async services, databases, and real-time communication—not just model training.' },
  { icon: 'database' as IconName, title: 'Measured, not assumed.', copy: 'Accuracy, query latency, and dataset size inform the engineering decisions behind my projects.' },
  { icon: 'spark' as IconName, title: 'Fundamentals first.', copy: `${profile.solved}+ LeetCode problems and a ${profile.rating}+ LeetCode contest rating, backed by DSA, DBMS, and OOP.` },
]

const pdfUrl = `${import.meta.env.BASE_URL}suraj-singh-resume.pdf`
const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-700 focus-visible:ring-offset-4'
const button = `inline-flex min-h-12 items-center justify-center gap-3 px-5 text-sm font-bold transition-all duration-200 hover:shadow-md motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none ${focus}`
const wrap = 'mx-auto w-[calc(100%-40px)] max-w-[1180px] md:w-[calc(100%-80px)]'
const mono = 'font-mono text-xs uppercase tracking-[0.15em]'

function ProfileLinks({ compact = false }: { compact?: boolean }) {
  const links = compact
    ? [['LeetCode', profile.leetcode], ['Codeforces', profile.codeforces], ['LinkedIn', profile.linkedin]]
    : [['GitHub', profile.github], ['LeetCode', profile.leetcode], ['Codeforces', profile.codeforces], ['LinkedIn', profile.linkedin]]
  return <nav aria-label="Professional and coding profiles" className="flex flex-wrap gap-x-6 gap-y-1">
    {links.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={`${name} profile (opens in a new tab)`} className={`inline-flex min-h-11 items-center gap-2 text-sm font-semibold decoration-[#994b35] underline-offset-4 hover:underline ${focus}`}>{name}<span aria-hidden="true">↗</span></a>)}
  </nav>
}

function Resume({ dark = false }: { dark?: boolean }) {
  return <a href={pdfUrl} target="_blank" rel="noreferrer" className={`${button} rounded-sm ${dark ? 'bg-[#f0d5bd] text-[#392b24] hover:bg-[#f8e6d6]' : 'bg-[#994b35] text-white hover:bg-[#7c3928]'}`} aria-label="Open résumé PDF in a new tab">Download résumé <Icon name="download" /></a>
}
function SectionTitle({ number, label, title }: { number: string; label: string; title: string }) {
  return <div className="mb-10"><p className={`${mono} mb-5 text-[#994b35]`}>{number} / {label}</p><h2 className="font-serif text-4xl font-medium tracking-[-0.035em] md:text-5xl">{title}</h2></div>
}
function ProjectVisual({ project }: { project: typeof projects[number] }) {
  return (
    <figure className="my-6 overflow-hidden rounded-sm border border-[#493329]/15 bg-[#3c2d25] p-3 shadow-[0_12px_30px_#49332918]">
      <ProjectIllustration project={project} />
    </figure>
  )
}
function ProjectIllustration({ project }: { project: typeof projects[number] }) {
  if (project.name === 'ZenPrep') {
    return <div className="relative mx-auto my-7 w-full max-w-80 rounded-lg border border-[#bfa3ed]/40 bg-[#171121] shadow-[0_20px_60px_#09060e]" role="img" aria-label="ZenPrep illustration: interview practice console with voice waveform and multimodal feedback">
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 font-mono text-xs text-[#e0cef8]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c4a2ff]" />ZENPREP</span><span>PRACTICE ROOM</span></div>
      <div className="relative flex h-32 items-center justify-center overflow-hidden">
        <div className="absolute h-28 w-28 rounded-full border border-[#c4a2ff]/15" /><div className="absolute h-20 w-20 rounded-full border border-[#c4a2ff]/30" />
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c4a2ff]/60 bg-[#352347] text-[#eadcff]"><svg className="h-7 w-7 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="16" cy="11" r="5" /><path d="M6 28c0-12 20-12 20 0" /></svg></div>
        <span className="absolute bottom-1 font-mono text-xs text-slate-300">Your space to get better.</span>
      </div>
      <div className="flex h-20 items-center justify-center gap-1.5 px-5" aria-hidden="true">{[10, 20, 14, 29, 40, 24, 48, 32, 20, 38, 28, 44, 21, 13, 30, 18, 10].map((height, i) => <span key={i} className="w-1.5 rounded-full bg-gradient-to-t from-[#7853a8] to-[#e7d4ff]" style={{ height }} />)}</div>
      <div className="grid grid-cols-3 gap-2 border-t border-white/15 px-4 py-4 text-center font-mono text-xs text-[#e0cef8]">{['VOICE', 'VISION', 'LANGUAGE'].map(t => <span key={t}>{t}</span>)}</div>
    </div>
  }
  if (project.name === 'ResearchNode') {
    return <div className="relative my-5 w-full" role="img" aria-label="ResearchNode illustration: scientific papers linked through a local knowledge graph">
      <svg className="h-60 w-full shrink-0" viewBox="0 0 360 240" fill="none" aria-hidden="true">
        <defs><radialGradient id="graph-glow"><stop stopColor="#4370ab" stopOpacity=".3" /><stop offset="1" stopColor="#4370ab" stopOpacity="0" /></radialGradient></defs>
        <ellipse cx="180" cy="120" rx="170" ry="110" fill="url(#graph-glow)" />
        <g stroke="#81aee9" strokeOpacity=".5"><path d="m44 105 77-60 65 71 80-69 48 84-67 69-61-84-75 87-67-98Zm77-60-10 158 136-3 19-153M44 105l142 11 128 15M121 45l145 2" /><path strokeDasharray="3 5" d="m186 116-6-99m6 99-4 112M44 105 16 163m298-32 28-48" /></g>
        {[[44, 105, 10], [121, 45, 13], [266, 47, 10], [314, 131, 12], [247, 200, 13], [111, 203, 9]].map(([x, y, r], i) => <g key={i}><circle cx={x} cy={y} r={r + 6} fill="#172b43" stroke="#6d98d4" strokeOpacity=".35" /><circle cx={x} cy={y} r={r} fill="#9abff0" /><path d={`M${x - 3} ${y - 3}h6m-6 3h6m-6 3h4`} stroke="#233e65" strokeWidth="1.3" /></g>)}
        <circle cx="186" cy="116" r="27" fill="#152d49" stroke="#9dc4ff" /><circle cx="186" cy="116" r="20" stroke="#9dc4ff" strokeOpacity=".4" /><path d="m176 116 7 7 13-14" stroke="#c5dcff" strokeWidth="2" />
      </svg>
      <div className="flex justify-center gap-3 font-mono text-xs text-[#c2d8f8]"><span className="rounded-full border border-[#81aee9]/35 px-3 py-1">Vector search</span><span className="rounded-full border border-[#81aee9]/35 px-3 py-1">Knowledge graph</span></div>
    </div>
  }
  return <div className="relative my-5 w-full" role="img" aria-label="IGNIS illustration: satellite fire detection radar with geospatial hotspots">
    <svg className="h-60 w-full shrink-0" viewBox="0 0 360 240" fill="none" aria-hidden="true">
      <defs><radialGradient id="radar-glow"><stop stopColor="#c8ff4d" stopOpacity=".15" /><stop offset="1" stopColor="#c8ff4d" stopOpacity="0" /></radialGradient><linearGradient id="radar-sweep" x1="180" y1="120" x2="260" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#c8ff4d" stopOpacity=".03" /><stop offset="1" stopColor="#c8ff4d" stopOpacity=".35" /></linearGradient></defs>
      <circle cx="180" cy="120" r="110" fill="url(#radar-glow)" />
      <g stroke="#c8ff4d" strokeOpacity=".22">{[27, 54, 81, 108].map(r => <circle key={r} cx="180" cy="120" r={r} />)}<path d="M61 120h238M180 2v236m-84-202 168 168M96 204 264 36" /></g>
      <path d="m180 120 76-76a108 108 0 0 1 31 63Z" fill="url(#radar-sweep)" /><path d="m180 120 76-76" stroke="#d3ff70" />
      <path d="m143 40 17 24-8 24 23 12-11 26 18 18 1 36 19 23 13-34 22-19-10-29 12-15-23-29-6-24-26-7-16-13Z" stroke="#b1d873" strokeOpacity=".5" fill="#85ad38" fillOpacity=".06" />
      {[[152, 88], [212, 145], [187, 166], [231, 95]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="9" stroke="#c8ff4d" strokeOpacity=".4" /><circle cx={x} cy={y} r="3" fill="#d3ff70" /></g>)}
      <circle cx="180" cy="120" r="3" fill="#e0ff96" />
    </svg>
    <div className="flex justify-center gap-5 font-mono text-xs text-[#d1e8ac]"><span>NASA FIRMS</span><span>→</span><span>DETECT · CLASSIFY · ALERT</span></div>
  </div>
}
function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const featured = index === 0
  return <article id={`project-${project.repo.toLowerCase()}`} className={`flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-sm border border-[#493329]/20 bg-[#fffaf3] transition-shadow duration-300 hover:shadow-[0_16px_40px_#49332912] motion-reduce:transition-none ${featured ? 'md:col-span-2' : ''}`}>
    <div className="flex flex-1 flex-col">
      <div className={`relative overflow-hidden p-5 text-[#392b24] md:p-7 ${index === 1 ? 'bg-[#f4eee4]' : 'bg-[#eee0cf]'}`}>
        <div className={`${mono} flex flex-wrap items-center justify-between gap-3 text-slate-600`}><span>0{index + 1} / {project.category}</span>{featured ? <span className="rounded-full border border-[#994b35]/30 bg-[#fffaf3] px-3 py-2 text-[#994b35]">Flagship project</span> : <span aria-hidden="true">↗</span>}</div>
        <ProjectVisual project={project} />
        <div className={featured ? 'grid gap-4 md:grid-cols-2 md:items-end' : ''}><div><p className={`${mono} mb-3 text-[#994b35]`}>{featured ? 'Satellite → signal' : project.name === 'ResearchNode' ? 'Connect the dots' : 'Practice with perspective'}</p><h3 className={`break-words font-serif font-medium tracking-[-0.035em] ${featured ? 'text-5xl lg:text-6xl' : 'text-4xl'}`}>{project.name}</h3></div><p className="mt-4 max-w-lg text-base leading-7 text-slate-600">{project.subtitle}</p></div>
      </div>
      <div className="min-w-0 flex-1 p-7 md:p-9">
        <div className={`gap-8 ${featured ? 'grid md:grid-cols-2' : 'space-y-4'} text-sm leading-7`}><p><strong className="mb-2 block text-xs uppercase tracking-wider text-[#994b35]">The problem</strong><span className="text-slate-600">{project.problem}</span></p><p><strong className="mb-2 block text-xs uppercase tracking-wider text-[#994b35]">My contribution</strong><span className="text-slate-600">{project.role}</span></p></div>
        <div className="my-6 grid grid-cols-3 gap-3 border-y border-black/15 py-5">{project.metrics.map(([value, label]) => <div key={label}><p className={`font-mono tracking-tight ${featured ? 'text-2xl md:text-4xl' : 'text-xl lg:text-2xl'}`}>{value}</p><p className="mt-2 text-xs text-slate-600">{label}</p></div>)}</div>
        <div className="mb-5 flex flex-wrap gap-2">{project.tags.map(t => <span key={t} className="rounded-sm bg-[#efe4d6] px-2.5 py-1 font-mono text-xs">{t}</span>)}</div>
        <div className="flex flex-wrap gap-6 text-sm font-bold"><a className={`inline-flex min-h-11 items-center gap-2 ${focus}`} href={`${profile.github}/${project.repo}`} target="_blank" rel="noreferrer"><Icon name="github" /> Source code ↗</a>{project.live && <a className={`inline-flex min-h-11 items-center gap-2 ${focus}`} href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}</div>
      </div>
    </div>
    <details className="group border-t border-black/15">
      <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 bg-[#eee0cf]/60 px-7 text-sm font-bold text-[#87412f] transition-colors hover:bg-[#ead0b9] motion-reduce:transition-none md:px-9 ${focus}`}>{featured ? 'Explore IGNIS architecture & benchmarks' : 'Explore technical details & architecture'}<span className="text-xl transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span></summary>
      <div className="border-t border-black/10 p-7 md:p-9"><ol aria-label={`${project.name} architecture flow`} className={`grid gap-3 ${featured ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>{project.stages.map((stage, i) => <li key={stage} className="flex min-h-14 items-center gap-3 border border-black/15 bg-[#f5eddf] px-4 text-sm"><span className="font-mono text-xs text-slate-600">0{i + 1}</span>{stage}{i < project.stages.length - 1 && <span className="ml-auto" aria-hidden="true">→</span>}</li>)}</ol><p className="mt-6 max-w-4xl text-sm leading-7 text-slate-600">{project.detail}</p>
        {featured && <aside className="mt-6 border-l-2 border-[#994b35] bg-[#f5eddf] p-5"><h4 className="text-sm font-bold">Benchmark context</h4><p className="mt-2 text-sm leading-7 text-slate-600">Reported dataset: 180K+ observations. Results are self-reported. Hardware, evaluation split, test load, and latency percentiles have not been documented here; these figures are not a production SLA.</p><a href={`${profile.github}/${project.repo}`} target="_blank" rel="noreferrer" className={`mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4 ${focus}`}>Inspect the implementation ↗</a></aside>}
      </div>
    </details>
  </article>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <div className="overflow-x-hidden bg-[#f8f1e7] font-sans text-[#392b24]">
    <header className="sticky top-0 z-30 border-b border-[#493329]/15 bg-[#f8f1e7]/95 backdrop-blur-xl">
      <nav aria-label="Main navigation" className={`${wrap} flex min-h-20 flex-wrap items-center justify-between gap-4 py-3`}>
        <a href="#top" className={`flex min-h-11 items-center gap-3 ${focus}`} aria-label="Suraj Singh, home"><span className="font-mono text-xl font-medium tracking-[-0.12em]">S<span className="text-[#994b35]">/</span>S</span><span className="hidden text-sm font-semibold sm:block">Suraj Singh<span className="text-[#994b35]">.</span></span></a>
        <button className={`${button} border border-black/20 lg:hidden`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-links">{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <div id="main-links" className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-2 pb-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-7 lg:pb-0`}>
          {['Work', 'Expertise', 'Experience', 'About'].map(item => <a key={item} href={`#${item.toLowerCase()}`} aria-current={activeSection === item.toLowerCase() ? 'location' : undefined} onClick={() => { setMenuOpen(false); setActiveSection(item.toLowerCase()) }} className={`relative flex min-h-11 items-center text-sm font-semibold transition-colors hover:text-[#994b35] motion-reduce:transition-none ${activeSection === item.toLowerCase() ? 'text-[#994b35] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#994b35]' : ''} ${focus}`}>{item}</a>)}
          <a className={`flex min-h-11 items-center gap-2 text-sm font-semibold ${focus}`} href={pdfUrl} target="_blank" rel="noreferrer">Résumé <Icon name="download" /></a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={`${button} border border-black/30`}>Contact <Icon name="arrow" /></a>
        </div>
      </nav>
    </header>
    <main id="top" className="[&_section[id]]:scroll-mt-28">
      <section className={`${wrap} grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.35fr_0.8fr] lg:gap-16`}>
        <div>
          <p className={`${mono} mb-7 flex items-center gap-3 text-[#994b35]`}><span className="h-2 w-2 rounded-full bg-[#994b35]" /> Open to Backend / SDE / AI internships</p>
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-medium leading-[1.08] tracking-[-0.045em]">Python Backend<br />& <em className="font-medium text-[#994b35]">Applied AI</em><br />Engineer<span className="text-[#994b35]">.</span></h1>
          <p className="mt-7 max-w-[550px] text-base leading-7 text-slate-600 md:text-lg md:leading-8">I build APIs, real-time data systems, and ML pipelines using FastAPI, PostgreSQL, and modern AI infrastructure.</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600"><span className="flex items-center gap-2"><Icon name="pin" /> Kanpur, India · Remote</span><span className="border-l border-black/20 pl-5">Class of {profile.graduation}</span></div>
          <div className="mt-8 flex flex-wrap gap-3"><Resume /><a href={profile.github} target="_blank" rel="noreferrer" className={`${button} border border-black/25`}><Icon name="github" /> GitHub ↗</a><a href="#contact" className={`${button} underline underline-offset-4`}>Let’s talk <Icon name="arrow" /></a></div>
          <div className="mt-4"><ProfileLinks compact /></div>
        </div>
        <aside className="min-w-0 self-center border-l border-[#994b35]/30 pl-6 md:pl-8" aria-label="Flagship project spotlight">
          <p className={`${mono} text-[#994b35]`}>Project spotlight / 01</p>
          <ProjectVisual project={projects[0]} />
          <h2 className="font-serif text-4xl">IGNIS</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Satellite telemetry → spatial intelligence → real-time fire alerts.</p>
          <a href="#project-nasa-firms" className={`mt-4 inline-flex min-h-12 items-center gap-4 text-sm font-bold text-[#87412f] underline underline-offset-4 ${focus}`}>Inside the system <Icon name="arrow" /></a>
        </aside>
      </section>
      <div className="border-y border-black/15">
        <div className={`${wrap} grid grid-cols-2 gap-y-7 py-8 md:grid-cols-4`}>
          {[[`${profile.solved}+`, 'LeetCode problems solved'], [`${profile.rating}+`, 'LeetCode contest rating'], [profile.cgpa.toFixed(2), 'CGPA / 10'], [String(profile.graduation), 'Expected graduation']].map(([value, label], i) => <div key={label} className={`${i ? 'border-l border-black/15 pl-5 md:pl-9' : ''} ${i === 2 ? 'max-md:border-l-0 max-md:pl-0' : ''}`}><p className="font-mono text-3xl tracking-tight">{value}</p><p className="mt-2 text-xs text-slate-600">{label}</p></div>)}
        </div>
      </div>
      <section id="work" className={`${wrap} py-20 md:py-24`}>
        <div className="flex flex-wrap items-end justify-between gap-5"><SectionTitle number="01" label="Selected work" title="Less theory. More building." /><p className="mb-10 max-w-80 text-sm leading-6 text-slate-600">Three projects. Real engineering decisions.<br />Explore the problem, my role, and the system.</p></div>
        <div className="grid items-start gap-7 md:grid-cols-2">{projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}</div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-slate-600">Project metrics are self-reported, not independently verified.</p><a className={`flex min-h-11 items-center gap-3 text-sm font-semibold ${focus}`} href={profile.github} target="_blank" rel="noreferrer">More on GitHub <Icon name="arrow" /></a></div>
      </section>
      <section className="bg-[#eee0cf] py-16">
        <div className={wrap}><p className={`${mono} mb-8 text-[#994b35]`}>Why work with me?</p><div className="grid gap-8 md:grid-cols-3">{reasons.map(r => <article key={r.title} className="min-w-0 md:border-r md:border-black/15 md:pr-7 md:last:border-0"><Icon name={r.icon} /><h3 className="mb-3 mt-6 font-serif text-2xl font-medium tracking-tight">{r.title}</h3><p className="text-sm leading-7 text-slate-600">{r.copy}</p></article>)}</div></div>
      </section>
      <section id="expertise" className="bg-[#3c2d25] py-20 text-[#fff5e9] md:py-24">
        <div className={wrap}><p className={`${mono} mb-5 text-[#f0bf9e]`}>02 / Technical expertise</p><h2 className="mb-10 font-serif text-4xl font-medium tracking-[-0.035em] md:text-5xl">Focused depth. Useful breadth.</h2>
          {expertise.map(([title, description, skills], i) => <div key={title} className="grid gap-5 border-t border-white/20 py-7 md:grid-cols-[1fr_1.5fr]"><div className="flex gap-5"><span className="pt-1 font-mono text-xs text-[#f0bf9e]">0{i + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-1 text-sm text-slate-300">{description}</p></div></div><div className="flex flex-wrap items-center gap-2">{skills.split(', ').map(skill => <span key={skill} className="rounded-sm border border-white/25 px-3 py-2 text-sm text-slate-300">{skill}</span>)}</div></div>)}
        </div>
      </section>
      <section id="experience" className={`${wrap} py-20 md:py-24`}>
        <SectionTitle number="03" label="Experience & achievements" title="Learning through the work." />
        <p className="mb-8 max-w-xl text-sm leading-7 text-slate-600">Independent engineering and product development—not formal employment. Source code provides a closer look at the implementation.</p>
        {[['Independent project', 'Backend & applied AI engineering', 'IGNIS + ResearchNode', 'Implemented asynchronous ingestion, spatial retrieval, and local AI workflows. Chose PostGIS for geospatial queries and hybrid graph/vector retrieval for research context.'],
          ['Product development', 'ZenPrep', 'AI-assisted interview preparation', 'Built multimodal assessment and live coding workflows. Integrated voice, vision, and language analysis into one interview experience.'],
          ['Ongoing practice', 'Competitive programming', `${profile.solved}+ LeetCode problems · ${profile.rating}+ LeetCode rating`, 'Consistent algorithmic practice that supports clear reasoning about data structures, complexity, and implementation trade-offs.']].map(([type, title, label, copy]) => <article className="grid gap-4 border-t border-black/15 py-7 md:grid-cols-[0.65fr_1fr_1.2fr]" key={title}><p className={`${mono} pt-1 text-slate-600`}>{type}</p><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm text-slate-600">{label}</p></div><p className="text-sm leading-7 text-slate-600">{copy}</p></article>)}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ['LeetCode', 'Data structures & algorithms', `${profile.solved}+ problems solved · ${profile.rating}+ contest rating. Explore my submissions and contest history.`, profile.leetcode],
            ['Codeforces', 'Competitive programming', 'Explore my public contest history, submissions, and coding activity.', profile.codeforces],
          ].map(([name, label, description, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={`View ${name} profile (opens in a new tab)`} className={`group min-w-0 rounded-sm border border-[#493329]/20 bg-[#fffaf3] p-6 transition-all duration-200 hover:bg-[#eee0cf] hover:shadow-md motion-safe:hover:-translate-y-1 motion-reduce:transition-none ${focus}`}>
            <div className="flex items-center justify-between gap-4"><span className={`${mono} text-[#994b35]`}>{label}</span><Icon name="arrow" /></div>
            <h3 className="mt-5 font-serif text-3xl">{name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            <span className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">View profile ↗</span>
          </a>)}
        </div>
      </section>
      <section id="about" className="border-t border-black/15">
        <div className={`${wrap} grid gap-10 py-16 md:grid-cols-2 md:gap-20`}><div><SectionTitle number="04" label="About & education" title="Curiosity, with a backbone." /><p className="max-w-lg text-base leading-8 text-slate-600">I’m Suraj, a Computer Science undergraduate at PSIT Kanpur. I enjoy making complex data useful—and building the dependable infrastructure around it.</p></div><div className="self-center border-l-2 border-[#994b35] pl-7"><p className={`${mono} text-slate-600`}>2024 — {profile.graduation}</p><h3 className="mt-4 text-2xl font-semibold tracking-tight">B.Tech · Computer Science<br />& Engineering</h3><p className="mt-3 text-sm leading-7 text-slate-600">Pranveer Singh Institute of Technology, Kanpur<br />CGPA {profile.cgpa}/10 · Expected graduation {profile.graduation}</p><p className="mt-4 text-sm text-slate-600">Core foundations: DSA, DBMS, and OOP.</p></div></div>
      </section>
      <section id="contact" className="bg-[#ead0b9] py-16 md:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1.2fr_1fr]`}><div><p className={`${mono} mb-6`}>05 / Let’s build something useful</p><h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.06em] md:text-6xl">Your next intern.<br /><em className="font-serif font-medium">Ready to contribute.</em></h2><a href={`mailto:${profile.email}`} className={`mt-7 inline-flex min-h-12 items-center gap-4 break-all text-lg font-semibold underline underline-offset-8 ${focus}`}>{profile.email} <Icon name="arrow" /></a></div>
          <div className="self-end"><p className="max-w-md text-base leading-8">Open to Backend Engineering, SDE, and Applied AI internships. Based in Kanpur, India (IST / UTC+5:30), and available for remote collaboration.</p><p className="mt-3 text-sm">Start date and relocation availability: let’s discuss.</p><div className="mt-7"><Resume /></div><p className="mt-3 text-xs">One-page résumé PDF · opens in a new tab</p><div className="mt-4 border-t border-[#493329]/20 pt-3"><ProfileLinks /></div></div>
        </div>
      </section>
    </main>
    <footer className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-7 text-xs text-slate-600`}><p>© {new Date().getFullYear()} Suraj Singh · Built with intention.</p><a href="#top" className={`flex min-h-11 items-center gap-3 ${focus}`}>Back to top ↑</a></footer>
  </div>
}
