const  getCountPoblaCLL = require('../controllers/getCountPoblaCLL');

const getCountPoblaH = async (req, res) => {
  try {
    const resCountryPobla = await getCountPoblaCLL();
    return res.status(200).json(resCountryPobla);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = getCountPoblaH;