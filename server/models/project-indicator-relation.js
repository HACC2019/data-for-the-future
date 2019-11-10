'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectIndicatorRelation = sequelize.define('ProjectIndicatorRelation', {
    projectID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    metricMeasurement: DataTypes.FLOAT
  }, {});
  ProjectIndicatorRelation.associate = function(models) {
    ProjectIndicatorRelation.belongsTo(models.Project, {foreignKey: 'projectID'})
    ProjectIndicatorRelation.belongsTo(models.Indicator, {foreignKey: 'indicatorID'})
  };
  return ProjectIndicatorRelation;
};
