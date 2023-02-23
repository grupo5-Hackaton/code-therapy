import React, {useEffect,useState} from 'react'
// import axios from 'axios'
import Card from 'react-bootstrap/Card';
import js from '../../assets/js.png'
import arrow from '../../assets/arrow-up-right.png'
import Mentor from '../Mentor/Mentor';

const CardClaseDestacada = () => {
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
    <div>

        <div className='separacion'>
            <div className="card">
                <Card>
                    <div className='card-contenedor'>
                        <div className='centrado separacion-grande'>
                            <img src={js} alt="" />
                        </div>
                        <p className='supra-titulo texto-lila'>Javascript</p>
                        <div className='fila-space-between'>
                            <h3>Fundamentos de Javascript</h3>
                            <img className='arrow' src={arrow} alt="" />
                        </div>
                        <p>Mis clases particulares están enfocadas a personas que quieren aprender JS desde 0.</p>
                        <div className='fila-space-between alineado'>
                            <Mentor></Mentor>
                            <p className='texto-lila texto-grande'>20 €/h</p>
                        </div>
                    </div>
                </Card>
                
            </div>
        </div>
            
    </div>
  )
}

export default CardClaseDestacada