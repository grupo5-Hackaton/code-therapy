import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import arrow from "../../assets/arrow-up-right.png";
import { Link } from "react-router-dom";

const CardClase = () => {
  const origin = "http://127.0.0.1:8000/api";
  const [detalle, setDetalle] = useState([]);
  useEffect(() => {
    getAllDetalles();
  }, []);

  const getAllDetalles = async () => {
    const response = await axios.get(`${origin}/course/`);
    setDetalle(response.data.data);
  };

  return (
    <div>
      <section id="experience">
        {detalle.map((proyecto) => (
          <div className="separacion" key={proyecto.id}>
            <Link to={`/clase-en-detalle`}>
              <div className="card">
                <Card>
                  <div className="card-contenedor">
                    <div className="fila-space-between">
                      <p className="supra-titulo texto-lila">
                        {proyecto.language}
                      </p>
                      <img className="arrow" src={arrow} alt="Flecha" />
                    </div>
                    <div className="fila-space-between">
                      <h3>{proyecto.name}</h3>
                      <p className="texto-lila texto-grande">
                        {proyecto.price} €/h
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardClase;
