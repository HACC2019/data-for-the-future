'use strict';
module.exports = (sequelize, DataTypes) => {
  const indicator = sequelize.define('Indicator', {
    categoryID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  indicator.associate = function(models) {
    indicator.belongsToMany(models.Project, {through: 'ProjectIndicators', foreignKey: 'projectID', as: 'taken'})
    indicator.belongsTo(models.Report, {as: 'part'})
  };
  return indicator;
};
