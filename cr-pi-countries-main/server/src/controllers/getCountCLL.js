const { Country, Activity } = require('../db');
const axios = require('axios'); 
const URL = 'http://localhost:5000/countries';

// Función asincrónica para obtener datos
const getCountCLL = async () => {
  try {
    // Consultar la base de datos una vez
    const countriesDB = await Country.findAll({
      include: {
        model: Activity,
      }
    });

    // Si no hay datos en la base de datos, obtenerlos de la URL
    if (!countriesDB.length) {
      const dataCountries = await axios.get(URL);
      const arrayCountries = dataCountries.data.map(C => {
        return {
          id: C.cca3,
          name: C.name.common,
          flagsImage: C.flags.svg,
          continents: C.continents[0],
          capital: C.capital ? C.capital[0] : "No Informada",
          subregion: C.subregion,
          area: C.area,
          population: C.population,
        }
      });

      // Almacenar los datos recuperados en la base de datos
      await Country.bulkCreate(arrayCountries);

      // Consultar la base de datos nuevamente
      const countries = await Country.findAll({
        include: {
          model: Activity,
        }
      });

      return countries;
    }

    // Procesar y mapear datos de la base de datos
    const countBD = countriesDB.map(({ id, name, flagsImage, continents, capital, subregion, area, population, Activities }) => {
      return {
        id,
        name,
        flagsImage,
        continents,
        capital,
        subregion,
        area,
        population,
        activity: Activities.map(a => a.name)
      }
    });

    return countBD;
  } catch (error) {
    console.error("Error en getCountCLL:", error);
    throw error; // Reenviar el error para que se maneje en el nivel superior
  }
}

module.exports = getCountCLL;