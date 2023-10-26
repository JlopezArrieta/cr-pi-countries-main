const { Country, Activity } = require('../db');

const getCountIdCLL = async (id) => {
  const countryDB = await Country.findByPk(id.toUpperCase(), {
    include: {
      model: Activity,
      attributes: ['name', 'difficulty', 'duration', 'season'],
      through:{
        attributes: []
      }
    }
  });
  if (!countryDB) return "Country not found with that ID";
  return countryDB;
}

module.exports = getCountIdCLL;
