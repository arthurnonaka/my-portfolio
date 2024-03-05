import React, { useState } from "react";
import menuImg from "../images/menu-img.png";
import closeMenu from "../images/close-menu.png";
import "../styles/MobileMenu.css"
import { Link } from "react-scroll";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <div className="menu-trigger" onClick={() => { setOpen(!open) }}>
        <img className={`menu-image ${open ? 'active' : 'inactive'}`} src={open ? menuImg : closeMenu} alt="menu" />
      </div>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
          <DropdownItem text={"Sobre mim"} to={"aboutMe"} />
          <DropdownItem text={"Projetos"} to={"myProjects"} />
          <DropdownItem text={"Contato"} to={"contact"} />
        </ul>
      </div>
    </div>
  )

  function DropdownItem(props) {
    return (
      <li className="dropdown-item">
        <Link className="menu-button" to={props.to} smooth={true} onClick={() => { setOpen(!open) }}>
          {props.text}
        </Link>
      </li>
    )
  }
}