'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator = sequelize.define('Indicator', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  indicator.associate = function(models) {
    indicator.belongsToMany(models.Project, {through: 'ProjectIndicators', foreignKey: 'projectId', as: 'taken'})
    indicator.belongsTo(models.Report, {as: 'metric'})
  };
  return indicator;
};
