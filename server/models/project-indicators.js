'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicatorProjects = sequelize.define('IndicatorProject', {
    projectID: DataTypes.INTEGER,
    indicatorID: DataTypes.INTEGER,
    metricMeasurement: DataTypes.FLOAT
  }, {});
  indicatorProjects.associate = function(models) {
    indicatorProjects.belongsTo(models.Project, { foreignKey: 'id' })
    indicatorProjects.belongsTo(models.Indicator, { foreignKey: 'id' })
  };
  return indicatorProjects;
};
