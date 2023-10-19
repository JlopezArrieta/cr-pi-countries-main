//Importa dos modelos de bases de datos.
const { Activity, Country } = require('../db');

const postActivitiesCLL = async (name, difficulty, duration, season, countries) => {

  //Comienza una condición que verifica si alguno de los argumentos requeridos falta.
  //Si falta alguno de estos campos, se lanza un error.
  if (!name || !difficulty || !season || !countries) {
    throw Error("No se puede crear una nueva actividad. Faltan algunos campos.");
  }
  else {
    //Arreglo vacío que se utilizará para almacenar objetos de países.
    let arrayCountries = [];

    //Aplicar el método para capitalizar la primera letra de season en mayuscula y el resto en minuscula.
    season = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();

    //Objeto llamado activity con las propiedades del Modelo Activity. 
    //Estas propiedades provienen de los argumentos de la función de arriba.
    const activity = {
      name,
      difficulty,
      duration,
      season,
    };

    //Inicia un bucle for.of que recorre el arreglo countries para procesar cada país.
    for (const country of countries) {

      //Capitalizar la primera letra de pais en mayuscula y poner el resto en minúsculas.
      const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

      //Utiliza el modelo Country para buscar un país en la base de datos que coincida con el 
      //nombre del país formateado. 
      let addCountry = await Country.findOne({
        where: {
          name: formattedCountry
        }
      });

      arrayCountries.push(addCountry);
    };

    //Crea una nueva actividad en la base de datos utilizando el modelo Activity y el objeto 
    //activity que se creó anteriormente. El resultado se almacena en la variable newActivity.
    const newActivity = await Activity.create(activity);

    //Asocia los países encontrados con la actividad recién creada. Esto puede estar relacionado 
    //con una relación en la base de datos, como una actividad que puede estar asociada a varios 
    //países. La función addCountries se llama en el objeto newActivity.
    await newActivity.addCountries(arrayCountries);


    // return newActivity;
    return "La Activity fue creada con exito";
  };
};

module.exports = postActivitiesCLL;