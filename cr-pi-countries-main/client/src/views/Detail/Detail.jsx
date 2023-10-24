import style from "./Detail.module.css";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountriesById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail);
  //conectarse al estado global y traer el dato de datail

  const { id } = useParams();//recibe el id

  useEffect(() => {
    dispatch(getCountriesById(id))
  }, [dispatch]);

  return (
    <div className={style.contDetail}>
      <h1>Detail Page</h1>
      <div className={style.countryDetails}>
        <img src={detail.flagsImage} alt={detail.name}  className={style.flagImage}/>
        <div className={style.countryInfo}>
          <h2>Id: {detail.id}</h2>
          <h2>Name: {detail.name}</h2>
          <p>Capital: {detail.capital}</p>
          <p>Continent: {detail.continents}</p>
          <p>Subregion: {detail.subregion}</p>
          <p>Area: {detail.area}</p>
          <p>Population: {detail.population}</p>
          <div>
            <p>
              {
                detail?.Activities?.map((activity, index) => (
                  <div key={index}>
                    <h3>Activity</h3>
                    <p>name:{activity.name}</p>
                    <p>difficulty:{activity.difficulty}</p>
                    <p>duration:{activity.duration}</p>
                    <p>season:{activity.season}</p>
                  </div>
                ))
              }
            </p>
          </div>

        </div>
      </div>
      <div><NavLink to="/home">
        <button>Back Home</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Detail;

