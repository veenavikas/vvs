"use client";

import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";

// Mock streaming data representing RAG queries and terminal outputs
interface ConsoleStream {
  prompt: string;
  logs: string[];
  output: string;
}

const mockStreams: Record<string, ConsoleStream> = {
  llama: {
    prompt: "curl -N http://127.0.0.1:5000/stream?q=Explain+Groq+Token+Speed",
    logs: [
      "[SYSTEM] Initializing Flask Dev Server on localhost:5000...",
      "[SYSTEM] Binding LLM Client to Groq LLaMA-3.3-70b-versatile...",
      "[CONNECT] WebSocket handshake complete. HTTP/1.1 200 OK",
      "[SPEED] Groq Inference engine initialized. Expected speed: ~280 tokens/sec."
    ],
    output: `The combination of **Groq's LPU (Language Processing Unit)** hardware architecture and **LLaMA 3.3 70B** provides near-instantaneous token generation.

By streaming responses over **Flask server-sent events (SSE)**, tokens are rendered in the client browser at the exact millisecond they are generated on-chip.

**Performance Metrics:**
- *Time to First Token (TTFT):* **85ms**
- *Average throughput:* **275 tokens/sec**
- *Memory efficiency:* *92% cache utilization*

\`\`\`python
# Flask streaming helper snippet
@app.route('/stream')
def stream_response():
    def generate():
        response = groq.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": request.args.get('q')}],
            stream=True
        )
        for chunk in response:
            yield f"data: {chunk.choices[0].delta.content}\\n\\n"
    return Response(generate(), mimetype='text/event-stream')
\`\`\`
`
  },
  lexai: {
    prompt: "python rag_pipeline.py --index lex_precedents --query 'Landlord-Tenant dispute AP Rent Control Act'",
    logs: [
      "[RAG-INDEX] Connecting to pgvector PostgreSQL store...",
      "[RAG-INDEX] Prompt embedding computed using text-embedding-3-small (1536 dim)...",
      "[SIMILARITY] Performing cosine similarity search on index [lex_precedents]...",
      "[CONTEXT] 3 matching legal precedent paragraphs retrieved. Similarity scores: [0.89, 0.84, 0.81]...",
      "[LLM] Dispatching prompt context (1,400 tokens) to LLaMA 3.3 via Groq API..."
    ],
    output: `Based on the **Andhra Pradesh Rent Control Act**, and matching precedents retrieved from the index, here is the legal synthesis:

1. **Precedent Citation:** *Ramachandra Rao v. Venkateswara Swamy Temple (2018)*
2. **Key Doctrine:** A landlord must prove "bona fide requirement" for eviction. Telemetry from the vector store shows that *temporary shut-down of commercial activity does not invalidate* the landlord's eviction petition if intent is demonstrated.
3. **Statutory Timeline:** Section 10 of the Act mandates a 3-month statutory notice period before initiating eviction filings under standard lease breaches.

**Retrieved Chunk Citation:**
*Source: AP_RC_Act_1960.pdf#Page=42 (Chunk ID: L-982)*
> "No tenant shall be evicted, whether in execution of a decree or otherwise, except in accordance with the provisions of this Section..."
`
  },
  fincomp: {
    prompt: "node query_engine.js --db regulatory_circulars --query 'RBI outsourcing risk compliance'",
    logs: [
      "[SQL-CONN] Connecting to AWS RDS Multi-AZ instance...",
      "[FETCH] Retrieving regulatory circular index from DB...",
      "[NLP-PARSER] Running BERT key-phrase extraction on query terms...",
      "[COMPARE] Comparing query with RBI Circulars (2022-2025)...",
      "[LLM] Formatting response payload with structured guidelines compliance checkpoints..."
    ],
    output: `Under the latest **RBI Master Direction on IT Outsourcing (2024)**, the regulated entity (Bank/NBFC) holds sole responsibility for outsourcing risks. 

**Core Compliance Checklist:**
- *Data Isolation:* Multi-tenant structures (like the *Teachures LMS*) must ensure complete physical or logical separation.
- *Vendor Audit:* SegoAuto fleet systems and SaaS tools must provide audit trails and raw logs on-demand.
- *Business Continuity Plan (BCP):* Disaster recovery replication lag must remain under **15 minutes** (RPO) and **2 hours** (RTO).

**Matched Directives:**
- **RBI/2023-24/102 (CO.DPSS.POL):** Outlines third-party storage restrictions. *PII data must reside within sovereign geographic boundaries of India.*
`
  },
  salesiq: {
    prompt: "python crm_agent.py --query 'Highlight deal risk factors for Client DigitalHub'",
    logs: [
      "[ASANA-API] Pulling pipeline metrics for active sprint projects...",
      "[CRM-RAG] Fetching contract scopes from AWS S3 secure signed URLs...",
      "[OKRS] Cross-referencing delivery metrics against active developer tickets...",
      "[LLM] Analyzing client interaction logs and requirements drift..."
    ],
    output: `Analysis of **Client DigitalHub** pipeline records suggests a moderate delivery risk (Score: **35%**):

**Primary Risk Factors:**
1. **Requirements Drift:** Integration of the WhatsApp notification webhook has expanded from simple notifications to 2-way approval workflows.
2. **Resource Constraints:** The 10-member remote team is currently running at **92% utilization** across 4 concurrent projects.
3. **AWS RDS Overhead:** The MySQL DB connection pool size is averaging 80% limit during high active inventory spikes.

**Mitigation Protocol:**
- Leverage Lean Six Sigma workflows to automate deployment scripts, saving up to **40% manual time** to free up developer bandwidth.
- Trigger connection pool scaling on RDS or upgrade database instance class.
`
  },
  mediassist: {
    prompt: "python medical_citations.py --doc medical_manual_2025 --query 'Dosage guideline pediatric paracetamol'",
    logs: [
      "[FDA-API] Querying openFDA databases for pediatric thresholds...",
      "[RAG-SEARCH] Matching semantic vectors inside PDF index...",
      "[VERIFY] Checking double-pass medical citation rules...",
      "[LLM] Assembling precise peer-reviewed instructions..."
    ],
    output: `**Pediatric Paracetamol (Acetaminophen) Dosage Guidelines (2025 Standard):**

- **Standard Dose:** **10 - 15 mg/kg** per single dose.
- **Dosing Interval:** Every **4 to 6 hours** as required.
- **Maximum Daily Limit:** **60 mg/kg/day**, not to exceed **4 doses** in any 24-hour cycle.

**Regulatory Warning Check (Verified):**
- *Caution:* Hepatotoxicity risk is heightened if dosage exceeds safe limits or combined with other acetaminophen-containing medications.
- *Citation:* *IP-Pediatric-Handbook-2024, Chapter 14, p. 119.*

\`\`\`python
# Telemetry double-pass check code
def verify_safety_threshold(dose_mg, weight_kg):
    max_safe = weight_kg * 15.0
    if dose_mg > max_safe:
        raise SafetyException("Dose exceeds 15mg/kg safety limit")
    return True
\`\`\`
`
  }
};

export default function AISuitePage() {
  const [activeTab, setActiveTab] = useState<string>("llama");
  const [streamText, setStreamText] = useState<string>("");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const streamIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger streaming animation when activeTab changes
  useEffect(() => {
    // Clear existing streams
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
    }

    const currentMock = mockStreams[activeTab];
    if (!currentMock) return;

    setLogLines([]);
    setStreamText("");
    setIsStreaming(true);

    // 1. Animate logs first (simulate system logs executing fast)
    let logIndex = 0;
    const runLogs = () => {
      if (logIndex < currentMock.logs.length) {
        setLogLines((prev) => [...prev, currentMock.logs[logIndex]]);
        logIndex++;
        setTimeout(runLogs, 250);
      } else {
        // Logs finished, start text streaming (typing effect)
        startTextStream(currentMock.output);
      }
    };
    runLogs();

    return () => {
      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current);
      }
    };
  }, [activeTab]);

  const startTextStream = (fullText: string) => {
    const words = fullText.split(" ");
    let wordIndex = 0;
    let accumulatedText = "";

    streamIntervalRef.current = setInterval(() => {
      if (wordIndex < words.length) {
        accumulatedText += (wordIndex === 0 ? "" : " ") + words[wordIndex];
        setStreamText(accumulatedText);
        wordIndex++;
      } else {
        setIsStreaming(false);
        if (streamIntervalRef.current) {
          clearInterval(streamIntervalRef.current);
        }
      }
    }, 45); // Typing speed
  };

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
        <div className="lens-flare" aria-hidden="true" style={{ top: "35%" }} />
        <div className="ambient-glow-1" aria-hidden="true" style={{ top: "15%", left: "5%", background: "radial-gradient(circle, rgba(255, 94, 26, 0.06) 0%, transparent 70%)" }} />

        {/* Page Headings */}
        <section aria-labelledby="aiTitle">
          <h1 className="page-title" id="aiTitle">AI R&D Suite</h1>
          <p className="page-subtitle">Advancing into Agentic AI Engineering. Deploying streaming tokens and RAG search pipelines.</p>
        </section>

        {/* Editorial Layout Grid */}
        <div className="editorial-grid">
          {/* Left Column: Tech spec summary & AI Journey */}
          <article>
            <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              The AI Engineering Journey
            </h2>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
              Moving beyond standard full-stack development, Veena Vikas is actively training in <strong>Agentic AI Engineering</strong>. His active focus lies in orchestrating deep Retrieval-Augmented Generation (RAG) ecosystems, multi-agent frameworks (such as CrewAI), and lightning-fast streaming API nodes.
            </p>
            <p style={{ color: "var(--text-cream)", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
              His Day 3 milestone project successfully shipped a streaming web application using a **Flask backend and Groq's LLaMA 3.3 70B versatile API**. By streaming inference responses token-by-token directly inside client browsers, he has achieved extremely low Time to First Token metrics, bypassing standard loading delay thresholds.
            </p>

            {/* R&D Architecture Details */}
            <div className="product-arch-card" style={{ padding: "24px", marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                Technical Architecture Spec
              </h3>
              <ul style={{ color: "var(--text-cream)", fontSize: "14px", lineHeight: "1.8", paddingLeft: "20px", marginBottom: "0" }}>
                <li><strong>LLM Provider:</strong> Groq API Node (LLaMA-3.3-70b-versatile, Mixtral-8x7b-instruct)</li>
                <li><strong>Vector Database:</strong> pgvector (PostgreSQL) & ChromaDB for lightning search mapping</li>
                <li><strong>Streaming Engine:</strong> Python FastAPI & Flask Server-Sent Events (SSE)</li>
                <li><strong>Agentic Frameworks:</strong> LangChain, CrewAI agent execution layers, prompt-templating</li>
                <li><strong>Performance:</strong> ~275 tokens/second average generation rate</li>
              </ul>
            </div>

            {/* Four Vertical RAG Guides Summary */}
            <h3 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "16px", fontSize: "18px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              High-Value RAG Implementations
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "40px" }}>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.03)" }}>
                <h4 style={{ color: "var(--accent-gold)", fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", marginBottom: "6px" }}>1. LexAI Legal Search</h4>
                <p style={{ color: "var(--text-gold-dust)", fontSize: "13px", lineHeight: "1.4" }}>Retrieves and synthesizes judicial precedents, providing precise case citations and page references from local databases.</p>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.03)" }}>
                <h4 style={{ color: "var(--accent-orange)", fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", marginBottom: "6px" }}>2. FinCompAI Regulations</h4>
                <p style={{ color: "var(--text-gold-dust)", fontSize: "13px", lineHeight: "1.4" }}>Queries central bank circulars (RBI/SEBI) to provide compliance checklists and outsourcing guidelines for multi-tenant software.</p>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.03)" }}>
                <h4 style={{ color: "var(--accent-teal)", fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", marginBottom: "6px" }}>3. SalesIQ CRM Agent</h4>
                <p style={{ color: "var(--text-gold-dust)", fontSize: "13px", lineHeight: "1.4" }}>Integrates active pipeline data from Asana and contract records to forecast project scoping parameters and delivery risks.</p>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.03)" }}>
                <h4 style={{ color: "rgba(132, 169, 134, 1)", fontSize: "14px", fontFamily: "var(--font-mono)", textTransform: "uppercase", marginBottom: "6px" }}>4. MediAssist Citations</h4>
                <p style={{ color: "var(--text-gold-dust)", fontSize: "13px", lineHeight: "1.4" }}>Extracts dosage guidelines and clinical references, employing double-pass safety checks before output generation.</p>
              </div>
            </div>
          </article>

          {/* Right Column: Dynamic Terminal Playroom */}
          <aside>
            <h2 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", marginBottom: "20px", fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Live RAG Simulation
            </h2>
            <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6" }}>
              Select a command query block below to trigger our simulated LLM inference terminal. Watch real-time logs ingestion and token stream responses.
            </p>

            {/* Interactive Terminal */}
            <div className="ai-console-wrapper" aria-label="Interactive AI Terminal Console">
              <div className="ai-console-header">
                <div className="console-dots">
                  <div className="console-dot red" />
                  <div className="console-dot yellow" />
                  <div className="console-dot green" />
                </div>
                <div className="console-title">VVB_ENGINE_CONSOLE v1.0.4</div>
              </div>

              <div className="ai-console-body">
                <div className="console-prompt-line">
                  $ {mockStreams[activeTab]?.prompt}
                </div>

                {logLines.length > 0 && (
                  <div className="console-logs">
                    {logLines.map((line, idx) => (
                      <div key={idx} style={{ marginBottom: "4px" }}>{line}</div>
                    ))}
                  </div>
                )}

                <div className="console-stream-text">
                  {streamText}
                  {isStreaming && (
                    <span className="blinking-cursor" style={{ display: "inline-block", width: "8px", height: "15px", background: "var(--accent-orange)", marginLeft: "4px", animation: "blink 1s step-start infinite" }}></span>
                  )}
                </div>
              </div>

              <div className="console-actions-bar">
                <button 
                  className={`console-action-btn ${activeTab === "llama" ? "active" : ""}`}
                  onClick={() => setActiveTab("llama")}
                  disabled={isStreaming}
                >
                  Flask + Groq Stream
                </button>
                <button 
                  className={`console-action-btn ${activeTab === "lexai" ? "active" : ""}`}
                  onClick={() => setActiveTab("lexai")}
                  disabled={isStreaming}
                >
                  LexAI Legal RAG
                </button>
                <button 
                  className={`console-action-btn ${activeTab === "fincomp" ? "active" : ""}`}
                  onClick={() => setActiveTab("fincomp")}
                  disabled={isStreaming}
                >
                  FinCompAI RBI
                </button>
                <button 
                  className={`console-action-btn ${activeTab === "salesiq" ? "active" : ""}`}
                  onClick={() => setActiveTab("salesiq")}
                  disabled={isStreaming}
                >
                  SalesIQ CRM
                </button>
                <button 
                  className={`console-action-btn ${activeTab === "mediassist" ? "active" : ""}`}
                  onClick={() => setActiveTab("mediassist")}
                  disabled={isStreaming}
                >
                  MediAssist RAG
                </button>
              </div>
            </div>
            
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "16px", textAlign: "right" }}>
              Active Repo: <a href="https://github.com/veenavikas/ai-engineering" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)" }}>veenavikas/ai-engineering ↗</a>
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}
