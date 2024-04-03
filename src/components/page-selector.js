import React, { useState } from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState(new Set());
  const allPages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

  const handleDoneClick = () => {
    const numberOfSelectedPages = selectedPages.size;

    if (numberOfSelectedPages === 0) {
      toast.info('No pages selected.');
    } else if (numberOfSelectedPages === 1) {
      const page = Array.from(selectedPages)[0];
      toast.success(`${page} selected.`);
    } else if (numberOfSelectedPages === allPages.length) {
      toast.success('All pages selected.');
    } else {
      const pagesArray = Array.from(selectedPages);
      const lastPage = pagesArray.pop();
      const message = pagesArray.join(', ') + ' and ' + lastPage + ' selected.';
      toast.success(message);
    }
  };

  const togglePageSelection = (page) => {
    let updatedSelection = new Set(selectedPages);

    if (page === 'All pages') {
      if (updatedSelection.size === allPages.length) {
        updatedSelection.clear();
      } else {
        allPages.forEach(p => updatedSelection.add(p));
      }
    } else {
      updatedSelection.has(page) ? updatedSelection.delete(page) : updatedSelection.add(page);
    }

    // After modifying the selection, check if all individual pages are selected.
    const areAllSelected = allPages.every(page => updatedSelection.has(page));
    areAllSelected ? allPages.forEach(page => updatedSelection.add(page)) : updatedSelection.delete('All pages');
    setSelectedPages(updatedSelection);
  };

  return (
    <div className='page-selector'>
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
      <button className='done-button' onClick={handleDoneClick}>Done</button>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default PageSelector;
