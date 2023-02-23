import React from "react";
import { Link } from "react-router-dom";
import welcome from "../../assets/img-welcome.svg";
import "./Bienvenida.css"
import Boton from "../../components/boton/Boton";

function Bienvenida() {
  return (
    <>
      <div className="main-bienvenida card-contenedor">
        <h1 className="h1-main mb-5 mt-5">CodeTherapy</h1>
        <img
          className="img-bienvenida mb-5"
          src={welcome}
          alt="ilustración de una mujer estudiando online"
        />

        <h2 className="h2-main mb-5">
          Encuentra un mentor/a para tu
          <span className="destacado-texto"> código</span>
        </h2>

        <Link to="/Clases"><Boton text="Ver todas las clases"/></Link>
       
      </div>
    </>
  );
}

export default Bienvenida;
