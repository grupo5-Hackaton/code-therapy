import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import arrow from '../../assets/arrow-up-right.png'
import './Style.css'
import { Link } from 'react-router-dom';





const CardClase = () => {
    const origin = 'http://127.0.0.1:8000/api'      //Llamamos al http de la api
    const [detalle,setDetalle] = useState([]);      //Se utiliza para manipular los datos
    useEffect(()=>{
        getAllDetalles();
    },[])

    const getAllDetalles = async () =>{                         //Funcion para coger todos los datos de la api
         const response = await axios.get(`${origin}/proyectos/`)   //Ruta necesaria para la cogida de información
         setDetalle(response.data)
         console.log(response.data)
    }


  return (
    <div>
        <section id='experience'>      
            <h1>Las cosicas chulas</h1>
            <h2>Proyectos</h2>
            {/* Se hace un map para pasar por todos los obejtos de la api*/}
                 {detalle.map((proyecto)=>                      
                <div className='separacion' key={proyecto.id}>      {/* se pone como key la id del objeto */}
                <Link to={`/DetalleClase/${proyecto.id}`}>          {/* Tambien se para el id para la pagina personalizada */}
                    <div className="card">
                        <Card>
                            <div className='card-contenedor'>
                                <div className='fila-space-between'>
                                    <p className='supra-titulo texto-lila'>{proyecto.id}</p>
                                    <img className='arrow' src={arrow} alt="" />
                                </div>
                                <div className='fila-space-between'>
                                    <h3>{proyecto.Nombre}</h3>
                                    <p className='texto-lila texto-grande'>20 €/h</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Link> {/* Se hace un link(a href) para solo tener que hacer clic en la card*/}
            </div>
                )}
            
        </section> 
    </div>
  )
}

export default CardClase





