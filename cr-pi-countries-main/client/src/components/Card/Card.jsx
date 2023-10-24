import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = ({ id, name, flagsImage, continents, population }) => {
  return (
    <div className={style.Card}>

      <NavLink to={`/detail/${id}`}>
        <div className={style.flagsImage}>
          <img src={flagsImage} alt="" />
        </div>

        <div>
          <h3>{name}</h3>
          <h2>{continents}</h2>
          <h2>{population}</h2>
        </div>
      </NavLink>

    </div>
  );
}

export default Card;