'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('Report', {
    indicatorID: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    metric: DataTypes.FLOAT
  }, {});
  report.associate = function(models) {
    report.belongsTo(models.Project, {foreignKey: 'id'})
  };
  return report;
};
