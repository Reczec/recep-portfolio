import type { Metadata } from "next";
import Link from "next/link";
import { externalLinks } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Signly Case Study | Recep Baş",
  description: "A browser-based hackathon prototype for local, isolated ASL sign recognition.",
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SignlyCaseStudy() {
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
          <a href={externalLinks.signly} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight />
          </a>
        </nav>
      </header>

      <section className="case-hero section-wrap" aria-labelledby="case-title">
        <p className="eyebrow"><span className="status-dot" />Real project · Hackathon prototype</p>
        <h1 id="case-title">Signly: local sign recognition, <em>in the browser.</em></h1>
        <p className="case-lede">A browser-based prototype for recognizing a small set of isolated ASL signs on-device. It is a focused experiment, not continuous sign-language translation.</p>
        <div className="case-actions">
          <a className="button button-primary" href={externalLinks.signly} target="_blank" rel="noopener noreferrer">
            View GitHub <ArrowUpRight />
          </a>
          <Link className="button button-secondary" href="/#projects">Back to work</Link>
        </div>
      </section>

      <section id="case-content" className="case-content section-wrap" aria-label="Signly case study details">
        <article className="case-block case-overview">
          <p className="section-index">( 01 )</p>
          <div>
            <p className="eyebrow">Problem & context</p>
            <h2>Keep the experiment <em>useful and honest.</em></h2>
            <p>Signly tests whether a short webcam gesture can be recognized as one of 12 isolated ASL signs in a local browser workflow. The project was built as a hackathon research prototype and keeps its scope explicit: it does not claim to translate continuous signing or replace an interpreter.</p>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 02 )</p>
          <div>
            <p className="eyebrow">My contribution</p>
            <h2>A browser-based recognition <em>workflow.</em></h2>
            <p>My work focused on the browser prototype and its recognition workflow: webcam interaction, a constrained sign vocabulary, clear capture states, and feedback that helps people understand the result or retry.</p>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 03 )</p>
          <div>
            <p className="eyebrow">Architecture / approach</p>
            <h2>Local pipeline, <em>clear handoffs.</em></h2>
            <p>Camera frames remain on the device. MediaPipe extracts hand and upper-body landmarks, a compact temporal model processes the sequence, and ONNX Runtime Web performs local inference. The interface then presents confidence and capture feedback before an accepted word is added.</p>
            <ol className="architecture-list">
              <li><span>01</span>Webcam input</li>
              <li><span>02</span>Local landmark extraction</li>
              <li><span>03</span>Temporal model and local ONNX inference</li>
              <li><span>04</span>Confidence, release checks, and result feedback</li>
            </ol>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 04 )</p>
          <div>
            <p className="eyebrow">Tech stack</p>
            <h2>Built with web and <em>local AI tooling.</em></h2>
            <ul className="case-tags" aria-label="Signly technology stack">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>MediaPipe Tasks Vision</li>
              <li>ONNX Runtime Web / WASM</li>
              <li>Vite</li>
              <li>Vitest</li>
            </ul>
          </div>
        </article>

        <article className="case-block">
          <p className="section-index">( 05 )</p>
          <div>
            <p className="eyebrow">Challenges & takeaways</p>
            <h2>Prototype limits are part of the <em>product.</em></h2>
            <p>The vocabulary is intentionally small, browser camera conditions vary, and model confidence is not an accuracy claim. Signly reinforced the value of clear product limits, explicit state feedback, and local-first handling for a privacy-conscious prototype.</p>
          </div>
        </article>
      </section>

      <footer className="case-footer section-wrap">
        <Link href="/#projects">← Back to selected work</Link>
        <a href={externalLinks.signly} target="_blank" rel="noopener noreferrer">Open Signly on GitHub <ArrowUpRight /></a>
      </footer>
    </main>
  );
}
