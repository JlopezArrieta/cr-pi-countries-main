// import axios from "axios";
// import { ORDER, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, COMBINED_BY_FILTERS, } from "../redux/actions-types";

// export const order = (order) => {
//   return {
//     type: ORDER,
//     payload: order
//   }
// }
// //continents

// export const filterByContinent = (continents) => {
//   return { 
//     type: FILTER_BY_CONTINENT, 
//     payload: continents
//   };
// };

// export const FilterByActivity = (activity) => {
//   return { 
//     type: FILTER_BY_ACTIVITY, 
//     payload: activity 
//   };
// };

// export const combinedByFilters = (order, continents, activity) => {

//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get("http://localhost:3001/countries");

//       let countriesFilters = data;

//       if (order && !continents && !activity) {
//         // Filtrar y ordenar si se proporciona solo el parámetro 'order'
//         if (order === "asc") {
//           countriesFilters.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (order === "desc") {
//           countriesFilters.sort((a, b) => b.name.localeCompare(a.name));
//         } else if (order === "lowerPop") {
//           countriesFilters.sort((a, b) => a.population - b.population);
//         } else if (order === "higherPop") {
//           countriesFilters.sort((a, b) => b.population - a.population);
//         }
//       }

//       else if (!order && continents && !activity) {
//         // Filtrar por continentse si se proporciona solo el parámetro 'continents'
//         countriesFilters = countriesFilters.filter(
//           (country) => country.continents === continents
//         );
//       }

//       else if (!order && !continents && activity) {
//         // Filtrar por actividad si se proporciona solo el parámetro 'activity'
//         countriesFilters = countriesFilters.filter(
//           (country) => country.Activities.some((acti) => acti.name === activity)
//         );
//       }

//       else if (order && continents && !activity) {
//         // Filtrar por orden y continentes si se proporcionan 'order' y 'continents'
//         countriesFilters = countriesFilters.filter(
//           (country) => country.continents === continents
//         );
//         if (order === "asc") {
//           countriesFilters.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (order === "desc") {
//           countriesFilters.sort((a, b) => b.name.localeCompare(a.name));
//         } else if (order === "lowerPop") {
//           countriesFilters.sort((a, b) => a.population - b.population);
//         } else if (order === "higherPop") {
//           countriesFilters.sort((a, b) => b.population - a.population);
//         }
//       }

//       else if (order && !continents && activity) {
//         // Filtrar por orden y actividad si se proporcionan 'order' y 'activity'
//         countriesFilters = countriesFilters.filter((country) =>
//           country.Activities.some((act) => act.name === activity)
//         );
//         if (order === "asc") {
//           countriesFilters.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (order === "desc") {
//           countriesFilters.sort((a, b) => b.name.localeCompare(a.name));
//         } else if (order === "lowerPop") {
//           countriesFilters.sort((a, b) => a.population - b.population);
//         } else if (order === "higherPop") {
//           countriesFilters.sort((a, b) => b.population - a.population);
//         }
//       }

//       else if (!order && continents && activity) {
//         // Filtrar por continentse y actividad si se proporcionan 'continents' y 'activity'
//         countriesFilters = countriesFilters.filter(
//           (country) => country.continents === continents
//         );
//         countriesFilters = countriesFilters.filter((country) =>
//           country.Activities.some((act) => act.name === activity)
//         );
//       }

//       else if (order && continents && activity) {
//         // Filtrar por orden, continentse y actividad si se proporcionan 'order', 'continents' y 'activity'
//         countriesFilters = countriesFilters.filter(
//           (country) => country.continents === continents
//         );
//         countriesFilters = countriesFilters.filter((country) =>
//           country.Activities.some((act) => act.name === activity)
//         );
//         if (order === "asc") {
//           countriesFilters.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (order === "desc") {
//           countriesFilters.sort((a, b) => b.name.localeCompare(a.name));
//         } else if (order === "lowerPop") {
//           countriesFilters.sort((a, b) => a.population - b.population);
//         } else if (order === "higherPop") {
//           countriesFilters.sort((a, b) => b.population - a.population);
//         }
//       }

//       return dispatch({ type: COMBINED_BY_FILTERS, payload: countriesFilters });
//     } catch (error) {
//       alert("Error fetching data");
//     }
//   };
// };