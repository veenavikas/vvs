"use client";

import { useState, useEffect, useRef } from "react";

const INITIAL_LOGS = [
  "⚡ vvb-cto-console v2.0.26 initialized",
  "📡 AWS EC2 Node: Visakhapatnam-South-1 (Online)",
  "📊 DB Status: RDS MySQL connection established",
  "🤖 RAG Engine: LexAI Precedent Model loaded",
  "✨ System ready. Open console for execution.",
];

const EXTRA_LOGS = [
  "✔ Ingested 5,000 precedents for Indian Supreme Court precedents",
  "📡 Ping to EC2 instance: 38ms (routing stable)",
  "🔥 Running local model: Ollama Llama-3-8B active",
  "📈 Placement tracker: 3 students placed this week",
  "📊 Cache hit rate: 94.2% on regional WhatsApp workflows",
  "🛡 RAG security filter: zero anomalies detected",
  "🚀 Fleet monitor: SegoAuto fleet reports stable GPS feeds",
];

export default function CommandCenter() {
  const [logs, setLogs] = useState<string[]>(INITIAL_LOGS);
  const [latency, setLatency] = useState<string>("34ms");
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [isIngesting, setIsIngesting] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const [toasts, setToasts] = useState<{ id: string; message: string; icon: string }[]>([]);

  const showToast = (message: string, icon: string) => {
    const newToast = { id: Math.random().toString(), message, icon };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  // Auto-scroll terminal logs
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Periodic log simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = EXTRA_LOGS[Math.floor(Math.random() * EXTRA_LOGS.length)];
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLogs((prev) => [...prev.slice(-8), `[${timestamp}] ${randomLog}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Ping handler
  const handlePing = () => {
    if (isPinging) return;
    setIsPinging(true);
    setLogs((prev) => [...prev, "📡 Pinging AWS EC2 Node South-1..."]);
    setTimeout(() => {
      const newLat = `${Math.floor(Math.random() * 25) + 20}ms`;
      setLatency(newLat);
      setLogs((prev) => [...prev, `✔ AWS Response received: ${newLat} (optimal)`]);
      setIsPinging(false);
      showToast(`AWS Connection stable: latency is ${newLat}`, "📡");
    }, 1200);
  };

  // LexAI Pre-fetch handler
  const handleIngest = () => {
    if (isIngesting) return;
    setIsIngesting(true);
    setProgress(0);
    setLogs((prev) => [...prev, "⚙ Triggering LexAI Precedent Ingest pipeline..."]);
    
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setLogs((prev) => [...prev, "✔ LexAI precedent ingestion completed. Precedents optimized."]);
          setIsIngesting(false);
          showToast("LexAI precedents mapped to pgvector store successfully!", "⚙");
          return 100;
        }
        return old + 20;
      });
    }, 300);
  };

  return (
    <div className="console-wrapper reveal reveal-delay-3" id="ctoConsole">
      {/* Tab Header mimicking macOS terminal */}
      <div className="console-header">
        <div className="console-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="console-tab-title">vvb-cto-console ~ aws-node</div>
        <div className="console-status-indicator">
          <span className="live-pulse"></span>
          <span className="live-label">LIVE</span>
        </div>
      </div>

      {/* Terminal View */}
      <div className="console-body">
        <div className="console-log-area">
          {logs.map((log, idx) => (
            <div key={idx} className="console-log-line">
              {log}
            </div>
          ))}
          {isIngesting && (
            <div className="console-progress-line">
              <span>Ingestion status: </span>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span> {progress}%</span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Interactive Controls & KPIs */}
      <div className="console-controls">
        <button 
          onClick={handlePing} 
          disabled={isPinging}
          className="console-btn"
          aria-label="Ping AWS Nodes"
        >
          {isPinging ? "Pinging..." : `Ping AWS (${latency})`}
        </button>
        <button 
          onClick={handleIngest} 
          disabled={isIngesting}
          className="console-btn btn-ai"
          aria-label="Pre-fetch Precedents"
        >
          {isIngesting ? `Ingesting...` : "LexAI Pre-fetch"}
        </button>
      </div>

      {/* Dashboard Metrics inside Console Wrapper */}
      <div className="console-dashboard" aria-label="Key Performance Indicators">
        <div className="console-metric">
          <div className="metric-header">
            <span className="metric-num">50+</span>
            <span className="metric-label">Products</span>
          </div>
          <div className="metric-bar-bg"><div className="metric-bar-fill orange-bar" style={{ width: "95%" }}></div></div>
        </div>
        <div className="console-metric">
          <div className="metric-header">
            <span className="metric-num">200+</span>
            <span className="metric-label">Students</span>
          </div>
          <div className="metric-bar-bg"><div className="metric-bar-fill gold-bar" style={{ width: "88%" }}></div></div>
        </div>
        <div className="console-metric">
          <div className="metric-header">
            <span className="metric-num">80%</span>
            <span className="metric-label">Placements</span>
          </div>
          <div className="metric-bar-bg"><div className="metric-bar-fill emerald-bar" style={{ width: "80%" }}></div></div>
        </div>
      </div>

      {/* Glassmorphic Toast Portal (Fixed Viewport Layout) */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span className="toast-icon">{toast.icon}</span>
            <span className="toast-message">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
