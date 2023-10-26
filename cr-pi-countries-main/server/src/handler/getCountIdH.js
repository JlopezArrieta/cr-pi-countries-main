const getCountIdCLL = require('../controllers/getCountIdCLL');

const getCountIdH = async (req, res) => {
  try {
    const { idPais } = req.params;
    const resCountry = await getCountIdCLL(idPais);
    return res.status(200).json(resCountry);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = getCountIdH;