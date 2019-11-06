'use strict';
module.exports = (sequelize, DataTypes) => {
  const RunningTotal = sequelize.define('RunningTotal', {
    RunningTotalID: DataTypes.INTEGER,
    IndicatorID: DataTypes.INTEGER,
    IndicatorName: DataTypes.STRING,
    UnitOfMeasurement: DataTypes.STRING,
    RunningTotal: DataTypes.FLOAT
  }, {});
  RunningTotal.associate = function(models) {
    // associations can be defined here
  };
  return RunningTotal;
};