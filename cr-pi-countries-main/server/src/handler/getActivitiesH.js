const getActivitiesCLL = require('../controllers/getActivitiesCLL');

const getActivitiesH = async (req, res) => {
    try {
        const resActivities = await getActivitiesCLL();
        return res.status(200).json(resActivities);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = getActivitiesH;