import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clases from "./pages/Clases";
import Bienvenida from "./pages/Bienvenida";
import Perfil from "./pages/Perfil";
import DetalleClases from "./pages/DetalleClase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida />} />

          <Route path="/Perfil" element={<Perfil />} />

          <Route path="/Clases" element={<Clases />} />

          <Route path="/DetalleClase/:claseid" element={<DetalleClases />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
