import React from "react";
import Marquee from "@/components/Marquee";
import ScrollFallbacks from "@/components/ScrollFallbacks";
import CommandCenter from "@/components/CommandCenter";

// FLAGSHIP PRODUCTS DATA
const products = [
  {
    num: "001",
    name: "The Swaadam",
    tagline: "B2C FMCG E-commerce — 100+ orders, growing daily",
    desc: "Full-featured food supply e-commerce platform built from scratch. Real orders, real users, real revenue. Deployed on AWS with React + Node + MySQL.",
    link: "https://theswaadam.com",
    tech: ["React.js", "Vite", "Node.js", "MySQL", "AWS EC2", "Tailwind"],
    external: true,
  },
  {
    num: "002",
    name: "Teachures",
    tagline: "Multi-tenant SaaS LMS — powering multiple EdTech clients",
    desc: "Architected a multi-tenant Learning Management System where multiple clients run from a single codebase. White-label ready with custom per-client optimisations.",
    link: "https://teachures.com",
    tech: ["Multi-tenant", "React.js", "Node.js", "MySQL", "White-label"],
    external: true,
  },
  {
    num: "003",
    name: "PostWise India",
    tagline: "AI content platform — Hindi · Telugu · WhatsApp-native",
    desc: "AI rewrites content in each platform's tone automatically. Regional language support for Hindi + Telugu. WhatsApp approval workflow. White-label SaaS for agencies.",
    link: "#",
    tech: ["AI/NLP", "Hindi + Telugu", "WhatsApp API", "White-label"],
    external: false,
  },
  {
    num: "004",
    name: "SegoAuto",
    tagline: "Live vehicle tracking — API-key based fleet intelligence",
    desc: "Client-facing vehicle tracking system with real-time GPS data, API key authentication, and a live map interface for fleet managers.",
    link: "#",
    tech: ["REST API", "Real-time", "Node.js", "GPS Integration"],
    external: false,
  },
];

// AI PRODUCTS DATA
const aiProducts = [
  {
    icon: "⚖️",
    name: "LexAI",
    vertical: "Legal Intelligence · In Progress",
    desc: "RAG over Supreme Court & High Court judgments. Search 4.5 crore case precedents in seconds. Built for India's 1.7M lawyers.",
    price: "₹25–80k",
    priceLabel: "per month per law firm",
  },
  {
    icon: "🏦",
    name: "FinCompAI",
    vertical: "FinTech Compliance · Planned",
    desc: "Ingests every RBI circular, SEBI regulation, and GST notification. Compliance teams ask in plain English, get cited answers in seconds.",
    price: "₹50k–2L",
    priceLabel: "per month per NBFC/bank",
  },
  {
    icon: "💼",
    name: "SalesIQ",
    vertical: "Enterprise Sales · Planned",
    desc: "RAG over CRM data, call transcripts, product docs. Sales reps get instant answers during live client calls. Never lose a deal to ignorance again.",
    price: "₹40k–1.5L",
    priceLabel: "per month per sales team",
  },
  {
    icon: "🏥",
    name: "MediAssist",
    vertical: "Clinical Intelligence · Planned",
    desc: "RAG over WHO guidelines, ICMR protocols, Indian Pharmacopoeia. Doctors get cited clinical recommendations in under 5 seconds.",
    price: "₹75k–3L",
    priceLabel: "per month per hospital",
  },
];

// SKILLS LISTS
const skillGroups = [
  {
    title: "Engineering",
    items: [
      { name: "MERN Stack", level: "Expert" },
      { name: "Next.js + TypeScript", level: "Expert" },
      { name: "AWS (EC2, S3, RDS)", level: "Advanced" },
      { name: "Python + FastAPI", level: "Advanced" },
      { name: "System Design", level: "Intermediate" },
      { name: "Docker + CI/CD", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Intelligence",
    items: [
      { name: "LLM APIs (Groq, OpenAI)", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "LangChain + RAG", level: "Building" },
      { name: "Vector Databases", level: "Building" },
      { name: "Agentic Frameworks", level: "Learning" },
      { name: "Ollama + Local LLMs", level: "Intermediate" },
    ],
  },
  {
    title: "Leadership & Product",
    items: [
      { name: "Team Leadership (10 FTEs)", level: "Expert" },
      { name: "Google PM (Certified)", level: "Certified" },
      { name: "Agile + Asana", level: "Expert" },
      { name: "Product Roadmapping", level: "Advanced" },
      { name: "Curriculum Design", level: "Expert" },
      { name: "Stakeholder Management", level: "Advanced" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Dynamic Scroll & Animation progressive fallbacks */}
      <ScrollFallbacks />

      {/* Cinematic Intro & Aspect-Ratio Bars */}
      <div className="cinema-intro" aria-hidden="true">
        <div className="cinema-intro-text">Veena Vikas B presents</div>
        <div className="cinema-intro-text">A story of building systems from scratch</div>
        <div className="cinema-intro-text">And training the developers who scale them</div>
      </div>
      <div className="cinematic-bar-top" aria-hidden="true" />
      <div className="cinematic-bar-bottom" aria-hidden="true" />

      {/* HEADER NAVIGATION */}
      <header>
        <nav aria-label="Main Navigation">
          <a href="#" className="nav-logo" id="navLogoBrand">
            VVB
          </a>
          <div className="nav-links">
            <a href="#story" id="linkStory">Story</a>
            <a href="#products" id="linkProducts">Products</a>
            <a href="#ai" id="linkAi">AI Suite</a>
            <a href="#training" id="linkTraining">Training</a>
            <a href="#contact" id="linkContact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Cinematic Atmosphere overlays */}
        <div className="cinematic-vignette" aria-hidden="true" />
        <div className="lens-flare" aria-hidden="true" />

        {/* Ambient background glows for premium colorful depth */}
        <div className="ambient-glow-1" aria-hidden="true" />
        <div className="ambient-glow-2" aria-hidden="true" />

        {/* HERO SECTION */}
        <section className="hero" id="home" aria-labelledby="heroTitle">
          <div className="hero-bg-text" aria-hidden="true">
            BUILDER
          </div>
          <div className="hero-content">
            <div className="hero-eyebrow">
              Visakhapatnam, India · Available for opportunities
            </div>
            <h1 className="hero-name" id="heroTitle">
              Veena
              <br />
              <em>Vikas B.</em>
            </h1>
            <p className="hero-title-line">
              CTO · Full Stack Engineer · AI Architect · Technical Trainer
            </p>
            <p className="hero-desc">
              I build things that <strong>actually ship</strong>. Products that serve real users,
              systems that scale, and people who grow into engineers.
              Four years of turning ideas into production.
            </p>
            <div className="available-badge" role="status">
              <span className="available-dot" aria-hidden="true"></span>
              Open to FDE · AI Engineer · Tech Lead roles
            </div>
          </div>
          
          <div className="hero-scroll" aria-hidden="true">
            <div className="hero-scroll-line"></div>
            Scroll to explore
          </div>
          
          <CommandCenter />
        </section>

        {/* INFINITE SCROLL MARQUEE */}
        <Marquee />

        {/* STORY SECTION */}
        <section className="story-section" id="story" aria-labelledby="storyHeading">
          <div className="story-left reveal">
            <div className="story-tag">The Story</div>
            <h2 className="story-headline" id="storyHeading">
              Not just a
              <br />
              developer.
              <br />
              A <em>builder.</em>
            </h2>
            <p className="story-body">
              I started at Digital IT Hub four years ago as a web developer. Today I lead
              a <strong>10-member remote engineering team</strong>, have shipped <strong>50+ production products</strong>{" "}
              across e-commerce, EdTech, AI, and automotive verticals — and trained over{" "}
              <strong>200 developers</strong> who now work at real companies.
            </p>
            <p className="story-body">
              I don't just build technology. I build the people who build technology.
              And now I'm building the AI systems that will change entire industries —
              starting with <strong>LexAI</strong>, a legal intelligence engine for India's 1.7 million lawyers.
            </p>
          </div>
          <div className="story-right reveal reveal-delay-2">
            <div className="story-card">
              <div className="story-card-quote" aria-hidden="true">
                &ldquo;
              </div>
              <p className="story-card-text">
                I don't just build technology — I lead it, deploy it, and teach it.
                The trifecta that makes a Forward Deployed Engineer.
              </p>
              <div className="story-card-author">Veena Vikas B · CTO, Digital IT Hub</div>
              <div className="story-card-accent" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP PRODUCTS SECTION */}
        <section className="products-section" id="products" aria-labelledby="productsHeading">
          <div className="products-header">
            <div className="reveal">
              <div className="products-tag">Flagship Products</div>
              <h2 className="products-headline" id="productsHeading">
                Four products.
                <br />
                <em>Real users.</em>
              </h2>
            </div>
            <div className="products-count reveal reveal-delay-2" aria-hidden="true">
              04
            </div>
          </div>
          
          <div className="products-grid">
            {products.map((product) => {
              const ItemTag = product.external ? "a" : "div";
              return (
                <ItemTag
                  key={product.num}
                  href={product.external ? product.link : undefined}
                  target={product.external ? "_blank" : undefined}
                  rel={product.external ? "noopener noreferrer" : undefined}
                  className="product-item reveal"
                  id={`productCard-${product.num}`}
                  role={product.external ? "link" : "article"}
                  tabIndex={0}
                >
                  <div className="product-num">{product.num}</div>
                  
                  {product.external ? (
                    <div className="product-link" aria-label="Visit external website">
                      ↗
                    </div>
                  ) : (
                    <div className="product-link" aria-hidden="true">
                      →
                    </div>
                  )}
                  
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-desc">{product.desc}</p>
                  
                  <div className="product-tech" aria-label="Technologies used">
                    {product.tech.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </ItemTag>
              );
            })}
          </div>
        </section>

        {/* AI SUITE SECTION */}
        <section className="ai-section" id="ai" aria-labelledby="aiHeading">
          <div className="ai-header reveal">
            <div className="ai-tag">The AI Suite · 2026</div>
            <h2 className="ai-headline" id="aiHeading">
              One engine.
              <br />
              <em>Four verticals.</em>
            </h2>
            <p className="ai-sub">
              A production-grade RAG pipeline deployed across India's highest-impact industries.
            </p>
          </div>
          
          <div className="ai-products">
            {aiProducts.map((ai, index) => (
              <div
                key={ai.name}
                className={`ai-product reveal reveal-delay-${index}`}
                id={`aiProductCard-${ai.name}`}
              >
                <span className="ai-product-icon" role="img" aria-label={ai.name}>
                  {ai.icon}
                </span>
                <h3 className="ai-product-name">{ai.name}</h3>
                <div className="ai-product-vertical">{ai.vertical}</div>
                <p className="ai-product-desc">{ai.desc}</p>
                <div className="ai-product-price">{ai.price}</div>
                <div className="ai-product-price-label">{ai.priceLabel}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section className="training-section" id="training" aria-labelledby="trainingHeading">
          <div className="training-numbers reveal">
            <div className="training-stat" id="trainingStat-1">
              <div className="training-stat-num">
                200<sup>+</sup>
              </div>
              <div className="training-stat-label">Students trained</div>
            </div>
            <div className="training-stat" id="trainingStat-2">
              <div className="training-stat-num">
                80<sup>%</sup>
              </div>
              <div className="training-stat-label">Placement rate</div>
            </div>
            <div className="training-stat" id="trainingStat-3">
              <div className="training-stat-num">4</div>
              <div className="training-stat-label">Years of teaching</div>
            </div>
            <div className="training-stat" id="trainingStat-4">
              <div className="training-stat-num">2</div>
              <div className="training-stat-label">Core disciplines</div>
            </div>
          </div>
          
          <div className="training-right reveal reveal-delay-2">
            <div className="story-tag">The Training</div>
            <h2 className="story-headline" id="trainingHeading">
              Teaching is
              <br />
              how I learn
              <br />
              <em>better.</em>
            </h2>
            <p className="story-body">
              Four years ago I started teaching Data Analytics and MERN Stack to students
              who couldn't afford expensive bootcamps. Today, <strong>200+ of them work at real companies</strong>{" "}
              with an 80% placement rate — a number most funded bootcamps can't match.
            </p>
            <p className="story-body">
              Teaching forced me to understand every concept deeper than any job ever could.
              Now I'm launching my next cohort: <strong>Agentic AI Engineering</strong> — the skill
              that pays ₹30–80 LPA in 2026.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills-section" aria-label="Skills Inventory">
          <div className="skills-grid">
            {skillGroups.map((group, groupIdx) => (
              <div key={group.title} className={`reveal reveal-delay-${groupIdx}`} id={`skillGroup-${group.title}`}>
                <div className="skill-group-title">{group.title}</div>
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact" aria-labelledby="contactHeading">
          <div className="contact-bg" aria-hidden="true">
            HELLO
          </div>
          <div className="reveal">
            <div className="contact-tag">Get in touch</div>
            <h2 className="contact-headline" id="contactHeading">
              Let's build
              <br />
              something
              <br />
              <em>remarkable.</em>
            </h2>
            <br />
            <a
              href="mailto:bveenavikas@gmail.com"
              className="contact-email"
              id="contactEmailLink"
              aria-label="Send email to bveenavikas@gmail.com"
            >
              bveenavikas@gmail.com
            </a>
            
            <div className="contact-links" aria-label="Social media and project links">
              <a
                href="https://www.linkedin.com/in/veena-vikas-b-77364324b/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="linkLinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/veenavikas"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="linkGitHub"
              >
                GitHub
              </a>
              <a
                href="https://theswaadam.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="linkSwaadamSite"
              >
                The Swaadam
              </a>
              <a
                href="https://teachures.com"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="linkTeachuresSite"
              >
                Teachures
              </a>
            </div>
            
            <div className="contact-footer">
              Veena Vikas B &middot; CTO &middot; Visakhapatnam, India &middot; Open to remote & hybrid roles
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
