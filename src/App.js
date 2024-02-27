import React, { useState } from 'react';
import ImageToggle from './components/ImageToggle';
import './App.css';

import city from './img/Jowhareh_galleries1.jpeg';
import cityGray from './img/Jowhareh_galleries1_gray.jpeg';
import nature from './img/Jowhareh_galleries2.jpeg';
import natureGray from './img/Jowhareh_galleries2_gray.jpeg';

function App() {

  return (
    <div className="App">
      <ImageToggle primary={city} secondary={cityGray}/>
      <ImageToggle primary={nature} secondary={natureGray}/>
    </div>
  );
}

export default App;
