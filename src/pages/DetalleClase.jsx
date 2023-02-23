import { useParams } from 'react-router-dom'

import React, {useEffect,useState} from 'react'
import axios from 'axios'

const DetalleClase = () => {
    const [clase, setClases] = useState(null);

    const origin = 'http://127.0.0.1:8000/api'
    const{claseid} = useParams()
    console.log(claseid)

  useEffect(() => {
    async function fetchObjeto() {
      const response = await axios.get(`${origin}/proyecto/${claseid}`);
      setClases(response.data);
    }

    fetchObjeto();
  }, []);

console.log(clase)
console.log(clase.id)
console.log(clase.Nombre)

  return (
    <div>
        {clase.Nombre}
        {clase.id}
    </div>
  )
}

export default DetalleClase