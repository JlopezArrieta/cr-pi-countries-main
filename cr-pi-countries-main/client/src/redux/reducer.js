import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ID,
  GET_COUNTRIES_BY_NAME,
  GET_ACTIVITIES,
  POST_ACTIVITIES,
  CONTINENTS_FILTER,
  ACTIVITY_FILTER,
  ORDER_CONT,
  PAGINATE,
  RESET,
  RESTORE,
} from "./actions-types";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: {},
  filtereds: [],
  filteredsSec: [],
  flagFilter: false,
  flagFilterCon: false,
  flagFilterAct: false,
  currentPage: 0,
}

const reducer = (state = initialState, action) => {
  const ITEMS_PER_PAGE = 10;
  switch (action.type) {

    case GET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload].splice(0, ITEMS_PER_PAGE),
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

    case POST_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      }

    case PAGINATE:
      const nextPage = state.currentPage + 1;
      const prevPage = state.currentPage - 1;
      
      const fIndex = action.payload === "next" ? nextPage * ITEMS_PER_PAGE : prevPage * ITEMS_PER_PAGE;
      
      if (state.flagFilter) {
        if (action.payload === "next" && fIndex >= state.filtereds.length) return state
        else if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          countries: [...state.filtereds].splice(fIndex, ITEMS_PER_PAGE),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        }
      } else {
        if (action.payload === "next" && fIndex >= state.allCountries.length) return state
        else if (action.payload === "prev" && prevPage < 0) return state;

        return {
          ...state,
          countries: [...state.allCountries].splice(fIndex, ITEMS_PER_PAGE),
          currentPage: action.payload === "next" ? nextPage : prevPage,
        }
      }

    case CONTINENTS_FILTER:
      switch (action.payload) {
        case "allCount":
          return {
            ...state,
            countries: [...state.allCountries].splice(0, ITEMS_PER_PAGE),
            currentPage: 0,
            flagFilter: false,
            flagFilterCon: false,
          }
        default:
          let resultFilterCous = [];
          if (state.flagFilter) {
            if (state.flagFilterAct) {
              resultFilterCous = [...state.filteredsSec]?.filter(cont => cont.continents === action.payload)
              return {
                ...state,
                countries: [...resultFilterCous].splice(0, ITEMS_PER_PAGE),
                filtereds: resultFilterCous,
                currentPage: 0,
              }
            } else {
              resultFilterCous = [...state.allCountries]?.filter(cont => cont.continents === action.payload)
              return {
                ...state,
                countries: [...resultFilterCous].splice(0, ITEMS_PER_PAGE),
                filtereds: resultFilterCous,
                filteredsSec: resultFilterCous,
                currentPage: 0,
                flagFilterCon: true,
              }
            }
          } else {
            resultFilterCous = [...state.allCountries]?.filter(cont => cont.continents === action.payload)
            return {
              ...state,
              countries: [...resultFilterCous].splice(0, ITEMS_PER_PAGE),
              filtereds: resultFilterCous,
              filteredsSec: resultFilterCous,
              currentPage: 0,
              flagFilter: true,
              flagFilterCon: true,
            }
          }
      }

    case ACTIVITY_FILTER:
      switch (action.payload) {
        case "allActiv":
          return {
            ...state,
            countries: [...state.allCountries].splice(0, ITEMS_PER_PAGE),
            currentPage: 0,
            flagFilter: false,
            flagFilterAct: false,
          }
        default:
          let resultFilterActs = [];
          if (state.flagFilter) {
            if (state.flagFilterCon) {
              resultFilterActs = [...state.filteredsSec].filter(cont => cont.activity.includes(action.payload))
              return {
                ...state,
                countries: [...resultFilterActs].splice(0, ITEMS_PER_PAGE),
                filtereds: resultFilterActs,
                currentPage: 0,
              }
            } else {
              resultFilterActs = [...state.allCountries].filter(cont => cont.activity.includes(action.payload))
              return {
                ...state,
                countries: [...resultFilterActs].splice(0, ITEMS_PER_PAGE),
                filtereds: resultFilterActs,
                filteredsSec: resultFilterActs,
                currentPage: 0,
                flagFilterAct: true,
              }
            }
          } else {
            resultFilterActs = [...state.allCountries].filter(cont => cont.activity.includes(action.payload))
            return {
              ...state,
              countries: [...resultFilterActs].splice(0, ITEMS_PER_PAGE),
              filtereds: resultFilterActs,
              filteredsSec: resultFilterActs,
              currentPage: 0,
              flagFilter: true,
              flagFilterAct: true,
            }
          }
      }

    //combinacion del filtro con el ordenamiento
    case ORDER_CONT:
      if (!state.flagFilter) {
        switch (action.payload) {
          case "AZ":
            const ascAZ = [...state.allCountries].sort((a, b) => a.name.localeCompare(b.name));
            return {
              ...state,
              countries: [...ascAZ].splice(0, ITEMS_PER_PAGE),
              allCountries: ascAZ,
              currentPage: 0,
            }
          case "ZA":
            const ascZA = [...state.allCountries].sort((a, b) => b.name.localeCompare(a.name));
            return {
              ...state,
              countries: [...ascZA].splice(0, ITEMS_PER_PAGE),
              allCountries: ascZA,
              currentPage: 0,
            }

          case "Minor-AZ":
            const minor = [...state.allCountries].sort((a, b) => a.population - b.population);
            return {
              ...state,
              countries: [...minor].splice(0, ITEMS_PER_PAGE),
              allCountries: minor,
              currentPage: 0,
            }

          case "Higher-ZA":
            const higher = [...state.allCountries].sort((a, b) => b.population - a.population);
            return {
              ...state,
              countries: [...higher].splice(0, ITEMS_PER_PAGE),
              allCountries: higher,
              currentPage: 0,
            }
        }
      } else {
        switch (action.payload) {
          case "AZ":
            const ascAZ = [...state.filtereds].sort((a, b) => a.name.localeCompare(b.name));
            return {
              ...state,
              countries: [...ascAZ].splice(0, ITEMS_PER_PAGE),
              filtereds: ascAZ,
              currentPage: 0,
            }
          case "ZA":
            const ascZA = [...state.filtereds].sort((a, b) => b.name.localeCompare(a.name));
            return {
              ...state,
              countries: [...ascZA].splice(0, ITEMS_PER_PAGE),
              filtereds: ascZA,
              currentPage: 0,
            }

          case "Minor-AZ":
            const minor = [...state.filtereds].sort((a, b) => a.population - b.population);
            return {
              ...state,
              countries: [...minor].splice(0, ITEMS_PER_PAGE),
              filtereds: minor,
              currentPage: 0,
            }

          case "Higher-ZA":
            const higher = [...state.filtereds].sort((a, b) => b.population - a.population);
            return {
              ...state,
              countries: [...higher].splice(0, ITEMS_PER_PAGE),
              filtereds: higher,
              currentPage: 0,
            }
        }
      }

    case RESET:
      return {
        ...state,
        countries: [...state.allCountries].splice(0, ITEMS_PER_PAGE),
        allCountries: state.allCountries,
        currentPage: 0,
        flagFilter: false,
        flagFilterCon: false,
        flagFilterAct: false,
        filtereds: []
      }

      case RESTORE:
        return {
          ...state,
          currentPage: 0
        }

    default:
      return { ...state }
  }
}

export default reducer;




