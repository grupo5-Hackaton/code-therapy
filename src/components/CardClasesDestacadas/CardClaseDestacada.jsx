import Card from "react-bootstrap/Card";
import arrow from "../../assets/arrow-up-right.png";
import Mentor from "../Mentor/Mentor";

const CardClaseDestacada = ({
  imagen,
  lenguaje,
  titulo,
  descripcion,
  precio,
}) => {
  return (
    <div className="separacion">
      <div className="card">
        <Card>
          <div className="card-contenedor">
            <div className="centrado separacion-grande">
              <img src={imagen} alt="" />
            </div>
            <p className="supra-titulo texto-lila">{lenguaje}</p>
            <div className="fila-space-between">
              <h3>{titulo}</h3>
              <img className="arrow" src={arrow} alt="" />
            </div>
            <p>{descripcion}</p>
            <div className="fila-space-between alineado">
              <Mentor></Mentor>
              <p className="texto-lila texto-grande">{precio} €/h</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardClaseDestacada;
