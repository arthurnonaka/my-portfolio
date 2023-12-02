import './App.css';
import React from 'react';
import Hero from './views/Hero';
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Hero />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <MyProjects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
