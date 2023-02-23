import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clases from "./pages/Clases/Clases";
import Bienvenida from "./pages/Bienvenida";
import Perfil from "./pages/Perfil";
import DetalleClases from "./pages/DetalleClase";
import Layout from "./Layout/Layout";
import ClaseEnDetalle from "./pages/ClaseEnDetalle/ClaseEnDetalle"
import axios from "axios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Bienvenida />} />
            
          <Route path="/Perfil" element={<Perfil />} />

          <Route path="/Clases" element={<Clases />} />

          <Route path="/DetalleClase/:claseid" element={<DetalleClases />} />

          <Route path="/clase-en-detalle" element={<ClaseEnDetalle />} />
      
        
        </Route>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
