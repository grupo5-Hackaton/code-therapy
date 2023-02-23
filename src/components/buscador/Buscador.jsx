import React from "react";
import "./Buscador.css";
import "../../index.css";
import lupa from "../../assets/lupa.svg";

function Buscador() {
  return (
    <>
      <div className="buscador-box">
        <img className="input-icon" src={lupa} alt="Icono Lupa" />
        <input
          type="search"
          className="input-buscador"
          placeholder="Busca clases por lenguaje"
        ></input>
      </div>
    </>
  );
}

export default Buscador;
