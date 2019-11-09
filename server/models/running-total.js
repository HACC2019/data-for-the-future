'use strict';
module.exports = (sequelize, DataTypes) => {
  const runningTotal = sequelize.define('runningTotal', {
    runningTotalID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING,
    runningTotal: DataTypes.FLOAT
  }, {});
  runningTotal.associate = function(models) {
    // associations can be defined here
  };
  return runningTotal;
};
