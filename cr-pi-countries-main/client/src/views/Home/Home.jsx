import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import { continentsFilter, activityFilter, orderCont, getPage, getReset } from "../../redux/actionsFilters";

const Home = () => {

  const dispatch = useDispatch();

  //este primer countries es una variable que guarda el cambio de state.
  //Countries de el estado inicial de reducer.

  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const currentPage = useSelector((state) => state.currentPage);

  //Hook que nos ayuda a controlar el ciclo de vida de una pagina, 
  //es decir sus funcionalidades.

  useEffect(() => {
    dispatch(getActivities());
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch]);
  // return (() => {clearDetail()})

  const handlerContinentsFilter = (event) => {
    dispatch(continentsFilter(event.target.value));
  }

  const handlerActivityFilter = (event) => {
    dispatch(activityFilter(event.target.value));
  };

  const handleOrderCountries = (event) => {
    dispatch(orderCont(event.target.value));
  };

  const paging = (event) => {
    dispatch(getPage(event.target.name));
  }

  const reseting = () => {
    document.getElementById("conSelect").selectedIndex = 0;
    document.getElementById("actSelect").selectedIndex = 0;
    dispatch(getReset());
  }

  return (

    <div className={style.contHome}>
      
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        <label>Pages</label>
        <button name="prev" onClick={paging}>prev</button>
        <span>  &lt;&lt; {currentPage + 1} 	&gt;&gt;  </span>
        <button name="next" onClick={paging}>next</button>
      </div>
      <div>
        <label>Reset</label>
        <button name="reset" onClick={reseting}>To Reset</button>

      </div>
      <div>
        <label>F.Continents: </label>
        <select id="conSelect" onChange={handlerContinentsFilter}>
          <option value='allCount'>Select Continent...</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>

      <div>
        <label>F.activity: </label>

        <select id="actSelect" onChange={handlerActivityFilter}
        >
          
          <option value="allActiv">Select Activity...</option>
          {console.log(activities)}
          
          {activities.map((activity) => (
            <option value={activity.name} key={activity.id}>{activity.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Sort by: </label>
        <select onChange={handleOrderCountries}>
          <option value="AZ">Ascendant-AZ</option>
          <option value="ZA">Descendent-ZA</option>
          <option value="Minor-AZ">AZ-Population</option>
          <option value="Higher-ZA" >ZA-Population</option>
        </select>
      </div>

      <div className={style.containerCards}>
        <Cards countries={countries} />
      </div>

    </div>

  )
}

export default Home;