import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
      
    </>
  );
}

export default App;
