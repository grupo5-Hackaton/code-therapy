import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clases from "./pages/Clases/Clases";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
import DetalleClases from "./pages/DetalleClase";
import Layout from "./Layout/Layout";
import ClaseEnDetalle from "./pages/ClaseEnDetalle/ClaseEnDetalle";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Bienvenida />} />

            <Route path="/Clases" element={<Clases />} />

            <Route path="/DetalleClase/:claseid" element={<DetalleClases />} />

            <Route path="/clase-en-detalle" element={<ClaseEnDetalle />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
