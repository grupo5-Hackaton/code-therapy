import React from "react";
import "./Boton.css";
import "../../index.css";

function Boton({ text }) {
  return (
    <>
      <button className="boton-general">{text}</button>
    </>
  );
}

export default Boton;
