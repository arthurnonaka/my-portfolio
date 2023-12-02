import React from "react";
import Header from "../components/Header";
import heroImg from "../images/hero-img.jpeg";
import "../styles/Hero.css"
import scrolDown from "../images/scroll-down.gif";

export default function Hero() {
  return (
    <div className="hero-view">
      <header className="header">
        <Header />
      </header>
      <div className="hero-content">
        <div className="hero-intro">
          <h1 className="orange">ENGENHEIRO E DESENVOLVEDOR DE SOFTWARE</h1>
          <p>Gosto de desenvolver soluções para problemas diversos, utilizando tecnologia <br />
            Atualmente focado no desenvolvimento de software
          </p>
          <p>Venha conhecer o meu trabalho...</p>
        </div>
        <div className="hero-img">
          <img className="hero-image" src={heroImg} alt="hero" />
        </div>
      </div>
      <img className="scroll-gif" src={scrolDown} alt="scroll-down" />
    </div>
  )
}