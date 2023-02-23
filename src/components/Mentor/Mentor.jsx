import React, {useEffect,useState} from 'react'
// import axios from 'axios'
import avatar from '../../assets/Avatar.png'
import estrellas from '../../assets/5-star.png'
import './Mentor.css'

const Mentor = () => {
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
    <div className='alineado max-width-2'>
        <img className='avatar' src={avatar} alt="" />
        <div className='columna'>
           <p className='margin-auto-0 texto-negro'>Jane Cooper</p>
           <div className='fila margin-auto-0'>
                <p className='texto-lila margin-auto-0'>4.3</p>
                <img className='imagen-estrellas' src={estrellas} alt="" />
           </div>
        </div>
            
    </div>
  )
}

export default Mentor