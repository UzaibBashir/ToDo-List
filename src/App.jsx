import './App.css'
import React, { useState } from 'react';
import Footer from './components/Footer';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  
  return (
    
    <div className='m-2 mx-50'>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>

    
  );
}

export default App;
