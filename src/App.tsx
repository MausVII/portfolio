import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Contact from './components/contact/Contact';
import About from './routes/About';
import Home from './routes/Home'
import Projects from './routes/Projects';
import Skills from './routes/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="name">
          <h1>Val Puente</h1>
          <p>Full Stack Web Developer</p>
        </div>
        <div id="contact">
          <Contact />
        </div>
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
