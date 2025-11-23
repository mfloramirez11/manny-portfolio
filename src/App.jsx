import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Senior Enterprise Applications Engineer';

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

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { category: 'Identity & Access', items: ['Okta OIE', 'SAML 2.0', 'OAuth 2.0', 'OIDC', 'SCIM', 'RBAC', 'Zero Trust'] },
    { category: 'Automation & IaC', items: ['Python', 'Bash', 'Okta Workflows', 'Terraform', 'APIs & Integrations'] },
    { category: 'Enterprise Platforms', items: ['Google Workspace', 'Slack', 'Jira', 'Confluence', 'Workday', 'ServiceNow'] },
    { category: 'Emerging Focus', items: ['MCP', 'AI Orchestration', 'LLM Access Controls', 'OIG', 'ABAC', 'PBAC'] },
  ];

  const expertise = [
    {
      title: 'Identity & Access Management',
      icon: '🔐',
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
      icon: '🤖',
      description: 'Building intelligent systems that replace traditional rule-based connectors with AI-driven lifecycle management.',
      details: [
        'MCP integrations for AI-orchestrated identity events',
        'LLM access governance for enterprise AI tools',
        'Handling exceptions and edge cases that SCIM can\'t address',
        'Designing self-healing, scalable identity workflows'
      ]
    },
    {
      title: 'Automation & Integration Engineering',
      icon: '⚙️',
      description: 'Eliminating operational toil through durable automations and cross-system integrations.',
      details: [
        'Okta Workflows for identity lifecycle events',
        'Python and Bash scripting for system automation',
        'API integrations across SaaS, ITSM, and HRIS platforms',
        'Terraform for infrastructure-as-code (expanding)'
      ]
    },
    {
      title: 'Enterprise SaaS & Platform Engineering',
      icon: '☁️',
      description: 'Managing and integrating mission-critical corporate platforms at scale.',
      details: [
        'Okta, Google Workspace, Slack, Jira, Confluence administration',
        'Workday HRIS integration and lifecycle orchestration',
        'Vendor management and SaaS governance',
        'Self-service tooling and employee enablement'
      ]
    }
  ];

  const currentProjects = [
    {
      title: 'Okta MCP + Workday AI Lifecycle Automation',
      status: 'Building',
      description: 'Developing a Model Context Protocol (MCP) integration between Okta and Workday to handle all identity lifecycle events via AI. This will replace traditional SCIM and provisioning connectors, enabling intelligent handling of exceptions and edge cases that rule-based systems can\'t address.',
      tags: ['Okta', 'Workday', 'MCP', 'AI Lifecycle', 'Identity Automation']
    },
    {
      title: 'Generative AI Access & Governance Hardening',
      status: 'Active',
      description: 'Designing the secure access and policy framework for corporate LLM platforms. Integrating AI service access into existing Okta identity architecture while ensuring regulatory compliance.',
      tags: ['Gemini', 'Claude Code', 'ChatGPT', 'Okta', 'Zero Trust']
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)',
      color: '#e4e4e7',
      fontFamily: '"IBM Plex Sans", -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
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
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .nav-container {
            flex-wrap: wrap;
            justify-content: center;
          }
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="grid-bg" />
      
      <div className="content-wrapper">
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 40px',
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
        }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '18px',
            fontWeight: 600,
            color: '#22d3ee',
            letterSpacing: '1px'
          }}>
            {'<MF />'}
          </div>
          
          <div className="nav-container" style={{ display: 'flex', gap: '8px' }}>
            {['about', 'expertise', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px 40px 80px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease 0.2s'
          }}>
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
            
            <div style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: '1.25rem',
              color: '#71717a',
              marginBottom: '32px',
              minHeight: '1.5em'
            }}>
              {typedText}<span className="cursor" />
            </div>
            
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: '#a1a1aa',
              maxWidth: '700px',
              marginBottom: '40px'
            }}>
              Building <span style={{ color: '#22d3ee' }}>resilient</span>, <span style={{ color: '#22d3ee' }}>automated</span>, and <span style={{ color: '#22d3ee' }}>intelligent</span> enterprise 
              systems. Deep expertise in <strong style={{ color: '#e4e4e7' }}>Identity & Access Management</strong>, now 
              designing <strong style={{ color: '#e4e4e7' }}>AI-powered lifecycle automation</strong> that eliminates operational 
              toil and replaces traditional rule-based systems with durable, self-healing workflows.
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
        </section>

        {/* Expertise Section */}
        <section id="expertise" style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Core Expertise</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '48px',
            color: '#e4e4e7'
          }}>
            What I Do
          </h2>
          
          <div className="expertise-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="expertise-card"
                style={{
                  animation: `fadeInUp 0.6s ease ${0.1 * index}s both`
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: '#e4e4e7'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#71717a',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {item.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0
                }}>
                  {item.details.map((detail, i) => (
                    <li key={i} style={{
                      color: '#a1a1aa',
                      fontSize: '0.875rem',
                      lineHeight: 1.8,
                      paddingLeft: '16px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#22d3ee'
                      }}>→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Technical Stack</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '48px',
            color: '#e4e4e7'
          }}>
            Tools & Technologies
          </h2>
          
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px'
          }}>
            {skills.map((group, index) => (
              <div key={index}>
                <h4 style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#71717a',
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

        {/* Current Projects Section */}
        <section id="projects" style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Current Focus</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '48px',
            color: '#e4e4e7'
          }}>
            What I'm Building
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {currentProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
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
                
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#e4e4e7'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: '#a1a1aa',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                  maxWidth: '800px'
                }}>
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

        {/* Growth Trajectory Section */}
        <section style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Growth Trajectory</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '24px',
            color: '#e4e4e7'
          }}>
            Where I'm Headed
          </h2>
          <p style={{
            color: '#a1a1aa',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '48px',
            maxWidth: '800px'
          }}>
            Evolving from hands-on IAM engineering toward designing intelligent, self-healing systems 
            that eliminate operational toil and scale with the business.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {[
              { area: 'Solutions Engineering', desc: 'Designing end-to-end identity and workflow systems' },
              { area: 'AI Orchestration', desc: 'Building MCP-powered lifecycle automation' },
              { area: 'Infrastructure-as-Code', desc: 'Terraform for scalable, auditable IAM' },
              { area: 'Access Governance', desc: 'OIG, RBAC, ABAC, PBAC policy architecture' },
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
                <h4 style={{ color: '#e4e4e7', marginBottom: '8px', fontSize: '1.1rem' }}>
                  {item.area}
                </h4>
                <p style={{ color: '#71717a', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How I Work Section */}
        <section style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="section-title">Philosophy</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '48px',
            color: '#e4e4e7'
          }}>
            How I Work
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              { 
                trait: 'Builder Mentality', 
                desc: 'Comfortable owning zero-to-one. I stand up systems from scratch and iterate as the organization grows, rather than waiting for perfect conditions.' 
              },
              { 
                trait: 'Systems Thinker', 
                desc: 'I design IT and security that actually works for people. The best systems feel invisible: reliable, secure, and easy to use.' 
              },
              { 
                trait: 'Technical Partner', 
                desc: 'I work hand-in-hand with Engineering and speak their language. Not just a translator, but a true collaborator on architecture and security.' 
              },
              { 
                trait: 'Pragmatic Strategist', 
                desc: 'I see the north star and build incremental paths to get there. I know when "good enough for now" is the right move and when to push for more.' 
              },
              { 
                trait: 'Cross-Functional Operator', 
                desc: 'I partner effectively with People Ops, Finance, Legal, and Engineering to align IT with business needs. Everyone trusts and relies on IT as their partner.' 
              },
              { 
                trait: 'Calm Under Pressure', 
                desc: 'Experienced running incident response and keeping people aligned when things go sideways. I set up systems so future incidents are less painful.' 
              },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '0',
                borderLeft: '2px solid rgba(34, 211, 238, 0.3)',
                paddingLeft: '24px'
              }}>
                <h4 style={{ 
                  color: '#e4e4e7', 
                  marginBottom: '12px', 
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}>
                  {item.trait}
                </h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '60px 40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          textAlign: 'center'
        }}>
          <div style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: '14px',
            color: '#52525b'
          }}>
            <p style={{ marginBottom: '16px' }}>
              Built with resilience, reliability, and empowerment in mind.
            </p>
            <p>
              © {new Date().getFullYear()} Manny Flores · San Francisco Bay Area
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};



export default App;