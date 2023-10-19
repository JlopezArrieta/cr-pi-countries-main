import style from "./Landing.module.css";
import Logolanding from "../Imagenes/LogoLanding.jpg";
import {NavLink} from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.homeContainer}>
      <h1>Landing Page</h1>
      <h2 className={style.heading}> 
      Travel is a part of education in youth and, in old age,
      a part of experience (Francis Bacon)
      </h2>
      <NavLink to="/home">
        <button>We Are Going on a Trip ✈️</button>
      </NavLink>
      <img src={Logolanding} className={style.landingImage} alt="LogoMundoTerrestre" />
    </div>
  );
};

export default Landing;