import React, { useEffect, useState } from "react";
import Mentor from "../../components/Mentor/Mentor";
import Boton from "../../components/boton/Boton";
import { useParams } from "react-router-dom";
import axios from "axios";

function ClaseEnDetalle() {
  const [clase, setClases] = useState(); //Utilizaremos useState para manipular los datos

  //Referencia a nuestra api
  const { claseid } = useParams();
  console.log(claseid); //Traemos el parametro que pasamos por hooks

  useEffect(() => {
    //Convertimos los datos json para ser leidos
    async function fetchObjeto() {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/course/${claseid}`
      ); //Hacemos referencia a nuestra ruta get individual(backend).
      setClases(response.data);
    }

    fetchObjeto();
  }, []);

  //Para llamar los parametros de la api utilizamos la var clase.parametro.
  console.log(clase);

  return (
    <div>
      {clase.map((proyecto) => (
        <div className="vh-80 ">
          <section className="card-contenedor ">
            <p className="supra-titulo texto-lila top-margin-2em">
              {proyecto.language}
            </p>
            <h3 className="h3-main">{proyecto.name}</h3>
            <p>{proyecto.description}</p>
            <p className="texto-grande texto-lila separacion-grande">
              {proyecto.price} €/h
            </p>
            <Mentor />
            <div className="top-margin-2em">
              <p>
                Soy una programadora desde 2015 y desde entonces he usado
                Javascript en cada uno de mis proyectos.{" "}
              </p>
            </div>
            <div className="top-margin-2em separacion-grande">
              <p className="texto-grande texto-negro">
                Disponibilidad horaria:
              </p>
              <p>Lunes y miércoles entre 16:00 y 20:00</p>
            </div>
            <div className="centrado">
              <Boton className="boton-general" text="Contacta conmigo" />
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default ClaseEnDetalle;
