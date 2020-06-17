import React from 'react';
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  console.log(document.body.scrollTop)
  console.log(window.height)
  // console.log(document.body.scrollHeight)
  return (
    <div className="App">
      {document.body.scrollHeight >= 0 ? <Header/> : null}
      <Landing/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
