const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      }
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),//verano, otono, invierno, primavera
      allowNull: false
    }
  }, { timestamps: false })
}


























// {
//   "name": "futbolito", 
//   "difficulty": 2, 
//   "duration": 3, 
//   "season": "Verano", 
//   "countries": ["Colombia"]
// }