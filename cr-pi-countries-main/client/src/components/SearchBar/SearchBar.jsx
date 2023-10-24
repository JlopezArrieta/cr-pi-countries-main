import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountriesByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (evento) => {
    evento.preventDefault()
    setName(evento.target.value)
  }

  const handlerClick = (event) => {
    dispatch(getCountries())
  }


  const handleSubmit = (evento) => {
    evento.preventDefault()
    dispatch(getCountriesByName(name))
    setName('')
    navigate("/home");
  }

  return (
    <div>
      <input
        type="search"
        value={name}
        placeholder="Country Search"
        onChange={handleInputChange}
      />
      <button className={style.navbarlinks} type="submit" onClick={handleSubmit}>Search</button>
      {/* <button onClick={handlerClick}>Reload</button> */}
    </div >
  );
};

export default SearchBar;