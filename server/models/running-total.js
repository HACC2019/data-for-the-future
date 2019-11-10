'use strict';
module.exports = (sequelize, DataTypes) => {
  const RunningTotal = sequelize.define('RunningTotal', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING,
    runningTotal: DataTypes.FLOAT
  }, {});
  RunningTotal.associate = function(models) {
    // associations can be defined here
  };
  return RunningTotal;
};
