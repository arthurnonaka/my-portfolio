import './App.css';
import React from 'react';
import { Element } from 'react-scroll';
import Hero from './views/Hero';
import AboutMe from './views/AboutMe';
import MyProjects from './views/MyProjects';
import Contact from './views/Contact';

/**
 * TODO LIST
 * DONE - Fazer os botões funcionarem: Header, AboutMe, Contact
 * DONE - Adicionar links das redes sociais na tela Contact
 * TODO - Arrumar projeto para display em mobile
 * TODO - Adicionar projetos com link
 * TODO - Colocar foto real: Hero (cartoon) e Contact
 * TODO - Colocar logo: Header e Na aba do navegador
 * TODO - Desenvolver feature de idioma: Inglês - Portugues
 * TODO - Personalizar backgrounds segundo Mockup Figma
 * 
 * @returns 
 */
function App() {
  return (
    <div className="App">
      <Element name='hero'>
        <Hero />
      </Element>
      <Element name='aboutMe'>
        <AboutMe />
      </Element>
      <Element name='myProjects'>
        <MyProjects />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
    </div>
  );
}

export default App;
