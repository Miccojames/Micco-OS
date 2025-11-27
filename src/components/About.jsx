import React from 'react';
import '../styles/about.css';
import profilePic from '../assets/profile.jpg';

export default function About() {
  const stacks = ['HTML', 'JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind', 'TypeScript'];

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left: Text and Tech Stack */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Micco. I'm studying front-end development and enjoy building clean UI. I love turning ideas into interactive experiences that feel intuitive and visually engaging. My focus is on crafting responsive layouts, clean code, and seamless user journeys. Whether it's a portfolio site or a full-blown web app, I aim to build interfaces that not only look good but work beautifully across devices. I'm constantly learning new tools and techniques to push my skills further and bring creativity into every project.
          </p>

          <h3>Tech Stacks</h3>
          <div className="tech-stack">
            {stacks.map(stack => (
              <span key={stack} className="stack-pill">{stack}</span>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Micco James Ang" />
        </div>
      </div>
    </section>
  );
}
