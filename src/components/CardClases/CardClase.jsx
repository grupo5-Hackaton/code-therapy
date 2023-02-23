import React, {useEffect,useState} from 'react'
// import axios from 'axios'
import Card from 'react-bootstrap/Card';
import arrow from '../../assets/arrow-up-right.png'





const CardClase = () => {
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
        <section id='experience'>      
            <h1>Las cosicas chulas</h1>
            <h2>Proyectos</h2>
            
                {/* {detalle.map((proyecto)=> */}
                <div className='separacion'>
                    <div className="card">
                        <Card>
                            <div className='card-contenedor'>
                                <div className='fila-space-between'>
                                    <p className='supra-titulo texto-lila'>Typescript</p>
                                    <img className='arrow' src={arrow} alt="" />
                                </div>
                                <div className='fila-space-between'>
                                    <h3>¿Qué es Typescript?</h3>
                                    <p className='texto-lila texto-grande'>20 €/h</p>
                                </div>
                            </div>
                        </Card>
                        
                    </div>
                </div>
                {/* )} */}
            
        </section> 
    </div>
  )
}

export default CardClase





