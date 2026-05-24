import React from "react";
import Header from "@/components/Header";

export default function ProductsPage() {
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
        <div className="lens-flare" aria-hidden="true" style={{ top: "45%" }} />
        <div className="ambient-glow-2" aria-hidden="true" style={{ top: "40%", right: "10%", background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)" }} />

        {/* Page Headings */}
        <section aria-labelledby="productsTitle">
          <h1 className="page-title" id="productsTitle">Flagship Portfolio</h1>
          <p className="page-subtitle">Production platforms shipped to real users. Architected for speed, scale, and high availability.</p>
        </section>

        {/* 1. THE SWAADAM ARCHITECTURE CARD */}
        <section aria-labelledby="swaadamHeading">
          <div className="product-arch-card">
            <div className="arch-header">
              <div className="arch-title-group">
                <span className="placement-badge" style={{ marginBottom: "8px" }}>COMMERCIAL RELEASE</span>
                <h3 id="swaadamHeading">The Swaadam</h3>
                <p>B2C FMCG E-Commerce Platform · Deployed on AWS</p>
              </div>
              <a href="https://theswaadam.com" target="_blank" rel="noopener noreferrer" className="arch-link">
                Visit Live Site ↗
              </a>
            </div>

            <div className="arch-layout-grid">
              <div>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  A full-scale B2C FMCG e-commerce platform engineered to handle high transaction volumes with live inventory management. Designed from scratch to replace restrictive Shopify templates, providing a bespoke, lightning-fast ordering pipeline.
                </p>
                <div className="product-tech" style={{ margin: "16px 0 24px" }} aria-label="Technologies used">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">AWS EC2</span>
                  <span className="tech-tag">AWS RDS</span>
                  <span className="tech-tag">AWS S3</span>
                  <span className="tech-tag">Tailwind CSS</span>
                </div>
                
                <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  System Achievements & Stats
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                  <div style={{ background: "rgba(255,255,255,0.45)", padding: "12px", borderRadius: "6px", border: "1px solid var(--glass-border)", boxShadow: "var(--box-shadow-flat)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-orange)", fontSize: "20px", fontWeight: "bold" }}>100+</div>
                    <div style={{ color: "var(--text-gold-dust)", fontSize: "11px", textTransform: "uppercase", marginTop: "2px" }}>Daily Orders</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.45)", padding: "12px", borderRadius: "6px", border: "1px solid var(--glass-border)", boxShadow: "var(--box-shadow-flat)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-indigo)", fontSize: "20px", fontWeight: "bold" }}>10k+</div>
                    <div style={{ color: "var(--text-gold-dust)", fontSize: "11px", textTransform: "uppercase", marginTop: "2px" }}>Monthly Visits</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.45)", padding: "12px", borderRadius: "6px", border: "1px solid var(--glass-border)", boxShadow: "var(--box-shadow-flat)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "20px", fontWeight: "bold" }}>&lt; 150ms</div>
                    <div style={{ color: "var(--text-gold-dust)", fontSize: "11px", textTransform: "uppercase", marginTop: "2px" }}>API Latency</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="arch-visual-flow">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    AWS Deployment Architecture
                  </div>
                  <div className="arch-flow-node highlight">React / Vite SPA (Served via CloudFront)</div>
                  <div className="arch-flow-node">Express.js API Node (AWS EC2 Autoscaling Group)</div>
                  <div className="arch-flow-node highlight">Live MySQL Ingestion (AWS RDS Multi-AZ)</div>
                  <div className="arch-flow-node">Asset Repository (AWS S3 + Secure Signed URLs)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TEACHURES ARCHITECTURE CARD */}
        <section aria-labelledby="teachuresHeading">
          <div className="product-arch-card">
            <div className="arch-header">
              <div className="arch-title-group">
                <span className="placement-badge" style={{ marginBottom: "8px", background: "rgba(6, 182, 212, 0.15)", border: "1px solid rgba(6, 182, 212, 0.3)", color: "var(--accent-teal)" }}>ENTERPRISE MULTI-TENANT</span>
                <h3 id="teachuresHeading">Teachures</h3>
                <p>White-Label SaaS Learning Management System (LMS)</p>
              </div>
              <a href="https://teachures.com" target="_blank" rel="noopener noreferrer" className="arch-link">
                Visit LMS Hub ↗
              </a>
            </div>

            <div className="arch-layout-grid">
              <div>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  Architected and shipped a multi-tenant Learning Management System (LMS) serving multiple educational institutions from a <strong>single unified codebase</strong>. Engineered robust role-based access control and tenant isolation algorithms to eliminate cross-tenant data leakage risks.
                </p>
                <div className="product-tech" style={{ margin: "16px 0 24px" }} aria-label="Technologies used">
                  <span className="tech-tag">Multi-Tenant</span>
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MySQL Pools</span>
                  <span className="tech-tag">White-Labeling</span>
                  <span className="tech-tag">AWS Route 53</span>
                </div>

                <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Tenant Separation Mechanism Mockup
                </h4>
                <pre style={{ background: "rgba(255,255,255,0.65)", padding: "16px", borderRadius: "6px", fontSize: "11px", color: "var(--accent-indigo)", border: "1px solid var(--glass-border)", overflowX: "auto", fontFamily: "var(--font-mono)", boxShadow: "var(--box-shadow-flat)" }}>
{`// Express.js middleware resolver for subdomains
export async function tenantResolver(req, res, next) {
  const host = req.headers.host; // e.g., oxford.teachures.com
  const subdomain = host.split('.')[0];
  
  const tenant = await db.query(
    "SELECT id, settings, active_modules FROM tenants WHERE subdomain = ?", 
    [subdomain]
  );
  
  if (!tenant) return res.status(404).send("LMS Node Not Found");
  
  req.tenantId = tenant.id;
  req.tenantConfig = JSON.parse(tenant.settings);
  next();
}`}
                </pre>
              </div>

              <div>
                <div className="arch-visual-flow">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    White-Label Tenant Features
                  </div>
                  <div className="arch-flow-node">DNS Mapping ( oxford.teachures.com )</div>
                  <div className="arch-flow-node highlight">Dynamic Logo & Color Palette Assets Injection</div>
                  <div className="arch-flow-node">Custom Feature Flags (Live Class, Quizzes, Grading)</div>
                  <div className="arch-flow-node highlight">Isolated Database Tenant Pooling Rules</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. POSTWISE INDIA ARCHITECTURE CARD */}
        <section aria-labelledby="postwiseHeading">
          <div className="product-arch-card">
            <div className="arch-header">
              <div className="arch-title-group">
                <span className="placement-badge" style={{ marginBottom: "8px" }}>AI & AGENT WORKFLOW</span>
                <h3 id="postwiseHeading">PostWise India</h3>
                <p>Regional NLP Platform with WhatsApp Approval Pipeline</p>
              </div>
            </div>

            <div className="arch-layout-grid">
              <div>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  An AI-powered content marketing utility that automatically adapts copywriting tone specifically for LinkedIn, Twitter, and Instagram. Integrates Hindi + Telugu translation models natively. 
                </p>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  Solves a major bottleneck for marketing agencies by introducing an automated <strong>WhatsApp client-approval workflow</strong>. When drafts are generated, they are pushed to the client's WhatsApp; they approve with a single tap, reducing approval times from 24 hours to under 1 hour.
                </p>
                <div className="product-tech" style={{ margin: "16px 0 24px" }} aria-label="Technologies used">
                  <span className="tech-tag">AI/NLP Translation</span>
                  <span className="tech-tag">WhatsApp Business API</span>
                  <span className="tech-tag">Tone Adapters</span>
                  <span className="tech-tag">Hindi & Telugu Models</span>
                  <span className="tech-tag">White-Label Reseller</span>
                </div>
              </div>

              <div>
                <div className="arch-visual-flow">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    NLP Content & Approval Flow
                  </div>
                  <div className="arch-flow-node highlight">User Draft Input (Web Console)</div>
                  <div className="arch-flow-node">NLP Transformer (LinkedIn / Twitter Tone Splitter)</div>
                  <div className="arch-flow-node highlight">Translate engine (Telugu / Hindi Dialect conversion)</div>
                  <div className="arch-flow-node">WhatsApp Message Send (Twilio API Gateway)</div>
                  <div className="arch-flow-node highlight">Instant Callback Webhook (Draft Approved / Rejected)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SEGOAUTO ARCHITECTURE CARD */}
        <section aria-labelledby="segoautoHeading">
          <div className="product-arch-card">
            <div className="arch-header">
              <div className="arch-title-group">
                <span className="placement-badge" style={{ marginBottom: "8px", background: "rgba(92, 122, 94, 0.15)", border: "1px solid rgba(92, 122, 94, 0.3)", color: "#84a986" }}>HARDWARE CLOUD MAPPING</span>
                <h3 id="segoautoHeading">SegoAuto</h3>
                <p>API-Key Based Live Fleet Vehicle Tracking System</p>
              </div>
            </div>

            <div className="arch-layout-grid">
              <div>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  A secure, real-time fleet vehicle tracking panel integrated into live commercial websites. Employs hardware-secure API key authentication to authorize telemetry polling, updating maps in real-time.
                </p>
                <div className="product-tech" style={{ margin: "16px 0 24px" }} aria-label="Technologies used">
                  <span className="tech-tag">GPS Live Polling</span>
                  <span className="tech-tag">Telemetry API</span>
                  <span className="tech-tag">Leaflet Maps</span>
                  <span className="tech-tag">Secure Auth Token</span>
                  <span className="tech-tag">Node.js Webhook</span>
                </div>

                <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Secure GPS telemetry Schema
                </h4>
                <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-cream)", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", color: "var(--accent-gold)", textAlign: "left" }}>
                      <th style={{ padding: "8px 0" }}>Parameter</th>
                      <th style={{ padding: "8px 0" }}>Type</th>
                      <th style={{ padding: "8px 0" }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontFamily: "var(--font-mono)", fontSize: "12px" }}>vehicle_id</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>VARCHAR(36)</td>
                      <td style={{ padding: "8px 0" }}>Unique device UUID</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontFamily: "var(--font-mono)", fontSize: "12px" }}>latitude</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>DECIMAL(9,6)</td>
                      <td style={{ padding: "8px 0" }}>Current Latitude coordinate</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontFamily: "var(--font-mono)", fontSize: "12px" }}>longitude</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>DECIMAL(9,6)</td>
                      <td style={{ padding: "8px 0" }}>Current Longitude coordinate</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontFamily: "var(--font-mono)", fontSize: "12px" }}>speed_kmh</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>FLOAT</td>
                      <td style={{ padding: "8px 0" }}>Live speed indicator</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="arch-visual-flow">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    Telemetry Tracking Flow
                  </div>
                  <div className="arch-flow-node">Onboard Hardware GPS Module</div>
                  <div className="arch-flow-node highlight">GPRS Packet transmit (UDP Protocol)</div>
                  <div className="arch-flow-node">Decryption & Verification API Gateway</div>
                  <div className="arch-flow-node highlight">Real-time Map updates (Leaflet Render)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LENDAI ARCHITECTURE CARD */}
        <section aria-labelledby="lendaiHeading">
          <div className="product-arch-card" style={{ borderColor: "rgba(255, 94, 26, 0.15)", marginTop: "40px" }}>
            <div className="arch-header">
              <div className="arch-title-group">
                <span className="placement-badge" style={{ marginBottom: "8px", background: "rgba(255, 94, 26, 0.15)", border: "1px solid rgba(255, 94, 26, 0.3)", color: "var(--accent-orange)" }}>AI-NATIVE UNDERWRITING</span>
                <h3 id="lendaiHeading">LendAI</h3>
                <p>AI Credit Underwriting Engine for Indian NBFCs · Regulation Grounded</p>
              </div>
            </div>

            <div className="arch-layout-grid">
              <div>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  An AI-native credit decisioning engine built to replace manual credit appraisal loops for RBI-regulated Indian NBFCs. Automatically parses uploaded bank statement transcripts, ITR tax filings, GST records, and CIBIL bureau files to synthesize an evidence-backed, auditable credit memo.
                </p>
                <p style={{ color: "var(--text-cream)", fontSize: "15px", lineHeight: "1.6", marginBottom: "16px" }}>
                  Integrates deep **pgvector semantic search** (using **Voyage Finance-2** financial embeddings) to pull relevant clauses from internal credit guidelines and RBI Master Directions, grounding the LLM's final decision in rigid compliance boundaries and eliminating hallucinations. Approved loans are routed directly to the **Stitch API** for automated ledger creation and repayment schedule generation.
                </p>
                
                <div className="product-tech" style={{ margin: "16px 0 24px" }} aria-label="Technologies used">
                  <span className="tech-tag">Claude 3.5 Sonnet</span>
                  <span className="tech-tag">pgvector RAG</span>
                  <span className="tech-tag">Voyage Finance-2</span>
                  <span className="tech-tag">Stitch Core API</span>
                  <span className="tech-tag">FastAPI</span>
                  <span className="tech-tag">JSON Credit Memo</span>
                </div>

                <h4 style={{ fontFamily: "var(--font-sans)", color: "var(--text-white)", fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Compliance Risk Appraisal Matrix
                </h4>
                
                <table style={{ width: "100%", borderCollapse: "collapse", color: "var(--text-cream)", fontSize: "13px", marginBottom: "24px" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", color: "var(--accent-gold)", textAlign: "left" }}>
                      <th style={{ padding: "8px 0" }}>Dimension</th>
                      <th style={{ padding: "8px 0" }}>Weight</th>
                      <th style={{ padding: "8px 0" }}>Scoping Parameters Evaluated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontWeight: "bold" }}>Bureau Score</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>30%</td>
                      <td style={{ padding: "8px 0" }}>CIBIL rating bands, existing loan count, DPD records</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontWeight: "bold" }}>Income Stability</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>25%</td>
                      <td style={{ padding: "8px 0" }}>Inflow/outflow standard deviation, minimum closing balances</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontWeight: "bold" }}>Debt Service Ratio</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>20%</td>
                      <td style={{ padding: "8px 0" }}>Total obligations (Existing + New EMI) vs Net Income (&lt; 40%)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontWeight: "bold" }}>Business Vintage</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>15%</td>
                      <td style={{ padding: "8px 0" }}>GST registration timeline, historical ITR regularities</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
                      <td style={{ padding: "8px 0", fontWeight: "bold" }}>Document Quality</td>
                      <td style={{ padding: "8px 0", color: "var(--accent-cyan)" }}>10%</td>
                      <td style={{ padding: "8px 0" }}>Cross-doc consistency check, sudden balance spikes checks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="arch-visual-flow">
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-gold)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>
                    LendAI Underwriting Pipeline
                  </div>
                  <div className="arch-flow-node highlight">Upload Borrower Documents (Bank Statements, CIBIL, GST, ITR)</div>
                  <div className="arch-flow-node">Voyage Finance-2 Embedding + Cosine Search on pgvector</div>
                  <div className="arch-flow-node highlight">Inject Relevant RBI Master Directions & Credit Policy [RAG CONTEXT]</div>
                  <div className="arch-flow-node">Prompt Evaluation (Apply Hard Reject filters, Risk Weighting)</div>
                  <div className="arch-flow-node highlight">Emit Structured JSON Credit Memo Decision (Under 5 Minutes)</div>
                  <div className="arch-flow-node">Trigger repayment ledger schedule on Core Banking (Stitch API)</div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.55)", padding: "16px", borderRadius: "8px", border: "1px solid var(--glass-border)", marginTop: "24px", boxShadow: "var(--box-shadow-flat)" }}>
                  <h4 style={{ fontFamily: "var(--font-mono)", color: "var(--accent-gold)", fontSize: "12px", textTransform: "uppercase", marginBottom: "8px" }}>Pilot Efficacy Metrics</h4>
                  <ul style={{ color: "var(--text-cream)", fontSize: "12px", lineHeight: "1.6", paddingLeft: "16px", margin: 0 }}>
                    <li><strong>Decision Latency:</strong> &lt; 5 minutes (vs 3-7 days manual)</li>
                    <li><strong>Human Officer Agreement:</strong> &gt; 85% on matching files</li>
                    <li><strong>Decision Cost:</strong> &lt; ₹50 per file (vs ₹800-2,000 manual time)</li>
                    <li><strong>False Approvals (NPA risk):</strong> &lt; 2.0% (strict hard reject thresholds)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
