import React from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/img-welcome.svg";
import "../index.css";
import "./Bienvenida.css";
import Boton from "../components/boton/Boton";

function Bienvenida() {
  return (
    <>
      <Link to={"/Perfil"}>
        <h1>Aqui se va a Perfil</h1>
      </Link>
      <Link to={"/Clases"}>
        <h1>Aqui se va a Clases</h1>
      </Link>

      <div className="main-bienvenida">
        <h1 className="h1-main mb-5">CodeTherapy</h1>
        <img
          className="img-bienvenida mb-5"
          src={welcome}
          alt="ilustración de una mujer estudiando online"
        />

        <h2 className="h2-main h2-margin">
          Encuentra un mentor/a para tu
          <span className="destacado-texto"> código</span>
        </h2>

        <Boton text="Ver todas las clases" />
      </div>
    </>
  );
}

export default Bienvenida;
