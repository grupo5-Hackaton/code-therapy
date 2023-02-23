import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import './Style.css'





const CardClase = () => {
    const origin = 'http://127.0.0.1:8000/api'
    const [detalle,setDetalle] = useState([]);
    useEffect(()=>{
        getAllDetalles();
    },[])

    const getAllDetalles = async () =>{
        const response = await axios.get(`${origin}/proyectos/`)
        setDetalle(response.data)
        console.log(response.data)
    }


  return (
    <div>
        <section id='experience'>      
            <h1>Las cosicas chulas</h1>
            <h2>Proyectos</h2>
            
                {detalle.map((proyecto)=>
                <div className='separacion'>
                    <div className="card" key={proyecto.id}>
                        <Card>
                            <Card.Header>{proyecto.id}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    {proyecto.Nombre}
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        
                    </div>
                </div>
                )}
            
        </section> 
    </div>
  )
}

export default CardClase





