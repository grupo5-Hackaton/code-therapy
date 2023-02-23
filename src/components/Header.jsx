import React from "react";
import logo from "../assets/logo.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo Code Therapy" />
        <h1>Code Therapy</h1>
      </div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </header>
  );
}

export default Header;
