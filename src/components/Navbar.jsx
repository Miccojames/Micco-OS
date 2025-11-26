import React, { useState } from "react";
import "../styles/navbar.css";

export default function Navbar({ currentSection, setCurrentSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "scheduling", label: "Scheduling" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="brand">Micco James Ang</h1>

        {/* Hamburger toggle button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav aria-label="Main Navigation">
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-btn ${currentSection === id ? "active" : ""}`}
                  onClick={() => {
                    setCurrentSection(id);
                    setMenuOpen(false); // close menu after click
                  }}
                  aria-current={currentSection === id ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
