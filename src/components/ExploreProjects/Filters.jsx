import React, { useState, useEffect, useRef } from 'react';
import './Filters.css';

// Define the available skills
const availableSkills = [
  'React',
  'Node.js',
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'PHP',
  'Go',
  'Swift',
  // Add more skills as needed
];

const Filters = ({ onFilter, onClose }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const filterRef = useRef(null); // Ref to the filter box

  const handleApplyFilters = () => {
    onFilter({
      skills: selectedSkills,
      type: selectedType,
      rating: selectedRating,
    });
  };

  // Close filter box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onClose(); // Call the onClose function passed as a prop
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="filters" ref={filterRef}>
      {/* Skills Filter */}
      <div className="filter-group">
        <h4>Skills</h4>
        {availableSkills.map((skill) => (
          <div key={skill}>
            <input
              type="checkbox"
              value={skill}
              checked={selectedSkills.includes(skill)}
              onChange={e => {
                if (selectedSkills.includes(e.target.value)) {
                  setSelectedSkills(selectedSkills.filter(s => s !== e.target.value));
                } else {
                  setSelectedSkills([...selectedSkills, e.target.value]);
                }
              }}
            /> {skill}
          </div>
        ))}
      </div>

      {/* Type Filter */}
      <div className="filter-group">
        <h4>Project Type</h4>
        <select onChange={e => setSelectedType(e.target.value)}>
          <option value="">All</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Academic">Academic</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <h4>Minimum Rating</h4>
        <select onChange={e => setSelectedRating(Number(e.target.value))}>
          <option value="0">All</option>
          <option value="4">4 stars & up</option>
          <option value="3">3 stars & up</option>
        </select>
      </div>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
