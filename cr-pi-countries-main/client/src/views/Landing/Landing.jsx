import style from "./Landing.module.css";
import Logolanding from "../Imagenes/LogoLanding.jpg";
import {NavLink} from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.homeContainer}>
      <h1 className={style.heading}> Los viajes son en la juventud una parte de educación y, en la vejez, una parte de experiencia (Francis Bacon)</h1>
      <NavLink to="/home">
        <button>Nos Vamos de Viaje ✈️</button>
      </NavLink>
      <img src={Logolanding} className={style.landingImage} alt="LogoMundoTerrestre" />
    </div>
  );
};

export default Landing;