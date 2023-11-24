import React from "react";
import heroImg from "../images/hero-img.jpeg";
import "../styles/Hero.css"

export default function Hero() {
  return (
    <div className="hero-view">
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
  )
}