import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from 'react';

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const IconBot = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <circle cx="8.5" cy="16" r="1.5" fill="#22d3ee" stroke="none"/>
    <circle cx="15.5" cy="16" r="1.5" fill="#22d3ee" stroke="none"/>
  </svg>
);

const IconGear = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

// Kill switch: set WRITING_ENABLED to false to hide the Writing section and its nav entry.
const WRITING_ENABLED = true;

const NAV_SECTIONS = [
  { id: 'about',      label: 'about' },
  { id: 'expertise',  label: 'expertise' },
  { id: 'skills',     label: 'skills' },
  { id: 'projects',   label: 'projects' },
  ...(WRITING_ENABLED ? [{ id: 'writing', label: 'writing' }] : []),
  { id: 'trajectory', label: 'trajectory' },
  { id: 'philosophy', label: 'work' },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = 'Senior Systems Engineer';

  useEffect(() => {
    setIsLoaded(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Sync active nav item to scroll position
  useEffect(() => {
    const observers = NAV_SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
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
    }
  };

  const skills = [
    { category: 'Identity & Access', items: ['Okta OIE', 'SAML 2.0', 'OAuth 2.0', 'OIDC', 'SCIM', 'RBAC', 'Zero Trust'] },
    { category: 'Automation & IaC', items: ['Python', 'Bash', 'Okta Workflows', 'Terraform', 'GCP IAM', 'APIs & Integrations'] },
    { category: 'Corp Apps Infra', items: ['GCP', 'Google Workspace', 'Okta', 'Slack', 'Jira', 'Workday'] },
    { category: 'AI & Governance', items: ['MCP', 'AI Orchestration', 'LLM Access Controls', 'Sprawl Prevention', 'OIG', 'ABAC'] },
  ];

  const expertise = [
    {
      title: 'Identity & Access Management',
      icon: <IconShield />,
      description: 'End-to-end ownership of enterprise identity lifecycle, access policies, and modern authentication protocols.',
      details: [
        'Okta administration, SAML 2.0, OAuth 2.0, OIDC integrations',
        'SCIM provisioning and user lifecycle automation',
        'Zero Trust architecture and RBAC policy design',
        'SOX compliance and IAM roadmap ownership'
      ]
    },
    {
      title: 'AI-Powered Identity Automation',
      icon: <IconBot />,
      description: 'Building intelligent systems that replace traditional rule-based connectors with AI-driven lifecycle management.',
      details: [
        'MCP integrations for AI-orchestrated identity events',
        'LLM access governance for enterprise AI tools',
        "Handling exceptions and edge cases that SCIM can't address",
        'Designing self-healing, scalable identity workflows'
      ]
    },
    {
      title: 'Automation & Integration Engineering',
      icon: <IconGear />,
      description: 'Eliminating operational toil through durable automations and cross-system integrations.',
      details: [
        'Okta Workflows for identity lifecycle events',
        'Python and Bash scripting for system automation',
        'API integrations across SaaS, ITSM, and HRIS platforms',
        'Terraform for infrastructure-as-code (expanding)'
      ]
    },
    {
      title: 'Corporate Applications Infrastructure',
      icon: <IconCloud />,
      description: 'Stewarding the core infrastructure layer (Okta, GCP, and Google Workspace) that CorpEng depends on to build and ship.',
      details: [
        'Okta administration and Terraform-based IaC for identity',
        'GCP governance aligned to CorpEng AI workloads and sprawl prevention',
        'Google Workspace security hardening and administration',
        'Lifecycle governance: vetting EDDs, PRDs, and TRA authorship'
      ]
    }
  ];

  const currentProjects = [
    {
      title: 'Terraform Okta: Identity as Code',
      status: 'Building',
      description: 'Migrating Okta configuration to Terraform, making identity infrastructure auditable, repeatable, and version-controlled. Eliminates manual config drift and enables consistent policy enforcement across the tenant.',
      tags: ['Okta', 'Terraform', 'IaC', 'Identity Infrastructure', 'CAPPS Infra']
    },
    {
      title: 'Secure GCP for AI Workloads',
      status: 'Active',
      description: 'Establishing GCP governance for CorpEng. Enabling teams to securely host AI-powered projects and vibe-coded tools without creating sprawl. Aligning IAM, project structure, and access controls so engineers can ship fast with guardrails.',
      tags: ['GCP', 'AI Enablement', 'Sprawl Prevention', 'CorpEng', 'Zero Trust']
    },
    {
      title: 'Google Workspace Security Hardening',
      status: 'Active',
      description: 'Tightening Google Workspace administration across the org: access policies, DLP, third-party OAuth governance, and audit coverage. Reducing surface area as AI tooling adoption accelerates.',
      tags: ['Google Workspace', 'DLP', 'OAuth Governance', 'Security', 'CAPPS Infra']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)',
      color: '#e4e4e7',
      fontFamily: '"IBM Plex Sans", -apple-system, sans-serif',
    }}>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        ::selection {
          background: #22d3ee;
          color: #0a0a0f;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50%       { box-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Skip to content */
        .skip-link {
          position: absolute;
          top: -100%;
          left: 16px;
          padding: 8px 16px;
          background: #22d3ee;
          color: #0a0a0f;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          border-radius: 0 0 8px 8px;
          text-decoration: none;
          z-index: 999;
          transition: top 0.2s ease;
        }

        .skip-link:focus {
          top: 0;
        }

        .nav-item {
          position: relative;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          letter-spacing: 0.5px;
          border: 1px solid transparent;
          background: transparent;
          color: #a1a1aa;
        }

        .nav-item:hover {
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.3);
          background: rgba(34, 211, 238, 0.05);
        }

        .nav-item.active {
          color: #22d3ee;
          border-color: #22d3ee;
          background: rgba(34, 211, 238, 0.1);
        }

        .nav-item:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }

        .skill-tag {
          display: inline-block;
          padding: 6px 14px;
          margin: 4px;
          font-size: 13px;
          font-family: 'IBM Plex Mono', monospace;
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 4px;
          color: #22d3ee;
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-tag:hover {
          background: rgba(34, 211, 238, 0.15);
          border-color: rgba(34, 211, 238, 0.4);
          transform: translateY(-2px);
        }

        .expertise-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 28px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .expertise-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22d3ee, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .expertise-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(34, 211, 238, 0.3);
          transform: translateY(-4px);
        }

        .expertise-card:hover::before {
          opacity: 1;
        }

        .section-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #22d3ee;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-title::before {
          content: '//';
          opacity: 0.5;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: #22d3ee;
          margin-left: 4px;
          animation: pulse 1s infinite;
          vertical-align: middle;
        }

        .grid-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, rgba(34, 211, 238, 0.02) 100%);
          border: 1px solid rgba(34, 211, 238, 0.2);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          transition: border-color 0.2s ease;
        }

        .hamburger:hover { border-color: rgba(34, 211, 238, 0.4); }

        .hamburger:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #a1a1aa;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile nav drawer */
        .nav-mobile {
          position: fixed;
          top: 65px;
          left: 0;
          right: 0;
          background: rgba(10, 10, 15, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 99;
          transform: translateY(-110%);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .nav-mobile.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .nav-mobile .nav-item {
          text-align: left;
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hamburger {
            display: flex;
          }
          .nav-desktop {
            display: none !important;
          }
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-content {
            flex-direction: column !important;
            text-align: center;
          }
          .hero-content img {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Fix #10: Skip to content */}
      <a href="#about" className="skip-link">Skip to content</a>

      <div className="grid-bg" />

      <div className="content-wrapper">
        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '16px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(10, 10, 15, 0.8)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            zIndex: 100,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.6s ease'
          }}
        >
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '18px',
            fontWeight: 600,
            color: '#22d3ee',
            letterSpacing: '1px'
          }}>
            {'<MF />'}
          </div>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', gap: '8px' }}>
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-item ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Hamburger (mobile) */}
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
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hero / About */}
        <section id="about" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px 40px 80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div
            className="hero-content"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s ease 0.2s',
              display: 'block',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <div>
              <div className="section-title">Profile</div>

              <h1 className="hero-title" style={{
                fontSize: '4rem',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Manny Flores
              </h1>

              {/* Fix #14: aria-label so screen readers get the full title immediately */}
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '1.25rem',
                  color: '#a1a1aa',
                  marginBottom: '32px',
                  minHeight: '1.5em'
                }}
                role="text"
                aria-label="Senior Systems Engineer"
              >
                <span aria-hidden="true">{typedText}<span className="cursor" /></span>
              </div>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: '#a1a1aa',
                maxWidth: '700px',
                marginBottom: '40px'
              }}>
                Senior Systems Engineer at Robinhood, leading <span style={{ color: '#22d3ee' }}>Corporate Applications Infrastructure</span>.
                Stewarding <strong style={{ color: '#e4e4e7' }}>Okta</strong>, <strong style={{ color: '#e4e4e7' }}>GCP</strong>, and <strong style={{ color: '#e4e4e7' }}>Google Workspace</strong> to harden identity,
                enable <strong style={{ color: '#e4e4e7' }}>AI workloads</strong> securely, and help CorpEng ship fast without sprawl.
                Deep roots in <span style={{ color: '#22d3ee' }}>IAM</span> and <span style={{ color: '#22d3ee' }}>AI-powered lifecycle automation</span>.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="mailto:manny@flores.network" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
                  color: '#0a0a0f',
                  textDecoration: 'none',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}>
                  Get in Touch →
                </a>
                <a href="https://linkedin.com/in/mannyflores11" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: '#e4e4e7',
                  textDecoration: 'none',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease'
                }}>
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Core Expertise</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '48px', color: '#e4e4e7' }}>
            What I Do
          </h2>

          <div className="expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {expertise.map((item, index) => (
              <div
                key={index}
                className="expertise-card"
                style={{ animation: `fadeInUp 0.6s ease ${0.1 * index}s both` }}
              >
                <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: '#e4e4e7' }}>
                  {item.title}
                </h3>
                {/* Fix #9: description was #71717a (~4.4:1) → #a1a1aa (~7:1) */}
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {item.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.details.map((detail, i) => (
                    <li key={i} style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: 1.8, paddingLeft: '16px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#22d3ee' }}>→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-title">Technical Stack</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '48px', color: '#e4e4e7' }}>
            Tools & Technologies
          </h2>

          <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {skills.map((group, index) => (
              <div key={index}>
                <h4 style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#a1a1aa',
                  marginBottom: '16px'
                }}>
                  {group.category}
                </h4>
                <div>
                  {group.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-title">Current Focus</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '48px', color: '#e4e4e7' }}>
            What I'm Building
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="status-dot" />
                  <span style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.75rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#22c55e'
                  }}>
                    {project.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px', color: '#e4e4e7' }}>
                  {project.title}
                </h3>

                <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px', maxWidth: '800px' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      padding: '6px 14px',
                      background: 'rgba(34, 211, 238, 0.1)',
                      border: '1px solid rgba(34, 211, 238, 0.3)',
                      borderRadius: '20px',
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: '0.8rem',
                      color: '#22d3ee'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Writing — kill switch: WRITING_ENABLED at top of file */}
        {WRITING_ENABLED && (
          <section id="writing" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section-title">Field Notes</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '24px', color: '#e4e4e7' }}>
              Writing
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '48px', maxWidth: '800px' }}>
              Notes from the intersection of IAM, AI, and corporate infrastructure. What I'm learning while building and leading.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  title: 'IAM for AI Agents: Humans, Services, and the Third Thing',
                  teaser: 'Agents are neither users nor service accounts. Rethinking identity primitives for the LLM era.',
                  status: 'Drafting'
                },
                {
                  title: 'Why MCP Beats SCIM for Lifecycle Edge Cases',
                  teaser: 'Rule-based provisioning breaks at the edges. Where MCP fits, where SCIM still wins.',
                  status: 'Drafting'
                },
                {
                  title: 'Terraform Okta: Patterns I Actually Use',
                  teaser: 'Moving Okta configuration to code. The wins, the traps, and the patterns worth copying.',
                  status: 'Planned'
                }
              ].map((post, i) => (
                <article key={i} style={{
                  padding: '24px 28px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#71717a',
                    marginBottom: '8px'
                  }}>
                    {post.status}
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#e4e4e7',
                    marginBottom: '8px'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {post.teaser}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* What I Steward */}
        <section id="trajectory" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-title">Domain</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '24px', color: '#e4e4e7' }}>
            What I Steward
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '48px', maxWidth: '800px' }}>
            Leading Corporate Applications Infrastructure at Robinhood. I own the identity, cloud, and collaboration
            stack that CorpEng runs on. My mandate: harden the foundation, enable AI adoption, and keep things from sprawling.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { area: 'Okta Identity Infrastructure', desc: 'IAM ownership, Terraform-driven config, lifecycle automation' },
              { area: 'GCP Governance', desc: 'CorpEng cloud access, AI workload hosting, sprawl prevention' },
              { area: 'Google Workspace', desc: 'Secure administration, access policies, enterprise collaboration' },
              { area: 'Technical Leadership', desc: 'Lifecycle governance (EDDs/PRDs), TRA authorship, tech debt execution' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '24px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.75rem',
                  color: '#22d3ee',
                  marginBottom: '8px',
                  letterSpacing: '1px'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 style={{ color: '#e4e4e7', marginBottom: '8px', fontSize: '1.1rem' }}>{item.area}</h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work — fix #6: added id="philosophy" */}
        <section id="philosophy" style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-title">Philosophy</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '48px', color: '#e4e4e7' }}>
            How I Work
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              { trait: 'Builder Mentality',       desc: 'Comfortable owning zero-to-one. I stand up systems from scratch and iterate as the organization grows, rather than waiting for perfect conditions.' },
              { trait: 'Systems Thinker',          desc: 'I design IT and security that actually works for people. The best systems feel invisible: reliable, secure, and easy to use.' },
              { trait: 'Technical Partner',        desc: 'I work hand-in-hand with Engineering and speak their language. Not just a translator, but a true collaborator on architecture and security.' },
              { trait: 'Pragmatic Strategist',     desc: 'I see the north star and build incremental paths to get there. I know when "good enough for now" is the right move and when to push for more.' },
              { trait: 'Cross-Functional Operator',desc: 'I partner effectively with People Ops, Finance, Legal, and Engineering to align IT with business needs. Everyone trusts and relies on IT as their partner.' },
              { trait: 'Calm Under Pressure',      desc: 'Experienced running incident response and keeping people aligned when things go sideways. I set up systems so future incidents are less painful.' },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '2px solid rgba(34, 211, 238, 0.3)', paddingLeft: '24px' }}>
                <h4 style={{ color: '#e4e4e7', marginBottom: '12px', fontSize: '1.1rem', fontWeight: 600 }}>
                  {item.trait}
                </h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer — fix #3: color was #52525b (~2.9:1) → #a1a1aa */}
        <footer style={{ padding: '60px 40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '14px', color: '#a1a1aa' }}>
            <p style={{ marginBottom: '16px' }}>Built with resilience, reliability, and empowerment in mind.</p>
            <p>© {new Date().getFullYear()} Manny Flores · San Francisco Bay Area</p>
          </div>
        </footer>
      </div>

      <Analytics />
    </div>
  );
};

export default App;
