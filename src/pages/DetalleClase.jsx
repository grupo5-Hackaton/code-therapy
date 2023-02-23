// import { useParams } from 'react-router-dom'

import React, {useEffect,useState} from 'react'
// import axios from 'axios'

const DetalleClase = () => {
    const [clase, setClases] = useState(null);

  useEffect(() => {
    async function fetchObjeto() {
      // const response = await axios.get('/api/objeto/1');
      // setClases(response.data);
    }

    fetchObjeto();
  }, []);



  return (
    <div>{clase.map((proyecto)=>
        <div className='separacion'>
            <div className="card">
                <div className='card-contenedor'>
                    <div className='fila-space-between'>
                        <p className='supra-titulo texto-lila'>{proyecto.id}</p>
                    </div>
                    <div className='fila-space-between'>
                        <h3>{proyecto.Nombre}</h3>
                        <p className='texto-lila texto-grande'>20 €/h</p>
                    </div>
                </div>
        </div>
    </div>
        )}</div>
  )
}

export default DetalleClase