'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator-master = sequelize.define('indicator-master', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING
  }, {});
  indicator_master.associate = function(models) {
    // associations can be defined here
  };
  return indicator-master;
};
