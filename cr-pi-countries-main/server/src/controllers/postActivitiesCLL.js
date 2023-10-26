const { Activity, Country } = require('../db');

const postActivitiesCLL = async (name, difficulty, duration, season, countries) => {

  
    let arrayCountries = [];
    season = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();

    const activity = {
      name,
      difficulty,
      duration,
      season,
    };

    //Arreglo countries para procesar cada país.
    for (const country of countries) {

      const formattedCountry = capitalizarPalabras(country);
      
      function capitalizarPalabras( val ) {
          return val.toLowerCase()
                  .trim()
                  .split(' ')
                  .map( v => v[0].toUpperCase() + v.substr(1) )
                  .join(' ');  
      }
      
      let addCountry = await Country.findOne({
        where: {
          name: formattedCountry
        }
      });

      arrayCountries.push(addCountry);
    };

    const newActivity = await Activity.create(activity);

    await newActivity.addCountries(arrayCountries);

    return "Activity created successfully!";
  };


module.exports = postActivitiesCLL;