import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const handleApplyFilters = () => {
    onFilter({
      skills: selectedSkills,
      type: selectedType,
      rating: selectedRating
    });
  };

  return (
    <div className="filters">
      {/* Skills Filter */}
      <div className="filter-group">
        <h4>Skills</h4>
        <input
          type="checkbox"
          value="React"
          onChange={e => setSelectedSkills([...selectedSkills, e.target.value])}
        /> React
        {/* Add more skill filters */}
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
