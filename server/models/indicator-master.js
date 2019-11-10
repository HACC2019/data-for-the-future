'use strict';
module.exports = (sequelize, DataTypes) => {
  const Indicator = sequelize.define('Indicator', {
    indicatorID: DataTypes.INTEGER,
    indicatorName: DataTypes.STRING,
    unitOfMeasurement: DataTypes.STRING
  }, {});
  Indicator.associate = function(models) {
    Indicator.belongsToMany(models.Project, {through: 'ProjectIndicators', foreignKey: 'projectID', as: 'taken'})
    Indicator.belongsTo(models.RunningTotal, {as: 'part'})
  };
  return Indicator;
};
