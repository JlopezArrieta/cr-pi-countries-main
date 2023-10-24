const validations = (activityData, activities) => {
  const errors = {};

  //Nombre
  if (!activityData.name) {
    errors.name = 'The name is required';
  } else if (activityData.name.length < 3 || activityData.name.length > 25) {
    errors.name = 'The name must have between three and Twenty Five letters';
  } else if (!/^[A-Za-z\s]+$/.test(activityData.name)) {
    errors.name = 'The Activity name can only contain letters and spaces';
  }

  //Dificultad
  if (!activityData.difficulty) {
    errors.difficulty = 'Difficulty is required.';
  }

  if (!activityData.duration) {
    errors.duration = 'The Duration is required.';
  } else if (activityData.duration < 1) {
    errors.duration = 'The Validation data is not valid.';
  } else if (isNaN(parseInt(activityData.duration))) {
    errors.duration = 'Enter a valid number.';
  }


  const activityEnc = activities.filter(act => act.name === activityData.name)
  if (activityEnc.length) errors.name = "La actividad ya fue creada."

  //Temporada
  if (!activityData.season) {
    errors.season = 'The Season is required.';
  }

  //Países
  if (!activityData.countries || activityData.countries.length === 0) {
    errors.countries = 'At least one country is required.';
  }
console.log(errors)
  return errors;
}

export default validations;


