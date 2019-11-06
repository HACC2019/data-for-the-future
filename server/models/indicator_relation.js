'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator_relation = sequelize.define('indicator_relation', {
    ProjectIndicatorID: DataTypes.INTEGER,
    ProjectID: DataTypes.INTEGER,
    IndicatorID: DataTypes.INTEGER,
    MetricMeasurement: DataTypes.FLOAT
  }, {});
  indicator_relation.associate = function(models) {
    // associations can be defined here
  };
  return indicator_relation;
};