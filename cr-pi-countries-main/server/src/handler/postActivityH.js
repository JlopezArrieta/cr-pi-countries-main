const postActivitiesCLL = require('../controllers/postActivitiesCLL');

const postActivityH = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries } = req.body;
        if (!name || !difficulty || !duration || !season || !countries) {
            return res.status(300).send('Cannot create a new activity. Some fields are missing');
          }
        const resActivity = await postActivitiesCLL(name, difficulty, duration, season, countries);
        return res.status(200).json(resActivity);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = postActivityH; 