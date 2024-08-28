import React from 'react';
import './App.css';
import VideoScrollSection from './section/VideoScrollSection';
import { HoverProvider } from './ContextProviders/HoverWrapperProvider';
 


function App() {  
  return (
    <HoverProvider>
      <VideoScrollSection />
    </HoverProvider>
  );
}

export default App;
