import React from "react";
import devIconImg from "../images/dev-icon.png";
import biIconImg from "../images/bi-icon.png";
import "../styles/AboutMe.css"

export default function AboutMe() {
  return (
    <div className="about-me-view">
      <div className="about-me-title">
        <h1>OI, MEU NOME É ARTHUR, SEJA BEM VINDO(A) 👋</h1>
        <div className="about-me-intro">
          <p>Atualmente, atuo como desenvolvedor de software em Curitiba-PR. Iniciei a minha trajetória em 2020 e, desde então, venho adquirindo experiência em projetos de engenharia, análise de dados (BI) e desenvolvimento de softwares.</p>
          <p>Gosto de desafios e, no ambiente de desenvolvimento, sou motivado a aprender e aprimorar meus conhecimentos diariamente.</p>
          <p>Estou sempre aberto a novas oportunidades, gosto de conhecer pessoas e projetos.</p>
          <p>Vamos nos conectar!</p>
          <button className="contact-btn">Contato</button>
        </div>
      </div>
      <div className="about-me-table">
        <div className="column">
          <img className="about-me-icon" src={devIconImg} alt="code icon" />
          <h3>Desenvolvimento de software</h3>
          <p>Gosto de resolver problemas e colocar idéias em prática, utilizando programação.</p>
          <h3>Linguagens</h3>
          <p>Java, C++, JavaScript, CSS, HTML, Python, SQL</p>
          <h3>Ferramentas</h3>
          <p>Git</p>
          <p>Spring</p>
          <p>React</p>
          <p>Linux</p>
        </div>
        <div className="line"></div>
        <div className="column">
          <img className="about-me-icon" src={biIconImg} alt="bi icon" />
          <h3>Análise de dados (BI)</h3>
          <p>Valorizo decisões baseadas em dados, buscando mostrar isso através de análises e dashboards.</p>
          <h3>Softwares</h3>
          <p>QlikSense, PowerBI, Excel, Matlab</p>
          <h3>Ferramentas</h3>
          <p>ETL</p>
          <p>Análise de dados</p>
          <p>VBA</p>
          <p>Dashboards</p>
        </div>
      </div>
    </div>
  )
}