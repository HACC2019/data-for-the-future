'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator_mas = sequelize.define('indicator_mas', {
    IndicatorID: DataTypes.INTEGER,
    IndicatorName: DataTypes.STRING,
    UnitOfMeasurement: DataTypes.STRING
  }, {});
  indicator_mas.associate = function(models) {
    // associations can be defined here
  };
  return indicator_mas;
};