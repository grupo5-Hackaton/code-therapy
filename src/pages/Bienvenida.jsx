import React from "react";
import Buscador from "../components/Buscador";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div>
      <Buscador />
      <Link to={"/Perfil"}>
        <h1>Aqui se va a Perfil</h1>
      </Link>
      <Link to={"/Clases"}>
        <h1>Aqui se va a Clases</h1>
      </Link>
      <h1>Bienvenida</h1>
      <Footer />
    </div>
  );
}

export default Bienvenida;
