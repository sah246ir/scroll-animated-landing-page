import React from 'react';
import './App.css';
import VideoScrollSection from './section/VideoScrollSection';
import { HoverProvider } from './ContextProviders/HoverWrapperProvider';
import ExpertiseSection from './section/ExpertiseSection';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <HoverProvider>
        <VideoScrollSection />
        <ExpertiseSection />
        <div className="min-h-[55em]"></div>
      </HoverProvider>
    </>
  );
}

export default App;
