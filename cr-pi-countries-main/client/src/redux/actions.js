import axios from "axios";
import { GET_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME, GET_ACTIVITIES } from "./actions-types";

const endpoint = "http://localhost:3001/countries";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      console.log(axios)
      if (!data) throw new Error("Los paises No Fueron Encontrados");
      return dispatch({
        type: GET_COUNTRIES,
        payload: data
      })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export const getCountriesById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      if (!response) throw new Error("No se puede encontrar el detalle de ese país.");
      return dispatch({
        type: GET_COUNTRIES_BY_ID,
        payload: response.data
      })
    } catch (error) {
      return res.status(400).json({ error: error.message })
      console.log(error)
    }
  }
}

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/country?name=${name}`);
      if (response) {
        return dispatch({
          type: GET_COUNTRIES_BY_NAME,
          payload: response.data
        })
      }
    } catch (error) {
      alert("El pais con ese Nombre no Fue Encontrado");
    }
  }
}


// if (!name) return alert('Ingrese Un Nombre Valido');
//     if (countries.map((country) => country.name === name)) {
//       return alert('El Nombre de este pais ya esta ingresado');
//     }


