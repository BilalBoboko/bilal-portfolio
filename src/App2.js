import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
        
    <div>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
)}
  


export default App;
