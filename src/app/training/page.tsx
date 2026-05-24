"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

interface StudentPlacement {
  id: string;
  name: string;
  role: string;
  company: string;
  cohort: "MERN Full-Stack" | "Data Analytics" | "AI Engineering";
  package: string;
  status: "Verified Placement" | "Alumni Active";
}

const placementDirectory: StudentPlacement[] = [
  { id: "P-01", name: "Anish Kumar", role: "Junior Frontend Engineer", company: "TCS", cohort: "MERN Full-Stack", package: "4.8 LPA", status: "Verified Placement" },
  { id: "P-02", name: "Divya Teja", role: "Associate Data Analyst", company: "Wipro", cohort: "Data Analytics", package: "5.2 LPA", status: "Verified Placement" },
  { id: "P-03", name: "Suresh Naidu", role: "React Developer", company: "Cognizant", cohort: "MERN Full-Stack", package: "4.5 LPA", status: "Alumni Active" },
  { id: "P-04", name: "Priyanka Sen", role: "Data Visualization Analyst", company: "Infosys", cohort: "Data Analytics", package: "5.0 LPA", status: "Verified Placement" },
  { id: "P-05", name: "Harish Prasad", role: "MERN Stack Developer", company: "Digital IT Hub", cohort: "MERN Full-Stack", package: "4.0 LPA", status: "Alumni Active" },
  { id: "P-06", name: "Kiran G", role: "Python Automation Engineer", company: "Capgemini", cohort: "Data Analytics", package: "6.0 LPA", status: "Verified Placement" },
  { id: "P-07", name: "Vamsi Krishna", role: "Agentic AI Developer", company: "Tech Mahindra", cohort: "AI Engineering", package: "7.5 LPA", status: "Verified Placement" }
];

export default function TrainingPage() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPlacements = placementDirectory.filter((student) => {
    const matchesFilter = filter === "All" || student.cohort === filter;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
        <div className="lens-flare" aria-hidden="true" style={{ top: "50%" }} />
        <div className="ambient-glow-2" aria-hidden="true" style={{ top: "45%", left: "5%", background: "radial-gradient(circle, rgba(92, 122, 94, 0.08) 0%, transparent 70%)" }} />

        {/* Page Headings */}
        <section aria-labelledby="trainingTitle">
          <h1 className="page-title" id="trainingTitle">Technical Training</h1>
          <p className="page-subtitle">Designing structured curriculums, building developer talent pools, and accelerating onboarding timelines.</p>
        </section>

        {/* Training Metrics Counter Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "48px" }}>
          <div style={{ background: "var(--card-glass)", padding: "24px", borderRadius: "12px", border: "1px solid var(--glass-border)", backdropFilter: "blur(12px)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold" }}>200+</div>
            <div style={{ color: "var(--text-white)", fontSize: "12px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px" }}>Students Trained</div>
          </div>
          <div style={{ background: "var(--card-glass)", padding: "24px", borderRadius: "12px", border: "1px solid var(--glass-border)", backdropFilter: "blur(12px)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-orange)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold" }}>80%</div>
            <div style={{ color: "var(--text-white)", fontSize: "12px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px" }}>Job Placement Rate</div>
          </div>
          <div style={{ background: "var(--card-glass)", padding: "24px", borderRadius: "12px", border: "1px solid var(--glass-border)", backdropFilter: "blur(12px)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-teal)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "bold" }}>30%</div>
            <div style={{ color: "var(--text-white)", fontSize: "12px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "8px" }}>Batch Onboarding Cut</div>
          </div>
        </div>

        {/* Editorial Narrative */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Transforming Beginners into Builders
          </h2>
          <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
            Since early 2021, parallel to his role as Chief Technology Officer, Veena Vikas has directed **Data Analytics & Full-Stack (MERN) training cohorts** at Digital IT Hub. Over these four years of online and in-person instruction, his designed syllabus has equipped over **200+ students** with standard industrial engineering capabilities.
          </p>
          <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
            By designing and structuring full-scale curricula from the ground up, he takes complete beginners and trains them on **Python script optimization, complex SQL database schema design, and responsive React web engineering**. To bridge the academic gap, his curriculum incorporates live code reviews, rigorous mock interviews, and automated onboarding repositories, reducing initial batch onboarding timelines by **30%**.
          </p>
        </section>

        {/* Cohort Curriculum Syllabus Cards */}
        <section aria-labelledby="curriculumHeading">
          <h2 id="curriculumHeading" style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "24px", fontSize: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Structured Training Cohorts
          </h2>
          
          <div className="syllabus-container">
            {/* Card 1: MERN Stack */}
            <div className="syllabus-card">
              <div className="syllabus-header">
                <span className="syllabus-icon">💻</span>
                <h3 className="syllabus-title">MERN Full-Stack</h3>
                <span className="syllabus-weeks">16 Weeks · Industry Scoped</span>
              </div>
              <ul className="syllabus-list">
                <li><span className="topic">React.js & <em>Vite Integration</em></span><span className="hours">40 Hours</span></li>
                <li><span className="topic">Node & Express APIs</span><span className="hours">30 Hours</span></li>
                <li><span className="topic">Relational & NoSQL (MySQL/Mongo)</span><span className="hours">30 Hours</span></li>
                <li><span className="topic">Secure JWT Auth & Rules</span><span className="hours">20 Hours</span></li>
                <li><span className="topic">AWS EC2/S3 Host Deployments</span><span className="hours">25 Hours</span></li>
              </ul>
              <span className="placement-badge">82% Verified Placements</span>
            </div>

            {/* Card 2: Data Analytics */}
            <div className="syllabus-card" style={{ borderColor: "rgba(255, 94, 26, 0.08)" }}>
              <div className="syllabus-header">
                <span className="syllabus-icon" style={{ filter: "hue-rotate(120deg)" }}>📈</span>
                <h3 className="syllabus-title" style={{ color: "var(--text-white)" }}>Data Analytics</h3>
                <span className="syllabus-weeks" style={{ color: "var(--accent-orange)" }}>12 Weeks · Data Centric</span>
              </div>
              <ul className="syllabus-list">
                <li><span className="topic">Python (<em>Pandas & NumPy</em>)</span><span className="hours">35 Hours</span></li>
                <li><span className="topic">Advanced SQL Queries</span><span className="hours">30 Hours</span></li>
                <li><span className="topic">Analytical Reports & Dashboards</span><span className="hours">25 Hours</span></li>
                <li><span className="topic">Data Scrubbing & Isolation</span><span className="hours">20 Hours</span></li>
                <li><span className="topic">Git Project Versioning</span><span className="hours">15 Hours</span></li>
              </ul>
              <span className="placement-badge" style={{ background: "rgba(255, 94, 26, 0.15)", border: "1px solid rgba(255, 94, 26, 0.3)", color: "var(--accent-orange)" }}>
                78% Verified Placements
              </span>
            </div>

            {/* Card 3: Agentic AI */}
            <div className="syllabus-card" style={{ borderColor: "rgba(6, 182, 212, 0.08)" }}>
              <div className="syllabus-header">
                <span className="syllabus-icon" style={{ filter: "hue-rotate(240deg)" }}>🤖</span>
                <h3 className="syllabus-title">Agentic AI</h3>
                <span className="syllabus-weeks" style={{ color: "var(--accent-teal)" }}>8 Weeks · Cutting Edge</span>
              </div>
              <ul className="syllabus-list">
                <li><span className="topic">LLM APIs (<em>Groq & LLaMA</em>)</span><span className="hours">20 Hours</span></li>
                <li><span className="topic">Prompt Design Standards</span><span className="hours">15 Hours</span></li>
                <li><span className="topic">FastAPI & Flask Streams</span><span className="hours">25 Hours</span></li>
                <li><span className="topic">pgvector & RAG Indexing</span><span className="hours">30 Hours</span></li>
                <li><span className="topic">CrewAI & Agent Swarms</span><span className="hours">20 Hours</span></li>
              </ul>
              <span className="placement-badge" style={{ background: "rgba(6, 182, 212, 0.15)", border: "1px solid rgba(6, 182, 212, 0.3)", color: "var(--accent-teal)" }}>
                Active Cohort 2026
              </span>
            </div>
          </div>
        </section>

        {/* Student Placements success directory */}
        <section aria-labelledby="placementsHeading" style={{ marginTop: "60px" }}>
          <h2 id="placementsHeading" style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "16px", fontSize: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Student Success Directory
          </h2>
          <p style={{ color: "var(--text-gold-dust)", fontSize: "14px", marginBottom: "32px", maxWidth: "800px" }}>
            Below is a dynamic index tracking verified placement success stories from Veena Vikas B's professional cohorts. Filter by training stream or search by role/company.
          </p>

          {/* Directory Filtering Controls */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
            {/* Filter Buttons */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["All", "MERN Full-Stack", "Data Analytics", "AI Engineering"].map((cohortName) => (
                <button
                  key={cohortName}
                  onClick={() => setFilter(cohortName)}
                  style={{
                    background: filter === cohortName ? "var(--accent-gold)" : "rgba(255,255,255,0.03)",
                    border: filter === cohortName ? "1px solid var(--accent-gold)" : "1px solid rgba(255,255,255,0.08)",
                    color: filter === cohortName ? "var(--bg-onyx)" : "var(--text-gold-dust)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontWeight: filter === cohortName ? "bold" : "normal"
                  }}
                >
                  {cohortName}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div>
              <input
                type="text"
                placeholder="Search student, role, company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: "var(--bg-mahogany)",
                  border: "1px solid rgba(184, 134, 11, 0.25)",
                  color: "var(--text-cream)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "13px",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  outline: "none",
                  width: "250px",
                  transition: "all 0.3s ease"
                }}
              />
            </div>
          </div>

          {/* Placements Table/Grid */}
          <div style={{ background: "var(--card-glass)", border: "1px solid rgba(184, 134, 11, 0.15)", borderRadius: "8px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-cream)", fontSize: "14px", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "rgba(184, 134, 11, 0.06)", borderBottom: "1px solid rgba(184, 134, 11, 0.15)", color: "var(--accent-gold)", fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  <th style={{ padding: "16px 20px" }}>ID</th>
                  <th style={{ padding: "16px 20px" }}>Student Name</th>
                  <th style={{ padding: "16px 20px" }}>Placed Role</th>
                  <th style={{ padding: "16px 20px" }}>Company</th>
                  <th style={{ padding: "16px 20px" }}>Training Cohort</th>
                  <th style={{ padding: "16px 20px" }}>Package Offered</th>
                  <th style={{ padding: "16px 20px" }}>Verification</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlacements.length > 0 ? (
                  filteredPlacements.map((student) => (
                    <tr key={student.id} style={{ borderBottom: "1px solid rgba(184, 134, 11, 0.1)", transition: "background 0.3s ease" }} className="table-row-hover">
                      <td style={{ padding: "16px 20px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-gold-dust)" }}>{student.id}</td>
                      <td style={{ padding: "16px 20px", fontWeight: "bold", color: "var(--text-white)" }}>{student.name}</td>
                      <td style={{ padding: "16px 20px" }}>{student.role}</td>
                      <td style={{ padding: "16px 20px", color: "var(--accent-gold)" }}>{student.company}</td>
                      <td style={{ padding: "16px 20px", fontSize: "13px" }}>{student.cohort}</td>
                      <td style={{ padding: "16px 20px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-teal)", fontWeight: "bold" }}>{student.package}</td>
                      <td style={{ padding: "16px 20px" }}>
                        <span 
                          className="placement-badge" 
                          style={{ 
                            fontSize: "9px", 
                            background: student.status === "Verified Placement" ? "rgba(4, 120, 87, 0.15)" : "rgba(255, 94, 26, 0.1)", 
                            borderColor: student.status === "Verified Placement" ? "rgba(4, 120, 87, 0.3)" : "rgba(255, 94, 26, 0.2)",
                            color: student.status === "Verified Placement" ? "var(--accent-emerald)" : "var(--accent-orange)"
                          }}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} style={{ padding: "40px 20px", textAlign: "center", color: "var(--text-gold-dust)", fontStyle: "italic" }}>
                      No verified matching placement records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
