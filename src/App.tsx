import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import { AnimatePresence } from 'framer-motion';
import Services from './page/Services';
import Contact from './page/Contact';
 
function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">

        <Routes key={location.pathname} location={location}>
          <Route index element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact-us' element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      
    </>
  );
}

export default App;
