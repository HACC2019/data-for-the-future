'use strict';
module.exports = (sequelize, DataTypes) => {
  const report = sequelize.define('Report', {
    indicatorId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    metric: DataTypes.FLOAT
  }, {});
  report.associate = function(models) {
  };
  return report;
};
