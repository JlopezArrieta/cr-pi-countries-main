const { Country } = require('../db');

const getCountryById = async (id) => {
  const countryDB = await Country.findByPk(id);
  if(!countryDB) throw new Error("country not found");
  return countryDB;
}

module.exports = getCountryById;