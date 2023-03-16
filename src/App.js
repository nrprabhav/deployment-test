import React from 'react'
import CharacterGallery from './components/CharacterGallery'
import './App.css'

const App = () => {
  return (
    <div data-test='app-container'>
      <h1 className="site-title" data-test='site-title'>Lord of the Rings</h1>
      <CharacterGallery />
    </div>
  );
};

export default App;