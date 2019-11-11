'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('Report', {
    indicatorID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    metric: DataTypes.FLOAT
  }, {});
  report.associate = function(models) {
    report.belongsTo(models.Project, {foreignKey: 'projectID', as: 'report'})
  };
  return report;
};
