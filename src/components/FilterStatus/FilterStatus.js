import React from 'react';

// import './item-status-filter.css';

const FilterStatus = () => {
  return (
    <div className="">
      <button type="button"
              className="btn btn-info">All</button>
      <button type="button"
              className="btn btn-outline-secondary">Active</button>
      <button type="button"
              className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default FilterStatus;