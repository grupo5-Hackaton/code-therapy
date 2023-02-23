import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clases from "./pages/Clases";
import Bienvenida from "./pages/Bienvenida";
import Perfil from "./pages/Perfil"
import DetalleClases from "./pages/DetalleClase"


//Rutas staticas excepto DetalleClase la cual es dinamica.

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bienvenida/>} />

        <Route path="/Perfil" element={<Perfil/>}/>

        <Route path="/Clases" element={<Clases/>} />

        <Route path="/DetalleClase/:claseid" element={<DetalleClases/>} />    {/* Se pasa el id para tener un termino de busqueda */}

      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
