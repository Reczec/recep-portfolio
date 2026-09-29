import Link from "next/link";
import { externalLinks, navigation, projects, skillGroups } from "@/app/lib/site";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4v16m-6-6 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.04-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.43c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.65.72 1.04 1.63 1.04 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon" fill="currentColor">
      <path d="M19.35 3H4.65A1.65 1.65 0 0 0 3 4.65v14.7C3 20.26 3.74 21 4.65 21h14.7c.91 0 1.65-.74 1.65-1.65V4.65C21 3.74 20.26 3 19.35 3ZM8.44 18.1H5.9V9.92h2.54v8.18ZM7.17 8.8a1.47 1.47 0 1 1 0-2.94 1.47 1.47 0 0 1 0 2.94Zm11 9.3h-2.53v-3.98c0-.95-.02-2.18-1.33-2.18-1.33 0-1.53 1.04-1.53 2.1v4.06h-2.54V9.92h2.44v1.12h.03c.34-.65 1.17-1.33 2.4-1.33 2.57 0 3.05 1.7 3.05 3.9v4.49Z" />
    </svg>
  );
}

function ProjectVisual({ type }: { type: "signly" | "flow" | "context" }) {
  if (type === "signly") {
    return (
      <div className="project-preview preview-signly" aria-label="Signly application screenshot slot">
        <div className="preview-header"><span /><span /><span /></div>
        <div className="signly-canvas">
          <p>Signly</p>
          <span>Application screenshot slot</span>
        </div>
      </div>
    );
  }

  if (type === "flow") {
    return (
      <div className="project-preview preview-flow" aria-hidden="true">
        <div className="preview-header"><span /><span /><span /></div>
        <div className="flow-canvas">
          <div className="flow-line flow-line-one" /><div className="flow-line flow-line-two" />
          <div className="flow-node node-one"><i /></div><div className="flow-node node-two"><i /></div>
          <div className="flow-node node-three"><i /></div><div className="flow-node node-four"><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview preview-context" aria-hidden="true">
      <div className="preview-header"><span /><span /><span /></div>
      <div className="context-layout"><div className="context-list"><i /><i /><i /><i /></div><div className="context-document"><b /><span /><span /><span /><strong /><span /><span /></div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Recep Baş — home">
            <span className="brand-mark">R.</span>
            <span className="brand-name">Recep Baş</span>
          </a>
          <div className="nav-links desktop-nav">
            {navigation.map((item) => <a key={item.id} href={item.href}>{item.label}</a>)}
          </div>
          <details className="mobile-menu">
            <summary aria-label="Toggle navigation"><span className="sr-only">Toggle navigation</span><MenuIcon /></summary>
            <div className="nav-links mobile-nav">
              {navigation.map((item) => <a key={item.id} href={item.href}>{item.label}</a>)}
            </div>
          </details>
          <a className="nav-availability" href="#contact"><span />Open to junior opportunities</a>
        </nav>
      </header>

      <div id="top" className="hero-grid">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-delay-1"><span className="status-dot" />IT · Software · AI Automation</p>
            <h1 id="hero-title" className="reveal reveal-delay-2">Building practical tools <em>with intent.</em></h1>
            <p className="hero-intro reveal reveal-delay-3">I&apos;m Recep Baş, an IT and software developer focused on building practical tools, AI-powered workflows, and reliable systems.</p>
            <div className="hero-actions reveal reveal-delay-4">
              <a className="button button-primary" href="#projects">View work <ArrowDown /></a>
              <button className="button button-secondary button-disabled" type="button" disabled aria-describedby="cv-note">Download CV</button>
              <a className="button button-tertiary" href="#contact">Let&apos;s connect <ArrowUpRight /></a>
            </div>
            <p id="cv-note" className="cv-note">CV placeholder — add <code>public/recep-bas-cv.pdf</code> to enable the download.</p>
          </div>
          <div className="hero-aside reveal reveal-delay-3" aria-label="Current focus">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-core"><span className="core-label">FOCUS</span><strong>BUILD</strong><span className="core-caption">Think. Build.<br />Refine.</span></div>
            <div className="hero-note note-top"><span>Current focus</span><strong>AI systems<br />&amp; automation</strong></div>
            <div className="hero-note note-bottom"><span>Approach</span><strong>Practical tools<br />&amp; workflows</strong></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown /></a>
        </section>
      </div>

      <div id="content">
        <section id="projects" className="section projects-section section-wrap" aria-labelledby="projects-title">
          <div className="section-topline"><p className="section-index">( 01 )</p><p className="eyebrow">Selected work</p></div>
          <div className="projects-heading"><h2 id="projects-title">Built to <em>solve,</em><br />not just to show.</h2><a className="text-link desktop-link" href={externalLinks.github} target="_blank" rel="noopener noreferrer">See GitHub <ArrowUpRight /></a></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card project-card-${project.visual}`} key={project.id}>
                <div className="project-visual-wrap"><ProjectVisual type={project.visual} /><span className="project-number">{project.id}</span></div>
                <div className="project-content">
                  <p className="project-category">{project.status}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tags" aria-label={`${project.title} stack`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                  <div className="project-actions">
                    {project.caseStudy && <Link href={project.caseStudy}>Case study <ArrowUpRight /></Link>}
                    {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>}
                    {!project.caseStudy && !project.repository && <span className="project-placeholder">Currently building</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="section about-section section-wrap" aria-labelledby="about-title">
          <p className="section-index">( 02 )</p>
          <div className="section-heading"><p className="eyebrow">A little about me</p><h2 id="about-title">Technically curious.<br /><em>Purposefully practical.</em></h2></div>
          <div className="about-copy">
            <p>I work across software development, IT systems, AI, and automation with a practical focus: understand the problem, make the workflow clearer, and build something useful.</p>
            <p>My background combines technical and business-focused education with hands-on project work, from browser-based AI prototypes to a digital medical knowledge base contribution.</p>
            <a className="text-link" href="#skills">Explore my focus <ArrowUpRight /></a>
          </div>
        </section>

        <section id="skills" className="section skills-section section-wrap" aria-labelledby="skills-title">
          <div className="section-topline"><p className="section-index">( 03 )</p><p className="eyebrow">Capabilities & areas of interest</p></div>
          <div className="skills-heading"><h2 id="skills-title">Prepared for <em>useful,</em><br />real-world work.</h2><p>Four connected areas where I build, reason about systems, and apply AI and automation with a practical lens.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group) => <article className="skill-card" key={group.title}><div className="skill-card-head"><span>{group.number}</span><span className="card-arrow">↗</span></div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}
          </div>
        </section>


        <section id="education" className="section education-section section-wrap" aria-labelledby="education-title">
          <div className="section-topline"><p className="section-index">( 04 )</p><p className="eyebrow">Education</p></div>
          <div className="education-grid">
            <div><h2 id="education-title">Technical grounding,<br /><em>business context.</em></h2></div>
            <article className="education-card">
              <p className="project-category">TGM HTL</p>
              <h3>Wirtschaftsingenieurwesen / Betriebsinformatik</h3>
              <p>Technical and business-focused education with a software and IT systems background.</p>
              <dl><div><dt>Diploma thesis</dt><dd>Digital medical knowledge base</dd></div><div><dt>My contribution</dt><dd>Knowledge base component</dd></div></dl>
              <Link className="text-link" href="/projects/medical-knowledge-base">View academic case study <ArrowUpRight /></Link>
            </article>
          </div>
        </section>

        <section id="current-work" className="section current-work-section section-wrap" aria-labelledby="current-work-title">
          <div className="section-topline"><p className="section-index">( 05 )</p><p className="eyebrow">Current work</p></div>
          <div className="current-work-heading"><h2 id="current-work-title">Projects in <em>motion.</em></h2><p>Static for now, structured to become a live project feed later.</p></div>
          <div className="work-list">
            <a className="work-row" href={externalLinks.signly} target="_blank" rel="noopener noreferrer"><span className="work-status">Released prototype</span><strong>Signly</strong><span>Browser-based isolated sign recognition</span><ArrowUpRight /></a>
            <a className="work-row" href="#top"><span className="work-status">Current</span><strong>This portfolio</strong><span>Personal site and project case studies</span><ArrowUpRight /></a>
            <div className="work-row work-row-static"><span className="work-status">In progress</span><strong>CareerOS</strong><span>AI-assisted career and job workflow concept</span><span className="work-pending">Link pending</span></div>
          </div>
          <aside className="ask-teaser" aria-labelledby="ask-title">
            <p className="project-category">Coming soon</p>
            <div><h3 id="ask-title">Ask my portfolio</h3><p>A compact way to explore projects, skills, background, and technical interests.</p></div>
            <span>Preview only</span>
          </aside>
        </section>


        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-wrap contact-inner">
            <p className="section-index">( 06 )</p>
            <div className="contact-main"><p className="eyebrow">Get in touch</p><h2 id="contact-title">Open to junior opportunities in <em>IT, software, AI &amp; automation.</em></h2><p>Based in Vienna, Austria.</p><a className="email-link" href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight /></a></div>
            <div className="contact-side"><p>Elsewhere</p><a href={externalLinks.github} target="_blank" rel="noopener noreferrer"><GithubIcon />GitHub <ArrowUpRight /></a><a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon />LinkedIn <ArrowUpRight /></a></div>
          </div>
        </section>
      </div>

      <footer className="footer section-wrap"><span>© {new Date().getFullYear()} Recep Baş</span><span>Designed &amp; built with care.</span><div className="footer-socials"><a href={externalLinks.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a><a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight /></a></div><a href="#top">Back to top <ArrowUpRight /></a></footer>
    </main>
  );
}
