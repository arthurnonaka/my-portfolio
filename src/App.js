import './App.css';
import React from 'react';
import Hero from './views/Hero';
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import Contact from './views/Contact';

/**
 * TODO LIST
 * Fazer os botões funcionarem: Header, AboutMe, Contact
 * Fazer a rolagem com trigger do scroll, para adequar cada tela
 * Colocar foto real: Hero (cartoon) e Contact
 * Colocar alguma logo: Header e Na aba do navegador
 * Adicionar projetos com link
 * Arrumar projeto para display em mobile
 * Desenvolver feature de idioma: Inglês - Portugues
 * Personalizar backgrounds segundo Mockup Figma
 * 
 * @returns 
 */
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
