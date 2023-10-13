const { Country, Activity } = require('../db');

const getCountIdCLL = async (id) => {
  const countryDB = await Country.findByPk(id.toUpperCase(), {
    include: {
      model: Activity,
      attributes: ['name']
    }
  });
  if (!countryDB) return "Pais no Encontrado";
  return countryDB;
}

module.exports = getCountIdCLL;
