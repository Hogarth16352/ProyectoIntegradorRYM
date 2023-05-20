const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', 
   {
      id: {
         type: DataTypes.STRING,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.STRING,
      },
      species: {
         type: DataTypes.STRING,
      },
      gender: {
         type: DataTypes.STRING,
         validate: {
            isIn: [ [ 'Male' , 'Female', 'unknown', 'Genderless' ] ]
         }
      },
      origin: {
         type: DataTypes.STRING,
      },
      location: {
         type: DataTypes.STRING,
      },
      image: {
         type: DataTypes.STRING,
         validate: {
            isUrl: true
         },
         allowNull: false
      },
   }, 
   { 
      timestamps: false 
   }
);
};