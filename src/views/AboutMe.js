import React from "react";
import "../styles/AboutMe.css"
import workInProgressImg from "../images/work-in-progress.png";

export default function AboutMe() {
    return (
        <div className="about-me-view">
            <div className="about-me-intro">
                <h1>OI, MEU NOME É ARTHUR, SEJA BEM VINDO(A) 👋</h1>
                <text>Gosto de participar de projetos diversos no campo da tecnologia.</text>
                <text>Atualmente focado no desenvolvimento de software, para resolver os problemas em diversos cenários</text>
                <text>Venha conhecer um pouco do meu trabalho</text>
            </div>
            <img src={workInProgressImg} alt="My Profile" className="profile-image" />
        </div>
    )
}