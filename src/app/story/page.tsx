import React from "react";
import Header from "@/components/Header";

export default function StoryPage() {
  return (
    <>
      {/* Subpage Cinematic aspect-ratio borders */}
      <div className="cinematic-bar-top subpage-bar" aria-hidden="true" />
      <div className="cinematic-bar-bottom subpage-bar" aria-hidden="true" />

      {/* Global Navigation Header (Immediate Load) */}
      <Header isHome={false} />

      <main className="subpage-container">
        {/* Subtle cinematic visual glows */}
        <div className="cinematic-vignette" aria-hidden="true" />
        <div className="lens-flare" aria-hidden="true" style={{ top: "30%" }} />
        <div className="ambient-glow-1" aria-hidden="true" style={{ top: "20%", left: "10%", background: "radial-gradient(circle, rgba(184, 150, 62, 0.08) 0%, transparent 70%)" }} />

        {/* Page Headings */}
        <section aria-labelledby="storyTitle">
          <h1 className="page-title" id="storyTitle">Story & Leadership</h1>
          <p className="page-subtitle">Tracing the path from hands-on developer to Chief Technology Officer.</p>
        </section>

        {/* Editorial Layout Grid */}
        <div className="editorial-grid">
          
          {/* Main Biography Section */}
          <article className="story-main-bio">
            <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              The Professional Journey
            </h2>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
              Veena Vikas B combines profound engineering competencies with tactical product delivery frameworks. Currently acting as the <strong>Chief Technology Officer (CTO)</strong> at Digital IT Hub, he has directed technical operations since January 2021. Over these four years, his tenure has bridged the gap between raw web development and high-level system architecture.
            </p>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
              Starting in early 2021 as a Web Developer, Veena was personally responsible for creating and deploying over 20 responsive client websites. His ability to translate complex specifications into accessible, cross-browser compliant applications rapidly positioned him to assume leadership of the engineering division. As CTO, he now manages Digital IT Hub's entire roadmap, personally building and deploying <strong>50+ production-grade enterprise platforms</strong>.
            </p>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
              Beyond coding, his dual commitment to technical mentoring has resulted in training <strong>200+ developer recruits</strong>. By introducing robust automation protocols, he has successfully cut internal manual operations by 40% while preserving a stellar delivery rating across commercial projects.
            </p>

            <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "16px", fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Engineering Leadership & Agile PM Metrics
            </h3>
            <p style={{ color: "var(--text-gold-dust)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              To align his technical execution with modern operational models, Veena operates as a <strong>Certified Google Project Manager</strong>. He utilizes standard Agile methodologies to coordinate a remote team of 10 engineers, translating high-level business goals into scoped sprint tasks tracked in Asana.
            </p>

            {/* Simulated Interactive Scrum Board */}
            <div className="scrum-board" aria-label="Simulated Agile Sprint Board">
              <div className="scrum-column">
                <div className="scrum-col-title">Backlog (Scoped)</div>
                <div className="scrum-card">
                  Create Agentic AI framework syllabus for Q3 cohort
                  <span className="scrum-card-tag">Training · VVB-109</span>
                </div>
                <div className="scrum-card">
                  Optimize FinCompAI compliances database indexing
                  <span className="scrum-card-tag">R&D · VVB-112</span>
                </div>
              </div>

              <div className="scrum-column">
                <div className="scrum-col-title">Active Sprints</div>
                <div className="scrum-card" style={{ borderLeftColor: "var(--accent-gold)" }}>
                  Deploy LexAI RAG stream indexing on AWS node
                  <span className="scrum-card-tag">AI · VVB-105</span>
                </div>
                <div className="scrum-card" style={{ borderLeftColor: "var(--accent-gold)" }}>
                  Integrate stripe webhooks into Swaadam checkout
                  <span className="scrum-card-tag">Products · VVB-98</span>
                </div>
              </div>

              <div className="scrum-column">
                <div className="scrum-col-title">Automated & Shipped</div>
                <div className="scrum-card automated">
                  Automated onboarding scripts (Saved 40% time)
                  <span className="scrum-card-tag">DevOps · VVB-82</span>
                </div>
                <div className="scrum-card automated">
                  Teachures white-labeling tenant configuration
                  <span className="scrum-card-tag">Products · VVB-75</span>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar: Academics, NSS, Certifications */}
          <aside className="story-sidebar">
            {/* Education Widget */}
            <div className="product-arch-card" style={{ padding: "24px", marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                Education & Roots
              </h3>
              <h4 style={{ color: "var(--accent-gold)", fontSize: "16px", fontWeight: "bold" }}>B.Tech in ECE</h4>
              <p style={{ color: "var(--text-white)", fontSize: "14px", marginTop: "4px" }}>
                Electronics & Communication Engineering
              </p>
              <p style={{ color: "var(--text-gold-dust)", fontSize: "13px", fontStyle: "italic", marginTop: "2px" }}>
                Thandra Paparaya Institute of Science and Technology · 2016 – 2020
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <span className="tech-tag" style={{ background: "rgba(212, 175, 55, 0.15)", color: "var(--accent-gold)", border: "1px solid rgba(212,175,55,0.3)" }}>
                  Grade: A
                </span>
                <span className="tech-tag">NSS Volunteer</span>
                <span className="tech-tag">Soccer Captain</span>
              </div>
            </div>

            {/* Certifications Timeline */}
            <div className="product-arch-card" style={{ padding: "24px" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                Verified Credentials
              </h3>
              
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-details">
                    <span className="timeline-year">2026</span>
                    <h4>Agentic AI Engineering</h4>
                    <p>In Progress. In-depth work on LLM APIs, LangChain, RAG architectures, and multi-agent platforms.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker" style={{ borderColor: "var(--accent-orange)", boxShadow: "0 0 8px var(--accent-orange)" }} />
                  <div className="timeline-details">
                    <span className="timeline-year" style={{ color: "var(--accent-orange)" }}>2025</span>
                    <h4>Google Project Management</h4>
                    <p>Certified by Google/Coursera. In-depth training on Agile methodology, Sprint planning, Asana, roadmapping, and budget scoping.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker" style={{ borderColor: "var(--accent-teal)", boxShadow: "0 0 8px var(--accent-teal)" }} />
                  <div className="timeline-details">
                    <span className="timeline-year" style={{ color: "var(--accent-teal)" }}>2022</span>
                    <h4>Lean Six Sigma Yellow Belt</h4>
                    <p>Process Optimization & Quality Assurance. Focused on waste elimination, system streamlining, and development automation.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-details">
                    <span className="timeline-year">2021</span>
                    <h4>HTML Certification</h4>
                    <p>Front-end Web Development standardisation. Semantics, accessibility targets, and SEO structuring.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
