'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('Report', {
    indicatorId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    metric: DataTypes.FLOAT
  }, {});
  report.associate = function(models) {
    report.belongsTo(models.Project, {foreignKey: 'id', as: 'project'})
    report.belongsTo(models.Indicator, {foreignKey: 'id', as: 'indicator'})
  };
  return report;
};
