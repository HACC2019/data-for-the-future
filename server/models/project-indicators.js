'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicatorProjects = sequelize.define('IndicatorProject', {
    projectId: DataTypes.INTEGER,
    indicatorId: DataTypes.INTEGER,
    metricMeasurement: DataTypes.FLOAT
  }, {});
  indicatorProjects.associate = function(models) {
    indicatorProjects.belongsTo(models.Project, { foreignKey: 'id' })
    indicatorProjects.belongsTo(models.Indicator, { foreignKey: 'id' })
  };
  return indicatorProjects;
};
