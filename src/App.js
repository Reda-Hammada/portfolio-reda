import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About'


function App() {
  return (
    <div className="font-poppins overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
     </div>
  );
}

export default App;
