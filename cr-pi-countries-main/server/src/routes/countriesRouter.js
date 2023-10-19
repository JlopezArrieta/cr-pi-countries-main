const { Router } = require("express");
const getCountH = require('../handler/getCountH');
const getCountIdH = require('../handler/getCountIdH');
const getCountNameH = require('../handler/getCountNameH');


const router = Router();


router.get('/countries', getCountH);

router.get('/countries/:idPais', getCountIdH);

router.get('/country/', getCountNameH);



module.exports = router;
