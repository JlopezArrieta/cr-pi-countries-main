import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { getPageRestored } from "../../redux/actionsFilters";

const SearchBar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (evento) => {
    evento.preventDefault()
    setName(evento.target.value)
  }
 
  const handleSubmit = (evento) => {
    evento.preventDefault()
    dispatch(getCountriesByName(name))
    dispatch(getPageRestored())
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
    </div >
  );
};

export default SearchBar;