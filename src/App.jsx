import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React, { useState, useEffect, useRef } from 'react';

const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);


const Eyebrow = ({ chapter, label }) => (
  <div className={`eyebrow${chapter ? ` eyebrow-ch-${chapter}` : ''}`}>
    <span className="eyebrow-dot" aria-hidden="true">●</span>
    <span>
      {chapter ? `CHAPTER ${chapter} · ` : ''}
      {label}
    </span>
  </div>
);

const NAV_SECTIONS = [
  { id: 'about',      label: 'about' },
  { id: 'stack',      label: 'stack' },
  { id: 'projects',   label: 'projects' },
  { id: 'trajectory', label: 'stewardship' },
];

const ResumeModal = ({ onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div className="resume-overlay" role="dialog" aria-modal="true" aria-label="Resume viewer" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="resume-panel">
        <div className="resume-panel-header">
          <span className="resume-panel-title">Manny Flores · Resume</span>
          <div className="resume-panel-actions">
            <a href="/resume.pdf" download="Manny_Flores_Resume_2026.pdf" className="btn-ghost resume-download-btn">Download</a>
            <button ref={closeRef} className="resume-close-btn" onClick={onClose} aria-label="Close resume">✕</button>
          </div>
        </div>
        <iframe src="/resume.pdf#navpanes=0&toolbar=0" className="resume-iframe" title="Manny Flores Resume" />
      </div>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Sync active nav item to scroll position
  useEffect(() => {
    const observers = NAV_SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-15% 0px -25% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (typeof window !== 'undefined' && window.history?.replaceState) {
        window.history.replaceState(null, '', `#${sectionId}`);
      }
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  // Headline underline draw-in on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.section-headline');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
      }),
      { rootMargin: '-5% 0px -5% 0px', threshold: 0.2 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const valid = NAV_SECTIONS.some(s => s.id === hash);
    if (!valid) return;
    const el = document.getElementById(hash);
    if (el) {
      setActiveSection(hash);
      requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
    }
  }, []);

  const skills = [
    { category: 'Identity & Access', items: ['Okta OIE', 'SAML 2.0', 'OAuth 2.0', 'OIDC', 'SCIM', 'RBAC', 'Zero Trust'] },
    { category: 'Automation & IaC', items: ['Python', 'Bash', 'Okta Workflows', 'Terraform', 'GCP IAM', 'APIs & Integrations'] },
    { category: 'Corp Apps Infra', items: ['GCP', 'Google Workspace', 'Okta', 'Slack', 'Jira', 'Workday'] },
    { category: 'AI & Governance', items: ['MCP', 'AI Orchestration', 'LLM Access Controls', 'Sprawl Prevention', 'OIG', 'ABAC'] },
  ];

  const expertise = [
    {
      title: 'Identity & Access Management',
      description: 'I own the identity stack: how people get in, what they can touch, and how access ends when they leave.',
      details: [
        'Okta administration, SAML 2.0, OAuth 2.0, OIDC integrations',
        'SCIM provisioning and user lifecycle automation',
        'Zero Trust architecture and RBAC policy design',
        'SOX compliance and IAM roadmap ownership',
      ],
    },
    {
      title: 'AI-Powered Identity Automation',
      description: "Building the identity layer that lets enterprise AI tools work: bridging Okta auth to apps that don't support direct OAuth, and handling the lifecycle edge cases SCIM can't reach.",
      details: [
        'Okta MCP integrations enabling enterprise AI tool adoption',
        'LLM access governance for enterprise AI tools',
        "Lifecycle edge cases beyond SCIM's reach",
        'Self-healing identity workflows',
      ],
    },
    {
      title: 'Automation & Integration Engineering',
      description: 'Removing repetitive ops work with scripts and integrations built to hold up over time.',
      details: [
        'Okta Workflows for identity lifecycle events',
        'Python and Bash scripting for system automation',
        'API integrations across SaaS, ITSM, and HRIS platforms',
        'Terraform for infrastructure-as-code',
      ],
    },
    {
      title: 'Corporate Applications Infrastructure',
      description: 'I own the core infrastructure layer the company depends on to build and ship: Okta, GCP, and Google Workspace.',
      details: [
        'Okta administration and Terraform-based IaC for identity',
        'GCP governance aligned to company AI workloads and sprawl prevention',
        'Google Workspace security hardening and administration',
        'Technical review authorship for identity changes',
        'Lifecycle governance and tech debt execution',
      ],
    },
  ];

  const currentProjects = [
    {
      title: 'Terraform Okta: Identity as Code',
      status: 'Building',
      description: 'Moving Okta config from clicks to Terraform. Config drift disappears, changes get reviewed like code, and policy stays consistent across the tenant.',
      tags: ['Okta', 'Terraform', 'IaC', 'Identity Infrastructure', 'Corp Apps'],
    },
    {
      title: 'Secure GCP for AI Workloads',
      status: 'Building',
      description: 'Building the GCP foundation that lets engineers ship AI-assisted tools to production safely. Terraform-managed IAM, project structure, and access controls, so teams move from local prototypes to hosted services without creating sprawl.',
      tags: ['GCP', 'Terraform', 'IAM', 'AI Enablement', 'Sprawl Prevention'],
    },
    {
      title: 'Google Workspace Security Hardening',
      status: 'Building',
      description: "Tightening Google Workspace: access policies, DLP, third-party OAuth, audit coverage. The attack surface gets bigger every time someone installs a new AI tool, and that's the part I'm watching.",
      tags: ['Google Workspace', 'DLP', 'OAuth Governance', 'Security', 'Corp Apps'],
    },
  ];

  const stewardship = [
    { area: 'Okta Identity Infrastructure', desc: 'IAM ownership, Terraform-driven config, lifecycle automation' },
    { area: 'GCP Governance',                desc: 'Company cloud access, AI workload hosting, sprawl prevention' },
    { area: 'Google Workspace',              desc: 'DLP, OAuth governance, access policies, Workspace administration' },
    { area: 'Technical Leadership',          desc: 'Lifecycle governance, technical review authorship, tech debt cleanup' },
  ];

  const now = new Date();
  const year = now.getFullYear();
  const monthNum = String(now.getMonth() + 1).padStart(2, '0');
  const monthName = now.toLocaleString('en-US', { month: 'long' });

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Masthead · magazine top rule */}
      <div className="masthead" role="presentation">
        <span className="masthead-dot" aria-hidden="true">●</span>
        <span>Cuaderno · {year}</span>
        <span className="masthead-spacer" />
        <span>No. {monthNum} · {monthName}</span>
      </div>

      {/* Heritage Ribbon · papel-picado color band, once per page */}
      <div className="heritage-ribbon" role="presentation" aria-hidden="true">
        <span className="ribbon-stack" />
        <span className="ribbon-making" />
        <span className="ribbon-stewardship" />
      </div>

      {/* Navigation */}
      <header className="nav-shell">
        <nav className="nav-row" aria-label="Main navigation">
          <button
            className="wordmark"
            onClick={() => scrollToSection('about')}
            aria-label="mannyflo, return to top"
          >
            mannyflo.
          </button>

          <div className="nav-desktop">
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-item ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </nav>
      </header>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        {NAV_SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-item ${activeSection === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
            tabIndex={isMenuOpen ? 0 : -1}
            aria-current={activeSection === id ? 'page' : undefined}
          >
            {label}
          </button>
        ))}
      </div>

      <main id="main">
        {/* Hero / About */}
        <section id="about" className="hero" aria-labelledby="hero-name">
          <div className="hero-grid">
            <div>
              <Eyebrow label="ENGINEER" />

              <h1 id="hero-name" className="hero-name">Manny Flores</h1>
              <p className="hero-role">Senior Systems Engineer</p>

              <p className="hero-lede">
                I run the <span className="accent">identity and corporate apps infrastructure</span>{' '}
                at Robinhood: Okta, GCP, Google Workspace. Lately my focus has been identity and
                access management: making AI tooling adoptable across the company without losing
                control of who can do what.
              </p>

              <div className="hero-cta-row">
                <a href="mailto:manny@flores.network" className="btn">
                  Get in Touch <IconArrow />
                </a>
                <a
                  href="https://linkedin.com/in/mannyflores11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
                <button
                  className="btn-ghost"
                  onClick={() => setResumeOpen(true)}
                >
                  Resume
                </button>
              </div>

              <div className="hero-meta" aria-label="Current role and location">
                <span className="hero-meta-mark" aria-hidden="true">●</span>
                <span>Robinhood</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span>Corporate Apps Infra</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span>SF Bay Area</span>
                <span className="hero-meta-sep" aria-hidden="true">·</span>
                <span>2024 to present</span>
              </div>
            </div>

            <img
              src="/profile2.png"
              alt="Portrait of Manny Flores"
              className="hero-portrait"
              width="240"
              height="240"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </section>

        {/* Stack · Expertise + Tools */}
        <section id="stack" className="section" aria-labelledby="stack-h">
          <Eyebrow chapter="01" label="STACK" />
          <h2 id="stack-h" className="section-headline">Stack.</h2>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article key={index} className="expertise-card">
                <span className="expertise-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="stack-tools">
            <div className="stack-tools-label">
              <span className="stack-tools-label-bar" aria-hidden="true" />
              TOOLS
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
              <div key={index}>
                <div className="skill-group-title">
                  <span className="skill-group-bar" aria-hidden="true" />
                  {group.category}
                </div>
                <div>
                  {group.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Projects · Currently Building */}
        <section id="projects" className="section" aria-labelledby="projects-h">
          <Eyebrow chapter="02" label="CURRENT FOCUS" />
          <h2 id="projects-h" className="section-headline">In the <em>making</em>.</h2>

          <div className="project-list">
            {currentProjects.map((project, index) => (
              <article
                key={index}
                className="project-card"
                data-status={project.status.toLowerCase()}
              >
                <div className="project-status">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="project-status-label">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="chip">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trajectory · What I Steward */}
        <section id="trajectory" className="section" aria-labelledby="trajectory-h">
          <Eyebrow chapter="03" label="SCOPE" />
          <h2 id="trajectory-h" className="section-headline">Stewardship.</h2>
          <p className="section-lede">
            I own the identity, cloud, and collaboration stack that the company runs on at Robinhood.
            The mandate: harden the foundation, make AI tooling adoptable, and keep things from sprawling.
          </p>

          <div className="steward-grid">
            {stewardship.map((item, i) => (
              <article key={i} className="steward-card">
                <span className="steward-num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{item.area}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      {/* Colophon */}
      <footer className="colophon" aria-label="Site colophon">
        <dl className="colophon-grid">
          <div className="colophon-block">
            <dt>Set in</dt>
            <dd>Fraunces, Newsreader, Cutive Mono.</dd>
          </div>
          <div className="colophon-block">
            <dt>Built with</dt>
            <dd>React, Vite, Vercel.</dd>
          </div>
          <div className="colophon-block">
            <dt>Built for</dt>
            <dd>Recruiters, peer engineers, and the family who asks what I actually do.</dd>
          </div>
        </dl>

        <div className="colophon-meta">
          <span>
            <span className="colophon-mark" aria-hidden="true">●</span>{' '}
            © {year} Manny Flores · SF Bay Area
          </span>
          <span>FIN.</span>
        </div>
      </footer>

      <Analytics />
      <SpeedInsights />
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
};

export default App;
