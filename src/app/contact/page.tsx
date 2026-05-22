"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Forward Deployed Engineer",
    message: ""
  });
  const [status, setStatus] = useState<{ type: "success" | "error" | "submitting" | null; text: string }>({
    type: null,
    text: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        text: "[ERROR] All scoping fields must be completed before transmission."
      });
      return;
    }

    setStatus({
      type: "submitting",
      text: "[CONNECTING] Scoping payload package compiles... dispatching to CTO backlog..."
    });

    // Simulate database/API ingestion delay
    setTimeout(() => {
      setStatus({
        type: "success",
        text: `[SHIPPED] Connection package successfully ingested as ticket ${Math.floor(100 + Math.random() * 900)}. Veena Vikas will respond via ${formData.email} within 24 hours.`
      });
      setFormData({
        name: "",
        email: "",
        inquiryType: "Forward Deployed Engineer",
        message: ""
      });
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Subpage Cinematic aspect-ratio borders */}
      <div className="cinematic-bar-top subpage-bar print-hide" aria-hidden="true" />
      <div className="cinematic-bar-bottom subpage-bar print-hide" aria-hidden="true" />

      {/* Global Navigation Header (Immediate Load) */}
      <Header isHome={false} />

      <main className="subpage-container">
        {/* Subtle cinematic visual glows */}
        <div className="cinematic-vignette print-hide" aria-hidden="true" />
        <div className="lens-flare print-hide" aria-hidden="true" style={{ top: "60%" }} />
        <div className="ambient-glow-1 print-hide" aria-hidden="true" style={{ top: "50%", right: "5%", background: "radial-gradient(circle, rgba(184, 150, 62, 0.06) 0%, transparent 70%)" }} />

        {/* Page Headings */}
        <section aria-labelledby="contactTitle" className="print-hide">
          <h1 className="page-title" id="contactTitle">Professional Coordinates</h1>
          <p className="page-subtitle">Initiate strategic scoping, explore enterprise engineering, or compile a print-ready resume sheet.</p>
        </section>

        {/* Editorial Layout Grid */}
        <div className="editorial-grid print-hide">
          {/* Left Column: Coordinates details & Resume Printer */}
          <article>
            <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Direct Coordinates
            </h2>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
              Available for high-impact roles including <strong>Forward Deployed Engineer</strong>, <strong>RAG/AI consulting</strong>, and <strong>academic developer training cohorts</strong> across India (Visakhapatnam, AP, Hyderabad, Bangalore, or remote).
            </p>

            {/* Visual Coordinates Details */}
            <div className="product-arch-card" style={{ padding: "24px", marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                Communication Anchors
              </h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", color: "var(--text-cream)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "11px", textTransform: "uppercase" }}>Email Node:</span>
                  <a href="mailto:bveenavikas@gmail.com" style={{ color: "var(--text-white)", textDecoration: "none" }}>bveenavikas@gmail.com</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "11px", textTransform: "uppercase" }}>Phone Trunk:</span>
                  <a href="tel:+919059072293" style={{ color: "var(--text-white)", textDecoration: "none" }}>+91-9059072293</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "11px", textTransform: "uppercase" }}>LinkedIn Protocol:</span>
                  <a href="https://linkedin.com/in/veena-vikas-b" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-teal)", textDecoration: "none" }}>linkedin.com/in/veena-vikas-b ↗</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.03)", paddingBottom: "8px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "11px", textTransform: "uppercase" }}>GitHub Repository:</span>
                  <a href="https://github.com/veenavikas" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-teal)", textDecoration: "none" }}>github.com/veenavikas ↗</a>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "11px", textTransform: "uppercase" }}>Geographic Node:</span>
                  <span style={{ color: "var(--text-white)" }}>Visakhapatnam, Andhra Pradesh, AP, India</span>
                </div>
              </div>
            </div>

            {/* Print Compilation Trigger */}
            <div className="product-arch-card" style={{ padding: "24px", borderColor: "rgba(184, 150, 62, 0.2)" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                High-Fidelity Document Compiler
              </h3>
              <p style={{ color: "var(--text-gold-dust)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Generate a clean, professional, printer-friendly curriculum vitae formatted for paper sheets or PDF export. All dark cinematic styles are automatically bypassed.
              </p>
              <button 
                onClick={handlePrint}
                className="submit-btn"
                style={{ background: "linear-gradient(135deg, var(--accent-gold), #967d32)", width: "100%" }}
              >
                Compile & Print Resume Summary
              </button>
            </div>
          </article>

          {/* Right Column: Agile Consulting Booking Console */}
          <aside>
            <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Agile Scoping Console
            </h2>
            <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              Complete the configuration form below to outline your project scoping, resource timelines, or candidate search filters.
            </p>

            {/* Form card wrapper */}
            <div className="booking-card">
              <form onSubmit={handleSubmit} className="inquiry-form" id="scopingInquiryForm">
                <div className="form-group">
                  <label htmlFor="inputName">Sender Name / Enterprise</label>
                  <input
                    type="text"
                    id="inputName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name or agency"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputEmail">Secure Email Coordinates</label>
                  <input
                    type="email"
                    id="inputEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@enterprise.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="selectInquiry">Engagement Scopes</label>
                  <select
                    id="selectInquiry"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    <option value="Forward Deployed Engineer">Forward Deployed Engineer / Full-Stack Role</option>
                    <option value="RAG/AI consulting">RAG Engine / AI Infrastructure Consultation</option>
                    <option value="Technical Cohort Training">Technical Training / Developer Onboarding Batches</option>
                    <option value="General Leadership Collaboration">General Leadership / CTO Collaboration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="textMessage">Agile Specifications Message</label>
                  <textarea
                    id="textMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your system parameters, core bottlenecks, and timeline expectations..."
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={status.type === "submitting"}>
                  {status.type === "submitting" ? "Dispatching to backlog..." : "Ingest Scoping Ticket"}
                </button>

                {status.type && (
                  <div 
                    className={`inquiry-status ${status.type === "success" ? "success" : status.type === "error" ? "error" : ""}`}
                    style={{ color: status.type === "submitting" ? "var(--accent-gold)" : "" }}
                  >
                    {status.text}
                  </div>
                )}
              </form>
            </div>
          </aside>
        </div>

        {/* ==========================================
           HIDDEN PRINT-ONLY RESUME CONTAINER (ACTIVE DURING PRINTING)
           ========================================== */}
        <div className="print-show" style={{ display: "none" }}>
          {/* Resume Header */}
          <div style={{ textAlign: "center", borderBottom: "2px solid #000000", paddingBottom: "12px", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "28px", textTransform: "uppercase", margin: "0 0 6px 0", letterSpacing: "0.05em", color: "#000000" }}>Veena Vikas B</h1>
            <p style={{ fontSize: "14px", fontWeight: "bold", margin: "0 0 6px 0", color: "#333333" }}>
              CTO | Tech Lead | Full Stack Developer | Technical Trainer | Agentic AI Engineer
            </p>
            <p style={{ fontSize: "11px", margin: "0", color: "#555555" }}>
              Visakhapatnam, AP, India | +91-9059072293 | bveenavikas@gmail.com | linkedin.com/in/veena-vikas-b | github.com/veenavikas
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", borderBottom: "1px solid #999999", paddingBottom: "4px", margin: "16px 0 8px 0" }}>Professional Summary</h3>
            <p style={{ fontSize: "11px", lineHeight: "1.5", margin: "0" }}>
              Results-driven Chief Technology Officer and Technical Trainer with 4+ years of experience leading a 10-member remote engineering team, delivering 50+ production projects, and training 200+ students with an 80% placement rate. Certified Google Project Manager with a proven track record of shipping end-to-end products across e-commerce, EdTech, AI, and automotive verticals — deployed on AWS. Currently advancing into Agentic AI Engineering, building LLM-powered applications with Python, Groq, LangChain, and FastAPI. Combines rare technical depth with strong leadership, communication, and curriculum-design skills.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", borderBottom: "1px solid #999999", paddingBottom: "4px", margin: "16px 0 8px 0" }}>Technical Skills</h3>
            <table style={{ width: "100%", fontSize: "11px", borderCollapse: "collapse", margin: "0" }}>
              <tbody>
                <tr>
                  <td style={{ width: "22%", fontWeight: "bold", padding: "4px 0" }}>Languages & Frontend:</td>
                  <td style={{ padding: "4px 0" }}>JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3, React.js, Next.js, Vite, Tailwind CSS, Redux</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "4px 0" }}>Backend & Database:</td>
                  <td style={{ padding: "4px 0" }}>Node.js, Express.js, REST APIs, FastAPI (Python), MySQL, MongoDB, PostgreSQL</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "4px 0" }}>Cloud, DevOps & AI:</td>
                  <td style={{ padding: "4px 0" }}>AWS (EC2, S3, RDS, Route 53), Git, Docker (basics), LLM APIs (Groq, OpenAI, Anthropic), Prompt Engineering, LangChain, Streaming AI, Vector DBs</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", padding: "4px 0" }}>Methodology & Leadership:</td>
                  <td style={{ padding: "4px 0" }}>Certified Google Project Manager, Agile/Scrum, Sprint scoping, Asana, OKRs, Curriculum Design, Remote Team Management (10 members)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", borderBottom: "1px solid #999999", paddingBottom: "4px", margin: "16px 0 8px 0" }}>Professional Experience</h3>
            
            <div style={{ marginBottom: "12px", pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "12px" }}>
                <span>Chief Technology Officer (CTO) | Digital IT Hub</span>
                <span>Jan 2021 – Present</span>
              </div>
              <div style={{ fontStyle: "italic", fontSize: "11px", color: "#555555", marginBottom: "4px" }}>Visakhapatnam, AP, India (Remote & On-site) | Team Size: 10 Engineers</div>
              <ul style={{ margin: "0 0 0 16px", padding: "0", fontSize: "11px", lineHeight: "1.5" }}>
                <li>Lead a 10-member remote engineering team — overseeing sprint planning, code reviews, performance, and delivery across 4+ concurrent projects using Asana.</li>
                <li>Personally built and delivered 50+ production projects out of 200+ total projects shipped by Digital IT Hub across e-commerce, EdTech, logistics, and automotive sectors.</li>
                <li>Own full technology roadmap — from product ideation to AWS multi-AZ architectures (EC2, S3, RDS), ensuring high availability and cost efficiency.</li>
                <li>Introduced AI-powered automation scripts, reducing internal operational manual processing time by 40%.</li>
                <li>Manage end-to-end client relationships, requirements gathering, technical scoping, and post-launch maintenance.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "12px", pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "12px" }}>
                <span>Technical Trainer — Data Analytics & Full Stack (MERN) | Digital IT Hub</span>
                <span>2021 – Present</span>
              </div>
              <div style={{ fontStyle: "italic", fontSize: "11px", color: "#555555", marginBottom: "4px" }}>Cohort Batches (In-person & Online) | Tracing 4 Years</div>
              <ul style={{ margin: "0 0 0 16px", padding: "0", fontSize: "11px", lineHeight: "1.5" }}>
                <li>Trained 200+ students in full-stack development and analytics, achieving a verified 80% job placement rate.</li>
                <li>Designed curriculum from scratch covering Python scripts, SQL, React.js, Express, databases, and AWS deployment.</li>
                <li>Onboarded complete beginners and brought them to job-ready standards using live code reviews and mock interviews.</li>
                <li>Developed reusable codebase blocks and automated assessments, cutting initial batch onboarding times by 30%.</li>
              </ul>
            </div>

            <div style={{ pageBreakInside: "avoid" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "12px" }}>
                <span>Web Developer | Digital IT Hub</span>
                <span>2021 – 2022</span>
              </div>
              <div style={{ fontStyle: "italic", fontSize: "11px", color: "#555555", marginBottom: "4px" }}>On-site Frontend Engineering</div>
              <ul style={{ margin: "0 0 0 16px", padding: "0", fontSize: "11px", lineHeight: "1.5" }}>
                <li>Developed and shipped responsive frontends for 20+ commercial client websites utilizing React.js, HTML5, CSS3, and Tailwind.</li>
                <li>Collaborated with design and system teams to deliver accessible, performant, and search-optimized web applications under deadlines.</li>
              </ul>
            </div>
          </div>

          {/* Key Flagship Projects */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", borderBottom: "1px solid #999999", paddingBottom: "4px", margin: "16px 0 8px 0" }}>Key Flagship Projects</h3>
            
            <p style={{ fontSize: "11px", margin: "0 0 6px 0" }}>
              <strong>The Swaadam (https://theswaadam.com):</strong> Built B2C FMCG food supply e-commerce application from scratch using React, Vite, Node, MySQL, and AWS (EC2, S3, RDS). Processes 100+ daily orders with ~10k+ monthly site visits.
            </p>
            <p style={{ fontSize: "11px", margin: "0 0 6px 0" }}>
              <strong>Teachures (https://teachures.com):</strong> Architected white-label multi-tenant LMS software serving multiple schools from a single codebase with dynamic DNS routing and robust logical database isolation pools to prevent data leak risks.
            </p>
            <p style={{ fontSize: "11px", margin: "0 0 6px 0" }}>
              <strong>PostWise India:</strong> Shipped an AI content rewriting platform utilizing NLP tone-splitting models in regional Indian dialects (Hindi + Telugu). Integrates a WhatsApp webhook client approval pipeline, cutting wait times from 24h to under 1h.
            </p>
            <p style={{ fontSize: "11px", margin: "0 0 6px 0" }}>
              <strong>SegoAuto:</strong> Programmed a client-facing fleet vehicle tracker panel using secure API keys, live hardware GPS telemetry polling, and real-time Leaflet maps visualization.
            </p>
            <p style={{ fontSize: "11px", margin: "0" }}>
              <strong>AI Engineering Suite (https://github.com/veenavikas/ai-engineering):</strong> Shipped streaming AI web apps using Flask server-sent events (SSE) and Groq LLaMA 3.3 70B, rendering tokens inside clients at an average speed of 275 tokens/sec.
            </p>
          </div>

          {/* Education & Verified Credentials */}
          <div>
            <h3 style={{ fontSize: "14px", textTransform: "uppercase", borderBottom: "1px solid #999999", paddingBottom: "4px", margin: "16px 0 8px 0" }}>Education & Credentials</h3>
            <p style={{ fontSize: "11px", margin: "0 0 4px 0" }}>
              <strong>Bachelor of Technology (B.Tech) in ECE</strong> | Grade: A | NSS Volunteer | Soccer Team Captain<br />
              Thandra Paparaya Institute of Science and Technology, India (2016 – 2020)
            </p>
            <p style={{ fontSize: "11px", margin: "0" }}>
              <strong>Verified Credentials:</strong> Google Project Management Certificate (2025) | Lean Six Sigma Yellow Belt (2022) | HTML Certification (2021) | Agentic AI Engineering (In Progress, 2026)
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
