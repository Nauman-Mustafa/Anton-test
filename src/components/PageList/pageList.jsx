import React from 'react';

function PageList({ allPages, selectedPages, togglePageSelection }) {
  return (
    <div className='pages-list'>
      {allPages.map((page, index) => (
        <label key={index}>
          {page}
          <input
            type='checkbox'
            checked={selectedPages.has(page)}
            onChange={() => togglePageSelection(page)}
          />
        </label>
      ))}
    </div>
  );
}

export default PageList;
