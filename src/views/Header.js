import React from "react";
import "../styles/Header.css";

export default function Header() {
    return (
        <div className="header">
            <button className="header-button">HOME</button>
            <button className="header-button">SOBRE MIM</button>
            <button className="header-button">PROJETOS</button>
            <button className="header-button">CONTATO</button>
        </div>
    )
}