import React, {useEffect,useState} from 'react'
// import axios from 'axios'
import Card from 'react-bootstrap/Card';
import js from '../../assets/js.png'
import arrow from '../../assets/arrow-up-right.png'
import Mentor from '../Mentor/Mentor';

const CardClaseDestacada = ({ imagen, lenguaje, titulo, descripcion, precio }) => {
    const origin = 'http://127.0.0.1:8000/api'
    const [detalle,setDetalle] = useState([]);
    useEffect(()=>{
        getAllDetalles();
    },[])

    const getAllDetalles = async () =>{
        // const response = await axios.get(`${origin}/proyectos/`)
        // setDetalle(response.data)
        // console.log(response.data)
    }


  return (
    

        <div className='separacion'>
            <div className="card">
                <Card>
                    <div className='card-contenedor'>
                        <div className='centrado separacion-grande'>
                            <img src={imagen} alt="" />
                        </div>
                        <p className='supra-titulo texto-lila'>{lenguaje}</p>
                        <div className='fila-space-between'>
                            <h3>{titulo}</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>
                        <p>{descripcion}</p>
                        <div className='fila-space-between alineado'>
                            <Mentor></Mentor>
                            <p className='texto-lila texto-grande'>{precio} €/h</p>
                        </div>
                    </div>
                </Card>
                
            </div>
        </div>
            
   
  )
}

export default CardClaseDestacada