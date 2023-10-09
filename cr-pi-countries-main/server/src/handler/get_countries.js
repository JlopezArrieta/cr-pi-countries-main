const getCountriesCTLR = require('../controllers/getCountriesCTLR');

const get_Countries = async(req, res) => {
    try {
        const respCountries = await getCountriesCTLR();
        return res.status(200).json(respCountries);
    } catch (error) {
        return res.status(400).json({error: "Paises no encontrados"});
    }
}

module.exports = get_Countries;