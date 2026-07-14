const links = {
  email: "mailto:dubeyharshit0605@gmail.com",
  github: "https://github.com/dubeyharshit0605",
  linkedin: "https://www.linkedin.com/in/dubeyharshit0605/",
  codeforces: "https://codeforces.com/profile/HDUBEY",
  codechef: "https://www.codechef.com/users/sarahspeedy",
  leetcode: "https://leetcode.com/u/x57bbAmhBm/",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harshit Dubey, home">
          HD<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href={links.email}>Let&apos;s talk <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span className="status-dot" /> Open to SDE &amp; AI engineering opportunities</div>
        <h1>I build AI products<br />and reliable systems<span className="accent">.</span></h1>
        <div className="hero-bottom">
          <p>
            I&apos;m <strong>Harshit Dubey</strong>, a software engineer focused on backend systems,
            agentic AI, automation, and algorithms. I turn complex ideas into useful,
            production-ready products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/harshit-dubey-resume.pdf" target="_blank">View résumé <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div><p className="kicker">Work experience</p><h2>I turn complex ideas<br />into clear outcomes.</h2></div>
        </div>
        <div className="timeline">
          <article>
            <div className="timeline-date">JUN 2026 — PRESENT</div>
            <div><h3>Technical Content Writer</h3><p className="company">takeuforward · Remote</p></div>
            <p>Developed and optimized 200+ DSA articles and editorials, partnering with mentors and developers on technical accuracy while improving discoverability through SEO.</p>
          </article>
          <article>
            <div className="timeline-date">MAY — JUN 2026</div>
            <div><h3>Problem Setter</h3><p className="company">AskSenior · Remote</p></div>
            <p>Authored ICPC-style problems, reference solutions, hidden tests, and editorials. Used brute-force verification, stress testing, and custom generators to eliminate unintended solutions.</p>
          </article>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div><p className="kicker">Selected work</p><h2>Systems with a reason to exist.</h2></div>
        </div>

        <article className="project project-featured">
          <div className="project-copy">
            <div className="project-meta"><span>AI PRODUCT · FULL STACK</span><span>2026</span></div>
            <h3>Text to Learn</h3>
            <p className="project-lead">An AI course generator that turns a prompt into a structured, multi-format learning experience.</p>
            <p className="project-detail">
              Designed a three-level Course → Module → Lesson data model, secure Auth0 flows,
              and REST APIs for AI-generated content. A modular renderer supports MCQs, code,
              videos, Hinglish explanations, and PDFs while validation keeps model output consistent.
            </p>
            <ul className="tag-list" aria-label="Technologies used">
              <li>React</li><li>Node.js</li><li>Express</li><li>MongoDB</li><li>Gemini / GPT</li><li>Auth0</li>
            </ul>
            <div className="project-links">
              <a href="https://text-to-learn-frontend-dubeyharshit0605.onrender.com/" target="_blank" rel="noreferrer">Live product <Arrow /></a>
              <a href="https://github.com/dubeyharshit0605/Text-to-learn" target="_blank" rel="noreferrer">Source code <Arrow /></a>
            </div>
          </div>
          <div className="system-card" aria-label="Text to Learn system architecture">
            <div className="system-top"><span>TEXT_TO_LEARN</span><span className="live-pill">● LIVE</span></div>
            <div className="course-preview">
              <p className="preview-label">GENERATED COURSE</p>
              <h4>How databases work</h4>
              <div className="module-row"><span>01</span><div><b>Data foundations</b><small>4 lessons · concepts + quiz</small></div></div>
              <div className="module-row active"><span>02</span><div><b>Query engines</b><small>6 lessons · code + video</small></div></div>
              <div className="module-row"><span>03</span><div><b>Production systems</b><small>5 lessons · case study</small></div></div>
            </div>
            <div className="architecture-flow"><span>Prompt</span><i>→</i><span>AI</span><i>→</i><span>Validate</span><i>→</i><span>Learn</span></div>
          </div>
        </article>

        <article className="project project-secondary">
          <div className="cube-visual" aria-hidden="true">
            <div className="cube-grid">
              {Array.from({ length: 25 }).map((_, index) => <span key={index} className={`cube-cell c${index % 7}`} />)}
            </div>
            <div className="solver-readout"><span>IDA* SEARCH</span><strong>00:02.84</strong><small>solution found · 8 moves</small></div>
          </div>
          <div className="project-copy">
            <div className="project-meta"><span>ALGORITHMS · SYSTEMS</span><span>2026</span></div>
            <h3>Rubik&apos;s Cube Solver</h3>
            <p className="project-lead">A high-performance 3×3 solver built around Korf&apos;s IDA* search algorithm.</p>
            <p className="project-detail">
              Implemented BFS, DFS, IDDFS, and IDA* with three state representations—including
              a compact six-integer bitboard. Custom hashing and efficient comparisons improved
              exploration by nearly 10×, solving 13-move scrambles in under 10 seconds.
            </p>
            <ul className="tag-list"><li>C++</li><li>IDA*</li><li>Bitboards</li><li>Custom hashing</li><li>Three.js</li></ul>
            <div className="project-links">
              <a href="https://rubiks-cube-studio.onrender.com/" target="_blank" rel="noreferrer">Try the solver <Arrow /></a>
              <a href="https://github.com/dubeyharshit0605/rubiks-cube-studio" target="_blank" rel="noreferrer">Source code <Arrow /></a>
            </div>
          </div>
        </article>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-number">03</span>
          <div><p className="kicker">About</p><h2>Curious by default.<br />Rigorous by practice.</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>I&apos;m pursuing a B.Tech in Computer Science and Engineering at IIIT Vadodara. I like work where product thinking, backend engineering, AI, and difficult algorithms meet.</p>
            <p>Beyond code, I serve as Joint Secretary of Enigma, IIIT Vadodara&apos;s mathematics club—organizing a 150+ participant flagship event and a workshop for 200+ students.</p>
          </div>
          <div className="capabilities">
            <article><span>01</span><div><h3>Backend &amp; product</h3><p>Node.js, Next.js, NestJS, REST APIs, PostgreSQL, MongoDB, Docker</p></div></article>
            <article><span>02</span><div><h3>AI &amp; automation</h3><p>LLM APIs, structured generation, validation, authentication, workflow design</p></div></article>
            <article><span>03</span><div><h3>Algorithms</h3><p>C++, graph theory, dynamic programming, search, complexity analysis, testing</p></div></article>
          </div>
        </div>
      </section>

      <section className="section signal-section">
        <p className="kicker">Problem-solving signal</p>
        <div className="signal-grid">
          <a href={links.codeforces} target="_blank" rel="noreferrer"><span>Codeforces</span><strong>Specialist · 1443</strong><Arrow /></a>
          <a href={links.codechef} target="_blank" rel="noreferrer"><span>CodeChef</span><strong>4 Star · 1813</strong><Arrow /></a>
          <a href={links.leetcode} target="_blank" rel="noreferrer"><span>LeetCode</span><strong>Knight · 1850+</strong><Arrow /></a>
        </div>
      </section>

      <section className="contact-section">
        <p className="kicker">Have an ambitious problem?</p>
        <h2>Let&apos;s build something<br />people want<span className="accent">.</span></h2>
        <a className="contact-link" href={links.email}>dubeyharshit0605@gmail.com <Arrow /></a>
      </section>

      <footer>
        <p>© 2026 Harshit Dubey</p>
        <div><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
