'use strict';
module.exports = (sequelize, DataTypes) => {
  const running-total = sequelize.define('running-total', {
    runningTotalID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING,
    runningTotal: DataTypes.FLOAT
  }, {});
  running-total.associate = function(models) {
    // associations can be defined here
  };
  return running-total;
};
