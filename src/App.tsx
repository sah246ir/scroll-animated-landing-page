import React from 'react';
import './App.css';
import VideoScrollSection from './section/VideoScrollSection';
import { HoverProvider } from './ContextProviders/HoverWrapperProvider';
import ExpertiseSection from './section/ExpertiseSection';
 


function App() {  
  return (
    <HoverProvider>
      <VideoScrollSection />
      <ExpertiseSection />
    </HoverProvider>
  );
}

export default App;
