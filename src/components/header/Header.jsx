import React from "react";
import logo from "../../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 fondo-lila-claro fixed-top">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo Code Therapy" className="margin-l-1"/>
            </Navbar.Brand>
          <Link to="/Clases" className="link"><p className="texto-lila texto-grande margin-r-1">Clases</p></Link>            
          </Container>
        </Navbar>
      ))}
    </header>
  );
}

export default Header;
