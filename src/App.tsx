import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import { AnimatePresence } from 'framer-motion';
import Services from './page/Services';
 
function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">

        <Routes key={location.pathname} location={location}>
          <Route index element={<Home/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </AnimatePresence>
      
    </>
  );
}

export default App;
