import React from "react";
import { Link } from "react-scroll";

export default function DefaultMenu() {
    return (
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
    )
}