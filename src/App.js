import './App.css';
import React from 'react';
import Profil from './components/Profil.js';
import Projet from './components/Projet.js';
import Footer from './components/Footer.js';




function App() {
  return (
    <div className="App">
      <Profil />
      <Projet />
      <Footer/>


    </div>
  );
}

export default App;
