import React from "react";
import CardClase from "../../components/CardClases/CardClase";
import Buscador from '../../components/buscador/Buscador'
import hero from '../../assets/imagen-clases-lista.png'
import CardClaseDestacada from "../../components/CardClasesDestacadas/CardClaseDestacada";
import './Clases.css'

function Clases() {
  return (
  <div>
    <div className="card-contenedor">
      <Buscador className=""/>
      <div className="centrado">
        <img className="hero-imagen" src={hero} alt="imagen-de-una-chica-con-portatil-y-cohete-despegando" />
      </div>
    </div> 

    <section className="fondo-azul-claro">
      <div className="card-contenedor">
        <h3 className="h3-main">Clases Destacadas</h3>
        <CardClaseDestacada />
      </div>
    </section>

    <section>
      <div className="card-contenedor">
        <h3 className="h3-main">Todas las clases</h3>
        <CardClase/>
      </div>
    </section>
  </div>)
}

export default Clases;
