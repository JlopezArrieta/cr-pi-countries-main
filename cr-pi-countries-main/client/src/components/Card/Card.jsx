import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = ({ id, name, flagsImage, continents }) => {
  return (
    <div className={style.Card}>

      <NavLink to={`/detail/${id}`}>
        <div>
          <img src={flagsImage} alt="" width={"200px"} />
        </div>

        <div>
          <h3>{name}</h3>
          <h2>{continents}</h2>
        </div>
      </NavLink>

    </div>
  );
}

export default Card;