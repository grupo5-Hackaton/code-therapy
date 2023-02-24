import Mentor from "../../components/Mentor/Mentor";
import Boton from "../../components/boton/Boton";
import "../../index.css";

function ClaseEnDetalle() {
  return (
    <div>
      <div className="vh-80 ">
        <section className="card-contenedor">
          <p className="supra-titulo texto-lila top-margin-2em">JavaScript</p>
          <h3 className="h3-main">Fundamentos de JS</h3>
          <p>
            Mis clases particulares están enfocadas a personas que quieren
            aprender JS desde 0.
          </p>
          <p className="texto-grande texto-lila separacion-grande">20 €/h</p>
          <Mentor />
          <div className="top-margin-2em">
            <p>
              Soy una programadora desde 2015 y desde entonces he usado
              Javascript en cada uno de mis proyectos.
            </p>
          </div>
          <div className="top-margin-2em separacion-grande">
            <p className="texto-grande texto-negro">Disponibilidad horaria:</p>
            <p>Lunes y miércoles entre 16:00 y 20:00</p>
          </div>
          <div className="centrado mb-5">
            <Boton className="boton-general" text="Contacta conmigo" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClaseEnDetalle;
