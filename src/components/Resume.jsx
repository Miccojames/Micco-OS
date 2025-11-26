import React from "react";
import resumePDF from "../assets/MiccoJamesAng_Resume.pdf";
import "../styles/resume.css";

const resumeHighlights = [
  "Detailed timeline of school projects and personal builds.",
  "Breakdown of the stacks, tools, and UI methodologies I lean on.",
  "Snapshot of soft skills, collaboration style, and availability.",
];

export default function Resume({ setCurrentSection }) {
  return (
    <section className="resume-page">
      <div className="resume-wrapper">
        {/* Capsule Section */}
        <div className="resume-capsule">
          <p className="capsule-label">Resume capsule</p>
          <h1 className="capsule-title">A curated document that mirrors this rearranged UI.</h1>
          <p className="capsule-desc">
            I treat my resume like a living product—updated with academic projects, learning sprints, and the design systems I’m building. Download it to see how these layouts translate into responsibilities and impact.
          </p>

          <ul className="capsule-list">
            {resumeHighlights.map((item) => (
              <li key={item}>
                <span className="capsule-dot" /> {item}
              </li>
            ))}
          </ul>

          <div className="capsule-buttons">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View / Download Resume
            </a>
            <button
              className="btn-outline"
              onClick={() => setCurrentSection("projects")}
            >
              See Related Work
            </button>
          </div>
        </div>

        {/* Snapshot Section */}
        <div className="resume-snapshot">
          <p className="snapshot-label">Snapshot</p>
          <h2 className="snapshot-title">What to expect inside</h2>
          <p className="snapshot-desc">
            The document outlines my education, development journey, and the stack powering this layout — React, Framer Motion, and intentional content strategy.
          </p>

          <div className="snapshot-details">
            <div className="detail-box">
              <p className="detail-label">Focus</p>
              <p className="detail-value">Frontend development & UI polish</p>
            </div>
            <div className="detail-box">
              <p className="detail-label">Location</p>
              <p className="detail-value">Cordova, Cebu, Philippines</p>
            </div>
            <div className="detail-box">
              <p className="detail-label">Availability</p>
              <p className="detail-value">Freelance & collaboration-ready</p>
            </div>
          </div>

          <p className="snapshot-note">
            Want a guided tour of the resume? Reach out via the contact drawer in the header and I’ll walk you through the highlights.
          </p>
        </div>
      </div>
    </section>
  );
}
