'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicatorMaster = sequelize.define('indicatorMaster', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING
  }, {});
  indicatorMaster.associate = function(models) {
    // associations can be defined here
  };
  return indicatorMaster;
};
