import React from "react";
import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div>
      <Link to={"/Perfil"}>
        <h1>Aqui se va a Perfil</h1>
      </Link>
      <Link to={"/Clases"}>
        <h1>Aqui se va a Clases</h1>
      </Link>
    </div>
  );
}

export default Bienvenida;
