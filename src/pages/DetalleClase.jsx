import { Link, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

const DetalleClase = () => {
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
      <div>
        <h1>Aqui van las cosas </h1>
      </div>
      <Link to={"/Clases"}>Quiere ir pa'atras?</Link>
    </div>
  );
};

export default DetalleClase;
