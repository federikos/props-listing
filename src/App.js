import React from 'react';
import Listing from './Listing';
import './App.css';
import etsyData from './etsyData';

function App() {
  return (
    <Listing items={etsyData} />
  );
}

export default App;
