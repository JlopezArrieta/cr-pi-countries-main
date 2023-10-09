const { Country } = require('../db');
const axios = require('axios');


const getCountries = async () => {
const countriesDB = await Country.findAll();
  if (countriesDB.length > 0) return countriesDB;
    const datacountries = await axios.get('http://localhost:5000/countries');
    const arrayCountries = datacountries.data.map(C => {
      return {
        id: C.cca3,
        nombre: C.name.common,
        imagenbandera: C.flags.png,
        continente: C.continents[0],
        capital: C.capital ? C.capital[0] : "No Informada",
        subregion: C.subregion,
        area: C.area,
        poblacion: C.population,
      }
    })
    const countriesCreados = await Country.bulkCreate(arrayCountries);
    return countriesCreados;
}

module.exports = getCountries;