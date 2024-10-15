import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleViewProject = () => {
    navigate(`/project/${project.id}`, { state: { project } }); // Use navigate to go to the project detail page
  };

  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
      <button className="view-project-button" onClick={handleViewProject}>View Project</button>
    </div>
  );
};

export default ProjectCard;
