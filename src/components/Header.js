import React from "react";
import "../styles/Header.css";
import heroImg from "../images/hero-img.jpeg";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const isMobile = window.innerWidth <= 600;
  return (
    <div className="header-view">
      <div className="header-logo">
        <img className="header-image" src={heroImg} alt="hero" />
      </div>
      <div className="menu">
        {isMobile ? (<MobileMenu />) :
        (<DefaultMenu />)
        }
      </div>
    </div>
  )
}