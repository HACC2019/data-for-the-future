'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator = sequelize.define('Indicator', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING
  }, {});
  indicator.associate = function(models) {
    indicator.belongsToMany(models.Project, {through: 'IndicatorProjects', foreignKey: 'projectId', as: 'taken'})
    indicator.belongsTo(models.RunningTotal, {as: 'part'})
  };
  return indicator;
};
