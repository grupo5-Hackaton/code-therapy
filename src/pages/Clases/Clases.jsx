import React from "react";
import CardClase from "../../components/CardClases/CardClase";
import Buscador from '../../components/buscador/Buscador'
import hero from '../../assets/imagen-clases-lista.png'
import CardClaseDestacada from "../../components/CardClasesDestacadas/CardClaseDestacada";
import './Clases.css'
import js from "../../assets/js.png"
import python from "../../assets/python.png"
import ts from "../../assets/typescript.png"

function Clases() {
  return (
  <div>
    <div className="card-contenedor">
      <Buscador />
      <div className="centrado">
        <img className="hero-imagen" src={hero} alt="imagen de una chica con portatil y cohete despegando" />
      </div>
    </div> 

    <section className="fondo-azul-claro">
      <div className="card-contenedor">
        <h3 className="h3-main">Clases Destacadas</h3>
        <CardClaseDestacada imagen={js} lenguaje={"Javascript"} titulo={"Fundamentos de JS"} descripcion={"Mis clases particulares están enfocadas a personas que quieren aprender JS desde 0."} precio={15}/>
        <CardClaseDestacada imagen={python} lenguaje={"Python"} titulo={"POO en Python"} descripcion={"¿Quieres aprender la Programación Orientada a Objetos en Python? ¡Esta es tu clase? "} precio={20}/>
        <CardClaseDestacada imagen={ts} lenguaje={"Typescript"} titulo={"Fundamentos de JS"} descripcion={"Typescript tiene muchas ventajas. ¡Conócelas y empieza a utilizar TS en tu próximo proyecto!"} precio={20}/>
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
