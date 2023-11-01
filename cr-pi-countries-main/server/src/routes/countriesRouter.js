const { Router } = require("express");
const getCountH = require('../handler/getCountH');
const getCountIdH = require('../handler/getCountIdH');
const getCountNameH = require('../handler/getCountNameH');
const getCountPoblaH = require('../handler/getCountPoblaH');

const router = Router();


router.get('/countries', getCountH);

router.get('/countries/:idPais', getCountIdH);

router.get('/country/', getCountNameH);

router.get('/country/:population', getCountPoblaH);



module.exports = router;
