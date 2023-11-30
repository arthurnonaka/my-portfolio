import './App.css';
import React from 'react';
import Header from './views/Header';
import Hero from './views/Hero';
import AboutMe from './views/AboutMe';
import WorkInProgress from './views/WorkInProgress';
import MyProjects from './views/MyProjects';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
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
        <WorkInProgress />
      </div>
    </div>
  );
}

export default App;
