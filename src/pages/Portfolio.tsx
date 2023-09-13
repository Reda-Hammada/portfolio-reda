import React from 'react'
import Hero from '../components/Hero/Hero';
import Skills from '../components/Skills/Skills';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Project from '../components/Project/Project';

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About/>
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default Portfolio