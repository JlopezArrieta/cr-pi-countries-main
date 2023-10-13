const getCountNameCLL = require('../controllers/getCountNameCLL');

const getCountNameH = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const resCountryName = await getCountNameCLL(name);
      if (resCountryName.length > 0)
        return res.status(200).json(resCountryName);
      else
        return res.status(300).send('No se encontraron paises que contengan el nombre: ' + name);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = getCountNameH;
