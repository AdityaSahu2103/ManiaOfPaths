import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectsData'; // Import the projects data
import './productDetail.css';
import Timeline from './Timeline'; // Assuming you have a Timeline component for the journey
import ImageGallery from '../ImageGallery'; // Importing the ImageGallery component
import Comment from '../Comments'; // Importing the Comment component
import DownloadSection from '../DownloadSection'; // Importing the DownloadSection component
import ContactButton from '../ContactButton'; // Importing the ContactButton component
import NavBar from '../NavBar';
import Footer from '../Footer';

const ProductDetail = () => {
  const { id } = useParams(); // Get the ID from the URL

  // Convert id to a number and find the project
  const project = projects.find((p) => p.id === Number(id));

  // If project is not found, display a message
  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <>
      <NavBar />
    <div className="product-detail-page">
      {/* Project Overview */}
      <section className="project-overview">
        <h1>{project.title}</h1>
        <p className="project-description">{project.description}</p>
      </section>

      {/* Image Gallery Section */}
      <section className="project-images">
        
        <ImageGallery images={project.images || []} />
      </section>

      {/* Contributors Section */}
      <section className="contributors">
        <h3>Contributors</h3>
        <ul>
          {project.team && project.team.length > 0 ? (
            project.team.map((contributor, index) => (
              <li key={index}>
                <a href={contributor.profileLink} target="_blank" rel="noopener noreferrer">
                  {contributor.name}
                </a>
              </li>
            ))
          ) : (
            <li>No contributors listed.</li>
          )}
        </ul>
      </section>

      {/* Technologies Used Section */}
      <section className="technologies">
        <h3>Technologies Used</h3>
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
      </section>

    {/* Timeline Section */}
<section className="team-journey">
  <h2>Team Journey</h2>
  <Timeline steps={project.journey || []} />

  {/* Link to explore more about contributors' journey */}
  <div className="explore-journey">
    <h3>Want to explore more about the journey?</h3>
    <div className="contributors-links">
      {project.contributors && project.contributors.length > 0 ? (
        project.contributors.map((contributor, index) => (
          <div key={index} style={{ margin: '10px 0' }}> {/* Margin around each button */}
          <a 
            href={`/team-journey/${encodeURIComponent(contributor.name)}`} 
            className="explore-button"
          >
            Explore {contributor.name}'s Journey
          </a>
        </div>
        ))
      ) : (
        <p>No contributors available</p>
      )}
    </div>
  </div>
</section>


      {/* Achievements & Ratings Section */}
      <section className="achievements-ratings">
        <h2>Achievements</h2>
        <p>{project.achievements || 'No achievements mentioned.'}</p>

        {/* Ratings */}
        <div className="project-ratings">
          <h3>Rating:</h3>
          <span>
            {project.rating !== undefined ? `${project.rating} / 5` : 'No ratings available.'}
          </span>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
       
        <DownloadSection downloadLink={project.downloadLink}/>
      </section>

      {/* Comments Section */}
      <section className="comments-section">
        <h2>Comments</h2>
        <Comment projectId={id} />
      </section>

      {/* Related Projects Section */}
      <section className="related-projects">
        <h2>Related Projects</h2>
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

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact</h2>
        <ContactButton contactInfo={project.contact} />
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ProductDetail;
