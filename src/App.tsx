import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import { AnimatePresence } from 'framer-motion';
import Services from './page/Services';
import Contact from './page/Contact';
import { LazyMotion, domAnimation } from "framer-motion"
import Process from './page/Process';
import Team from './page/Team';
import WhyChooseUs from './page/WhyChooseUs';
function App() {
  const location = useLocation()
  return (
    <>
      <LazyMotion strict features={domAnimation}>
        <AnimatePresence mode="wait"> 
          <Routes key={location.pathname} location={location}>
            <Route index element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/process' element={<Process />} />
            <Route path='/team' element={<Team />} />
            <Route path='/why-choose-us' element={<WhyChooseUs />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default App;
