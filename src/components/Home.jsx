import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "../styles/home.css";
import profilePic from "../assets/profile.jpg";

export default function Home({ setCurrentSection }) {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="intro">
          <h1>Greetings! I'm Micco 👋</h1>
          <h2>Student & Future Front-End Developer</h2>
          <p>
            I am deeply passionate about building websites, web applications, and user interfaces that go beyond functionality to deliver visually captivating experiences. My focus is on crafting clean, responsive, and user‑friendly designs that not only solve problems but also engage and inspire users. I enjoy transforming ideas into interactive digital solutions, blending creativity with technical precision to ensure every project reflects both aesthetic appeal and practical usability.
          </p>

          <div className="buttons">
            {/* Use onClick instead of href */}
            <button className="btn" onClick={() => setCurrentSection("contact")}>
              Free Inquiry
            </button>
            <button className="btn secondary" onClick={() => setCurrentSection("projects")}>
             Discover Projects
            </button>
          </div>

        <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>

        <a href="https://github.com/Miccojames" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        </div>

        </div>

        <div className="profile-section">
          <img src={profilePic} alt="Micco James Ang" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}
