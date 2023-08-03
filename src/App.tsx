import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';


function App() {
    return (
      <div className="font-poppins overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
    </div>
    )
}

export default App;
