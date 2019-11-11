'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator = sequelize.define('Indicator', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING
  }, {});
  indicator.associate = function(models) {
    indicator.belongsToMany(models.Project, {through: 'ProjectIndicators', foreignKey: 'projectId', as: 'taken'})
    indicator.belongsTo(models.Report, {as: 'part'})
  };
  return indicator;
};
