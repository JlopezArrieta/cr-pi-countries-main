const { Router } = require("express");
const get_countries = require('../handler/get_countries');
const get_countryById = require('../handler/get_countryById');


const router = Router();

router.get('/countries', get_countries); 

router.get('/countries/:idPais', get_countryById);



module.exports = router;
