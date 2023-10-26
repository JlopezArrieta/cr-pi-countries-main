const getCountCLL = require('../controllers/getCountCLL');

const getCountH = async (req, res) => {
  try {
    const resCountries = await getCountCLL();
    return res.status(200).json(resCountries);
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = getCountH;