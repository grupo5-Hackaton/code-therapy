import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clases from "./pages/Clases/Clases";
import Bienvenida from "./pages/Bienvenida/Bienvenida";
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

            <Route
              path="/clase-en-detalle/:claseid"
              element={<ClaseEnDetalle />}
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
