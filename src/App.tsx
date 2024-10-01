import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import { AnimatePresence } from 'framer-motion';
 
function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">

        <Routes key={location.pathname} location={location}>
          <Route index element={<Home/>} />
        </Routes>
      </AnimatePresence>
      
    </>
  );
}

export default App;
