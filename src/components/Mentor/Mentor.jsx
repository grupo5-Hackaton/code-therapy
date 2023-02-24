import avatar from "../../assets/Avatar.png";
import estrellas from "../../assets/5-star.png";
import "./Mentor.css";

const Mentor = () => {
  return (
    <div className="alineado max-width-2">
      <img className="avatar" src={avatar} alt="" />
      <div className="columna">
        <p className="margin-auto-0 texto-negro">Jane Cooper</p>
        <div className="fila margin-auto-0">
          <p className="texto-lila margin-auto-0">4.3</p>
          <img className="imagen-estrellas" src={estrellas} alt="Estrellas" />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
