import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  GET_ACTIVITIES
} from "./actions-types";

const endpoint = "http://localhost:3001/countries";

export const getCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data) throw new Error("The countries were not found");
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
      if (!response) throw new Error("Cannot find the details of that country");
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
      alert("The country with that name was not found");//El pais con ese Nombre no Fue Encontrado
    }
  }
}

export const postActivities = (activityData) => {
  return async (dispatch) => {
    try {
     await axios.post("http://localhost:3001/activities", activityData);
     alert("The activity was created successfully");
    } catch (error) {
      alert("The activity with that name already exists");
    }
  }
}


export const getActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/activities");
      if (!response.data) throw Error("No activities available");
                            //No hay actividades disponibles.
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response.data,
      })
    } catch (error) {
      console.log(error.message);
      alert('You must create the activities');
             //Debes crear las actividades.
    }
  }
};




