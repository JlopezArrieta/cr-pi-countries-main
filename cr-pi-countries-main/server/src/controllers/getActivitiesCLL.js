const { Activity, Country } = require('../db');

const getActivitiesCLL = async () => {
  const activitiesDB = await Activity.findAll();

  if (activitiesDB.length > 0) return activitiesDB;
  return "There are no activities created";
}

module.exports = getActivitiesCLL;