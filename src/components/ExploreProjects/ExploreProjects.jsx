import React, { useState } from 'react';
import { projects } from '../data/projectsData';
import Filters from './Filters';
import SearchBar from './SearchBar';
import ProjectCard from './ProjectCard';
import './exploreProjects.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

const ExploreProjects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Function to handle filtering by skill, type, and rating
  const handleFilter = (filters) => {
    let updatedProjects = projects;

    // Apply filters
    if (filters.skills.length > 0) {
      updatedProjects = updatedProjects.filter(project =>
        filters.skills.every(skill => project.skills.includes(skill))
      );
    }

    if (filters.type) {
      updatedProjects = updatedProjects.filter(project => project.type === filters.type);
    }

    if (filters.rating) {
      updatedProjects = updatedProjects.filter(project => project.rating >= filters.rating);
    }

    setFilteredProjects(updatedProjects);
  };

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    const searchedProjects = projects.filter(project =>
      project.title.toLowerCase().includes(term.toLowerCase()) ||
      project.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProjects(searchedProjects);
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(prev => !prev);
  };

  const resetFilters = () => {
    setFilteredProjects(projects); // Reset to all projects
    setShowFilterDropdown(false); // Close the dropdown
  };

  return (
    <>
      <NavBar />
      <div className="explore-projects ">
        <SearchBar onSearch={handleSearch} />
        <div className="projects-header">
          <h1>Explore Projects</h1>
          <button className="filter-button" onClick={toggleFilterDropdown}>
            Filters
          </button>
        </div>

        {showFilterDropdown && (
          <div className="filter-dropdown">
            <h3>Filter Options</h3>
            <Filters onFilter={handleFilter} />
            <button className="filter-option" onClick={resetFilters}>
              Back to Normal
            </button>
          </div>
        )}

        <div className="projects-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p>No projects found matching the criteria</p>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ExploreProjects;
