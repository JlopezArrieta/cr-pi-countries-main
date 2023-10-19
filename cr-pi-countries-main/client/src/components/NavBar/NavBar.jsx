import style from "./NavBar.module.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navbar}>

      <div className={style.navbarlinks}>
        <NavLink className={style.navbarpage} to="/">
          <button >LANDING</button>
        </NavLink>
      </div>

      <div className={style.navbarlinks}>
        <NavLink className={style.navbarpage} to="/home">
          <button>HOME</button>
        </NavLink>
      </div>

      <div className={style.navbarlinks}>
        <NavLink className={style.navbarpage} to="/form">
          <button>FORM</button>
        </NavLink>
      </div>

      <div>
        <SearchBar />
      </div>

    </div>
  );
};

export default NavBar;