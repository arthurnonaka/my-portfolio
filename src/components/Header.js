import React from "react";
import "../styles/Header.css";
import heroImg from "../images/hero-img.jpeg";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="header-view">
      <div className="header-logo">
        <img className="header-image" src={heroImg} alt="hero" />
      </div>
      <div className="header-buttons">
        <Link className="header-button" to="aboutMe" smooth={true}>
          SOBRE MIM
        </Link>
        <Link className="header-button" to="myProjects" smooth={true}>
          PROJETOS
        </Link>
        <Link className="header-button" to="contact" smooth={true}>
          CONTATO
        </Link>
      </div>
    </div>
  )
}