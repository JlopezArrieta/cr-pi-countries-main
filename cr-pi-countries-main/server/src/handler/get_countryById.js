const getCountryByIdCTLR = require('../controllers/getCountryByIdCTLR');

const get_CountryById = async(req, res) => {
    try {
        const {idPais} = req.params;
        const respCountry = await getCountryByIdCTLR(idPais);
        return res.status(200).json(respCountry);
    } catch (error) {
        return res.status(400).json({error: "Pais no encontrado"});
    }
}

module.exports = get_CountryById;