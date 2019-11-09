'use strict';
module.exports = (sequelize, DataTypes) => {
  const project-indicator-relation = sequelize.define('project-indicator-relation', {
    projectIndicatorID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    metricMeasurement: DataTypes.FLOAT
  }, {});
  project-indicator-relation.associate = function(models) {
    // associations can be defined here
  };
  return project-indicator-relation;
};
