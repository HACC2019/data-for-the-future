'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indicator = sequelize.define('Indicator', {
    name: DataTypes.STRING
  }, {});
  Indicator.associate = function(models) {
    // associations can be defined here
  };
  return Indicator;
};