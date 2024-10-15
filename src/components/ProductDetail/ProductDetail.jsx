import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectsData'; // Import the projects data
import './productDetail.css';
import Timeline from './Timeline'; // Assuming you have a Timeline component for the journey

const ProductDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    console.log("ID from URL:", id); // Log the ID from the URL

    // Convert id to a number and find the project
    const project = projects.find(p => p.id === Number(id)); 
    console.log("Project Data:", project); // Log the project data

    // If project is not found, display a message
    if (!project) {
        return <p>Project not found.</p>;
    }

    return (
      <div className="product-detail-page">
        <section className="project-overview">
          <h1>{project.title}</h1>
          <p className="project-description">{project.description}</p>

          {/* Contributors */}
          <div className="contributors bg-slate-200 py-4 px-4 rounded-lg">
            <h3 className="text-xl font-bold">Contributors:</h3>
            <ul>
              {project.team && project.team.length > 0 ? (
                project.team.map((contributor, index) => (
                  <li key={index}>
                    <a
                      href={contributor.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contributor.name}
                    </a>
                  </li>
                ))
              ) : (
                <li>No contributors listed.</li>
              )}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="technologies bg-blue-100 py-3 px-4 rounded-lg">
            <h3 className="text-xl font-bold">Technologies Used:</h3>
            <ul className="tech-stack">
              {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, index) => (
                  <li key={index} className="tech-item">
                    {tech}
                  </li>
                ))
              ) : (
                <li>No technologies listed.</li>
              )}
            </ul>
          </div>

          {/* Team Journey Section */}
          <section className="team-journey bg-green-100 py-3 px-4 rounded-lg">
            <h2 className="text-xl font-bold">Team Journey</h2>
            <Timeline steps={project.journey || []} />
          </section>

          {/* Achievements & Ratings Section */}
          <section className="achievements-ratings bg-yellow-100 py-4 px-4 rounded-lg">
            <h2 className="text-xl font-bold">Achievements</h2>
            <p>{project.achievements || "No achievements mentioned."}</p>

            {/* Ratings */}
            <div className="project-ratings">
              <h3>Rating:</h3>
              <span>
                {project.rating !== undefined
                  ? `${project.rating} / 5`
                  : "No ratings available."}
              </span>
            </div>
          </section>

          {/* GitHub Link and Contact Info */}
          <section className="contact-section bg-slate-100 py-4 px-4 rounded-lg">
            <h2 className="text-xl font-bold">Project Source & Contact</h2>
            {project.githubLink && (
              <p>
                <strong>GitHub:</strong>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project on GitHub
                </a>
              </p>
            )}
            {project.contact && (
              <p>
                <strong>Contact:</strong> {project.contact}
              </p>
            )}
          </section>

          {/* Related Projects Section */}
          <section className="related-projects bg-blue-100 px-3 py-4 rounded-lg">
            <h2 className="text-xl font-bold">Related Projects</h2>
            <div className="related-projects-list">
              {project.relatedProjects && project.relatedProjects.length > 0 ? (
                project.relatedProjects.map((related) => (
                  <div key={related.id} className="related-project-card">
                    <h3>{related.title}</h3>
                    <p>{related.description}</p>
                    <a href={`/project/${related.id}`}>View Project</a>
                  </div>
                ))
              ) : (
                <p>No related projects found.</p>
              )}
            </div>
          </section>
        </section>
      </div>
    );
};

export default ProductDetail;
