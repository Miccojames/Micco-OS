import React, { useState } from "react";
import "../styles/footer.css";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({ currentSection, setCurrentSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "scheduling", label: "Scheduling" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Studio Section */}
        <div className="footer-studio">
          <h2 className="studio-name">Micco James Ang</h2>
          <p className="studio-desc">
            Frontend developer reshaping layouts into clean, responsive, story-rich experiences.
          </p>
          <div className="footer-icons">
            <a href="https://github.com/Miccojames" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Navigate Section */}
        <div className="footer-nav">
          <h3>Navigate</h3>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle footer navigation"
          >
            ☰
          </button>
          <ul className={`footer-links ${menuOpen ? "show" : ""}`}>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`footer-btn ${currentSection === id ? "active" : ""}`}
                  onClick={() => {
                    setCurrentSection(id);
                    setMenuOpen(false);
                  }}
                  aria-current={currentSection === id ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: miccojamesang9@gmail.com</p>
          <p>Phone: 0961-701-1008</p>
          <p>Location: Datag, Buagsong, Cordova, Cebu, Philippines</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Micco James Ang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
