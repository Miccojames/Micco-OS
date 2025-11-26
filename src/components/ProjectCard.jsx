import React from 'react';
import '../styles/projectcard.css';

export default function ProjectCard({ p }) {
  return (
    <div className="project-card">
      {p.image && (
        <img src={p.image} alt={p.title} className="project-image" />
      )}
      <h4 className="project-title">{p.title}</h4>
      <p className="project-desc">{p.desc}</p>
      <div className="project-tags">
        {p.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      {p.link && (
        <a href={p.link} className="project-link" target="_blank" rel="noreferrer">
          Visit Project
        </a>
      )}
    </div>
  );
}
