import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.contLanding}>
      <h1 className={style.titulo}>Landing Page</h1>
      <h2 className={style.texto}>
      Travel the world and have fun.
      </h2>
      <NavLink to="/home">
        <button className={style.botonGo}>WE ARE GOING ON A TRIP ✈️</button>
      </NavLink> 

    </div>
  );
};

export default Landing;