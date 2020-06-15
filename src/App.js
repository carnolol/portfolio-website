import React from 'react';
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
