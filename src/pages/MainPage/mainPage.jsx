import React, { useState } from 'react';
import './mainPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button/button';
import PageList from '../../components/PageList/pageList';
import AllPages from '../../components/AllPages/allPages';
const MainPage = () => {
  const [selectedPages, setSelectedPages] = useState(new Set());

const allPages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];

  const handleDoneClick = () => {
    const numberOfSelectedPages = selectedPages.size;

    if (numberOfSelectedPages === 0) {
      toast.info('No pages selected.');
    } else if (numberOfSelectedPages === 1) {
      const page = Array.from(selectedPages)[0];
      toast.success(`${page} selected.`);
    } else if (numberOfSelectedPages === allPages.length) {
      toast.success('All pages selected successfully!');
    } else {
      const pagesArray = Array.from(selectedPages);
      const lastPage = pagesArray.pop();
      const message = pagesArray.join(', ') + ' and ' + lastPage + ' selected successfully!';
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


    const areAllSelected = allPages.every(page => updatedSelection.has(page));
    areAllSelected ? allPages.forEach(page => updatedSelection.add(page)) : updatedSelection.delete('All pages');
    setSelectedPages(updatedSelection);
  };

  return (
    <div className='page-selector'>
  
      <AllPages selectedPages={selectedPages} allPages={allPages} togglePageSelection={togglePageSelection} />

      <PageList allPages={allPages} selectedPages={selectedPages} togglePageSelection={togglePageSelection} />

    
      <Button onClick={handleDoneClick} /> 
     
    </div>
  );
};

export default MainPage;
