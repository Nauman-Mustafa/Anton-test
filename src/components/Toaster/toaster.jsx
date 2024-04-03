import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = ({ children }) => {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={5000} />
      {children}
    </div>
  );
};

export default ToastProvider;
