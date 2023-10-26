const { Router } = require("express");
const postActivityH = require('../handler/postActivityH');
const getActivitiesH = require('../handler/getActivitiesH');

const router = Router();

router.post('/activities', postActivityH);

router.get('/activities', getActivitiesH);


module.exports = router;