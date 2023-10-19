// import Home from "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
// import { order, filterByContinent, filterByActivity, combinedByFilters } from "../../redux/filters";

const Home = () => {

  const dispatch = useDispatch();
  //este primer countries es una variable que guarda el cambio de state.countries de el estado inicial de reducer.
  const countries = useSelector((state) => state.countries);

  // const order = useSelector((state) => state.order);
  // const filterByContinent = useSelector((state) => state.filterByContinent);
  // const filterByActivity = useSelector((state) => state.filterByActivity);

  //Hook que nos ayuda a controlar el ciclo de vida de una pagina, es decir sus funcionalidades.
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]);
  // return (() => {clearDetail()})

  return (
    <div>
     
        <div>
        <h1>Home Page</h1> 
        </div>
        <div>
        <Cards countries={countries} />
      </div>

    </div>




  )
}

export default Home;