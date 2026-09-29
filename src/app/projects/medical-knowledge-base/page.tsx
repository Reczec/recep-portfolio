import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Medical Knowledge Base | Recep Baş",
  description: "An academic case study on the knowledge base component of a larger diploma thesis project.",
};

export default function MedicalKnowledgeBaseCaseStudy() {
  return (
    <main className="case-page">
      <a className="skip-link" href="#case-content">Skip to case study</a>
      <header className="case-header section-wrap">
        <Link className="brand" href="/" aria-label="Recep Baş — home">
          <span className="brand-mark">R.</span>
          <span className="brand-name">Recep Baş</span>
        </Link>
        <nav className="case-nav" aria-label="Project navigation">
          <Link href="/#projects">All work</Link>
          <Link href="/#education">Education</Link>
        </nav>
      </header>

      <section className="case-hero section-wrap" aria-labelledby="case-title">
        <p className="eyebrow"><span className="status-dot" />Academic project · Private / school project</p>
        <h1 id="case-title">Digital medical <em>knowledge base.</em></h1>
        <p className="case-lede">A diploma thesis contribution centered on the knowledge base component of a larger digital medical project.</p>
        <div className="case-actions">
          <Link className="button button-primary" href="/#education">View education</Link>
          <Link className="button button-secondary" href="/#projects">Back to work</Link>
        </div>
      </section>

      <section id="case-content" className="case-content section-wrap" aria-label="Digital Medical Knowledge Base case study details">
        <article className="case-block case-overview">
          <p className="section-index">( 01 )</p>
          <div>
            <p className="eyebrow">Academic context</p>
            <h2>A diploma thesis with a <em>focused contribution.</em></h2>
            <p>This work was completed in the context of my TGM HTL education in Wirtschaftsingenieurwesen / Betriebsinformatik. It formed one component of a larger diploma thesis project involving a digital medical knowledge base.</p>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 02 )</p>
          <div>
            <p className="eyebrow">My contribution</p>
            <h2>Knowledge base <em>component.</em></h2>
            <p>My contribution focused on the knowledge base portion of the project. The work centered on the component&apos;s role within the wider diploma thesis rather than presenting it as a separate public product.</p>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 03 )</p>
          <div>
            <p className="eyebrow">Technical objectives</p>
            <h2>Structure information for <em>useful access.</em></h2>
            <p>The component&apos;s objective was to contribute a digital knowledge base to the broader project. The work emphasized information structure and the relationship between a focused technical component and the larger system.</p>
            <ul className="case-tags" aria-label="Digital Medical Knowledge Base focus areas">
              <li>Knowledge base design</li>
              <li>Information structure</li>
              <li>Digital medical knowledge</li>
              <li>Academic project</li>
            </ul>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 04 )</p>
          <div>
            <p className="eyebrow">What I learned</p>
            <h2>Focused work still needs a <em>system view.</em></h2>
            <p>Working on one component within a diploma thesis made the value of clear scope, useful information structure, and connection to the larger project concrete.</p>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 05 )</p>
          <div>
            <p className="eyebrow">Availability</p>
            <h2>Private / school <em>project.</em></h2>
            <p>No public repository is linked for this academic work.</p>
          </div>
        </article>
      </section>

      <footer className="case-footer section-wrap">
        <Link href="/#projects">← Back to selected work</Link>
        <Link href="/#education">TGM HTL education</Link>
      </footer>
    </main>
  );
}
