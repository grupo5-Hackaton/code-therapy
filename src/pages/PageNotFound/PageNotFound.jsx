import Boton from '../../components/boton/Boton'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
      <div className="card-contenedor top-margin-2em">
        <p className="h1-main">Page not found</p>
        <Link to="/"><Boton text="Ir al inicio"/></Link>
            
      </div>
    );
}

export default PageNotFound;