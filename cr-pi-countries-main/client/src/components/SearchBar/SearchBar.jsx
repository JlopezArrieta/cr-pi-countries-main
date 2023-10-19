// import style from "./SearchBar.module.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getCountriesByName} from "../../redux/actions";

const SearchBar = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const handleInputChange =(evento)=>{
    evento.preventDefault()
    setName(evento.target.value)
  }

  const handleSubmit =(evento)=>{
    evento.preventDefault()
    dispatch(getCountriesByName(name))
  }

  return (
    <div>
      <input
        type="search"
        value={name}
        placeholder="Country Search"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </div >
  );
};

export default SearchBar;