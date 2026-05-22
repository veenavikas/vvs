import React from "react";

const skills = [
  "MERN Stack",
  "Next.js",
  "AWS",
  "Agentic AI",
  "LangChain",
  "RAG Pipelines",
  "Python",
  "TypeScript",
  "Multi-tenant SaaS",
  "Google PM Certified",
  "10-member remote team",
];

export default function Marquee() {
  // Duplicate skills list to allow seamless loop scrolling
  const listItems = [...skills, ...skills, ...skills];

  return (
    <div className="marquee-section" aria-label="Skills and Certifications Marquee">
      <div className="marquee-track">
        {listItems.map((skill, index) => (
          <div key={index} className="marquee-item">
            {skill} <span>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
