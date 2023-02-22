import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Code Therapy" />
        <h1>Code Therapy</h1>
      </div>
      <nav>
        <li>Clases</li>
      </nav>
    </header>
  );
}

export default Header;
