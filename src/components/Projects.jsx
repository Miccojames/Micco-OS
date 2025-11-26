import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

export default function Projects() {
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <input
        className="search-box"
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="project-grid">
        {filtered.map(p => (
          <ProjectCard key={p.id} p={p} />
        ))}
        {filtered.length === 0 && <p>No projects found.</p>}
      </div>
    </section>
  );
}
