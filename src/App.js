import React from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Card from './components/Card';
import Search from './components/Search'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Card />
    </div>
  );
}

export default App;
