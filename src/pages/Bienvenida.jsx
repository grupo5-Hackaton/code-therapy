import React from "react";
import Boton from "../components/botton/Boton";
import Buscador from "../components/buscador/Buscador";
import Footer from "../components/footer/Footer";

function Bienvenida() {
  return (
    <div>
      <Buscador />
      <Boton />
      <h1>Bienvenida</h1>
      <Footer />
    </div>
  );
}

export default Bienvenida;
