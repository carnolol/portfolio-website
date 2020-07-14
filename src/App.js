import React,{useEffect, useState} from 'react';
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import './App.css';

function App() {
  console.log(document.body.scrollTop)
  console.log(window.height)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log(window.scrollY)
  }, [])

  function handleScroll() {
    if (window.scrollY > 0) {
      // console.log(window.scrollY)
        return <Header/>
    } 
}
  // console.log(document.body.scrollHeight)
  return (
    <div className="App">
      {/* {window.scrollY > 0 ? <Header/> : null} */}
      {document.body.scrollHeight >= 0 ? <Header/> : null}
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
