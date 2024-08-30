import React from 'react';
import './App.css';
import VideoScrollSection from './section/VideoScrollSection';
import { HoverProvider } from './ContextProviders/HoverWrapperProvider';
import ExpertiseSection from './section/ExpertiseSection';
import Navbar from './components/Navbar';
import InsideSection from './section/InsideSection';
import RecognitionSection from './section/RecognitionSection';
import ApprochSection from './section/ApprochSection';



function App() {
  return (
    <>
      <Navbar />
      <HoverProvider>
        <VideoScrollSection />
        <ExpertiseSection />
        <ApprochSection />
        <RecognitionSection />
        <InsideSection />
      </HoverProvider>
    </>
  );
}

export default App;
