const { Country } = require('../db');
const axios = require('axios'); 
const URL = 'http://localhost:5000/countries';

const getCountCLL = async () => {
const countriesDB = await Country.findAll();
  if (countriesDB.length > 0) return countriesDB;
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
    })
    const countriesCreados = await Country.bulkCreate(arrayCountries);
    return countriesCreados;
}

module.exports = getCountCLL;