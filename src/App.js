import "./App.css";
import Bienvenida from "./pages/Bienvenida";
import Header from "./components/header/Header";
import CardClase from "./components/CardClases/CardClase";

function App() {
  return (
    <>
      <Header />
      <Bienvenida />
      <CardClase />
    </>
  );
}

export default App;
