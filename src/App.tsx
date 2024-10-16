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
import ELearningPage from './page/services/ELearningPage';
import IllustrationPage from './page/services/IllustrationPage';
import AnimationPage from './page/services/AnimationPage';
import CreativeDesignPage from './page/services/CreativeDesignPage';
import TranslationPage from './page/services/TranslationPage';
import AudioVideoPage from './page/services/AudioVideoPage';
import CorporatePresentationsPage from './page/services/CorporatePresentationsPage';
import EPublishingPage from './page/services/EPublishingPage';
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

            <Route path='/services/e-learning' element={<ELearningPage />} />
            <Route path='/services/illustration' element={<IllustrationPage />} />
            <Route path='/services/animation' element={<AnimationPage />} />
            <Route path='/services/creative-design' element={<CreativeDesignPage />} />
            <Route path='/services/translation' element={<TranslationPage />} />
            <Route path='/services/audio-video' element={<AudioVideoPage />} />
            <Route path='/services/corporate-presentations' element={<CorporatePresentationsPage />} />
            <Route path='/services/e-publishing' element={<EPublishingPage />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

export default App;
