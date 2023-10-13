const { Op } = require('sequelize');
const { Country } = require('../db');

const getCountNameCLL = async (name) => {
  const countriesNameDB = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  })
  return countriesNameDB;
}

module.exports = getCountNameCLL;