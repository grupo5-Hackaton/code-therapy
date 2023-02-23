import { useParams } from 'react-router-dom'

import React, {useEffect,useState} from 'react'
import axios from 'axios'

const DetalleClase = () => {
    const [clase, setClases] = useState(null);      //Utilizaremos useState para manipular los datos

    const origin = 'http://127.0.0.1:8000/api'      //Referencia a nuestra api
    const{claseid} = useParams()                    //Traemos el parametro que pasamos por hooks

  useEffect(() => {                     //Convertimos los datos json para ser leidos
    async function fetchObjeto() {
      const response = await axios.get(`${origin}/proyecto/${claseid}`);    //Hacemos referencia a nuestra ruta get individual(backend).
      setClases(response.data);
    }

    fetchObjeto();
  }, []);

  //Para llamar los parametros de la api utilizamos la var clase.parametro.

  return (
    <div>
        {clase.Nombre}      
        {clase.id}
    </div>
  )
}

export default DetalleClase