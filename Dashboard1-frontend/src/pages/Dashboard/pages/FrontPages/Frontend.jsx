import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Frontend = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-100 to-white min-h-screen">
      <Navbar className="bg-purple-100 rounded-b-full" />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Frontend;