import { GET_COUNTRIES, GET_COUNTRIES_BY_ID, GET_COUNTRIES_BY_NAME } from "./actions-types";

const initialState = {
  countriesPage: [],
  countries: [],
  allCountries: [],
  detail: {},
  order: "",
  filterByContinent: "",
  FilterByActivity: ""
}

const reducer = (state = initialState, action) => {
  const ITEMS_PER_PAGE = 10;
  switch (action.type) {

    case GET_COUNTRIES:
      return {
        ...state,
        // countriesPage: [...action.payload].slice(0, ITEMS_PER_PAGE),
        countries: action.payload,
        allCountries: action.payload,
        


      }

      case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        detail: action.payload
      }

      case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }

      // case ORDER:
      //   return {
      //     ...state,
      //     order: payload,
      //   };
  
      // case FILTER_BY_CONTINENT:
      //   return {
      //     ...state,
      //     filterByContinent: payload,
      //   };
  
      // case FILTER_BY_ACTIVITY:
      //   return {
      //     ...state,
      //     filterByActivity: payload,
      //   };
  
      // case COMBINED_BY_FILTERS:
      //   return {
      //     ...state,
      //     countries: payload,
        // };

    default:
      return { ...state }
  }
}

export default reducer;




