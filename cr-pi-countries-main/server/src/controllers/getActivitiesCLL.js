//Importa dos modelos de bases de datos.
const { Activity, Country } = require('../db');

//Define una función asíncrona llamada getActivitiesCLL. La palabra clave async indica que 
//esta función contendrá operaciones asincrónicas, como consultas a la base de datos.
const getActivitiesCLL = async () => {
  const activitiesDB = await Activity.findAll(

    // {
    //   include: {
    //     model: Country,
    //     attributes: ["name"],
    //     through: {
    //       attributes: [],
    //     }
    //   }
    // }
  );

  if (activitiesDB.length > 0) return activitiesDB;
  return "No hay actividades creadas";
}

module.exports = getActivitiesCLL;