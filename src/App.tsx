import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
// import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';

function App() {
    return (
      <div className="font-poppins overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />

    </div>
    )
}

export default App;
