'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectIndicatorRelation = sequelize.define('projectIndicatorRelation', {
    projectIndicatorID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    metricMeasurement: DataTypes.FLOAT
  }, {});
  projectIndicatorRelation.associate = function(models) {
    // associations can be defined here
  };
  return projectIndicatorRelation;
};
