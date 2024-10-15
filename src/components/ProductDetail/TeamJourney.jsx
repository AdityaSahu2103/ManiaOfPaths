import React from 'react';
import { useParams } from 'react-router-dom';
import './TeamJourney.css'; // Adjust path if needed
import { projects } from '../data/projectsData'; // Adjust the path as necessary
import NavBar from '../NavBar';
import Footer from '../Footer';

const TeamJourney = () => {
  const { contributorName } = useParams(); // Get the contributor name from URL parameters

  // Find the project that contains the contributor
  const projectWithContributor = projects.find(project =>
    project.contributors.some(contributor => contributor.name === contributorName)
  );

  // Find the contributor's data
  const contributorData = projectWithContributor?.contributors.find(contributor => contributor.name === contributorName);

  // Check if the contributor data is found
  if (!contributorData) {
    return <h2>Contributor not found</h2>; // Handle case when contributor is not found
  }

  return (
    <>
      <NavBar />
    <div className="team-journey">
      <h1>{contributorData.name}'s Journey</h1>
      <p><strong>Background:</strong> {contributorData.background || 'No background information available.'}</p>
      <p><strong>Inspiration:</strong> {contributorData.inspiration || 'No inspiration information available.'}</p>
      <p><strong>Aspirations:</strong> {contributorData.aspirations || 'No aspirations information available.'}</p>

      <h2>Journey Timeline</h2>
      <ul>
        {contributorData.timeline && contributorData.timeline.length > 0 ? (
          contributorData.timeline.map((item, index) => (
            <li key={index}>
              <strong>{item.date}:</strong> {item.milestone}
            </li>
          ))
        ) : (
          <li>No timeline available</li>
        )}
      </ul>

      <h2>Contributions</h2>
      <ul>
        {contributorData.contributions && contributorData.contributions.length > 0 ? (
          contributorData.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))
        ) : (
          <li>No contributions available</li>
        )}
      </ul>

      <h2>Technologies Used</h2>
      <p>{contributorData.techStack && contributorData.techStack.length > 0 ? contributorData.techStack.join(', ') : 'No technologies listed'}</p>

      <h2>Favorite Quote</h2>
      <blockquote>{contributorData.quote || 'No quote available'}</blockquote>

      {/* Resources Section */}
      <h2>Resources</h2>
      {contributorData.resources && contributorData.resources.length > 0 ? (
        <ul>
          {contributorData.resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No resources available</p>
      )}

      {/* Contributors Profiles Section */}
      <h2>Connect with Contributors</h2>
      <ul>
        {projectWithContributor && projectWithContributor.contributors.length > 0 ? (
          projectWithContributor.contributors.map((profile, index) => (
            <li key={index}>
              <a href={profile.profileLink} target="_blank" rel="noopener noreferrer">
                {profile.name}
              </a>
            </li>
          ))
        ) : (
          <p>No profiles available</p>
        )}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default TeamJourney;
