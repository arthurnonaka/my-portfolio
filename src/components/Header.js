import React from "react";
import "../styles/Header.css";
import heroImg from "../images/hero-img.jpeg";

export default function Header() {
  return (
    <div className="header-view">
      <div className="header-logo">
        <img className="header-image" src={heroImg} alt="hero" />
      </div>
      <div className="header-buttons">
        <button className="header-button">HOME</button>
        <button className="header-button">SOBRE MIM</button>
        <button className="header-button">PROJETOS</button>
        <button className="header-button">CONTATO</button>
      </div>
    </div>
  )
}