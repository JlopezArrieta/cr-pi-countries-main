const { Country } = require('../db');

const getCounPoblaCLL = async () => {
  const countryPobla = await Country.findAll()
  const countryMayorPobla = countryPobla.sort((a, b) => b.population - a.population);
  return countryMayorPobla[0];
}

module.exports = getCounPoblaCLL;