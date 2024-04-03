// AllPages.jsx
import React from 'react';

function AllPages({ selectedPages, allPages, togglePageSelection }) {
  return (
    <div className='all-page'>
      <label>
        All pages
      </label>
      <input
        type='checkbox'
        checked={selectedPages.size === allPages.length}
        onChange={() => togglePageSelection('All pages')}
      />
    </div>
  );
}

export default AllPages;
