'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: true
  });
  category.associate = function(models) {
    category.belongsToMany(models.Project, {through: 'ProjectCategories', foreignKey: 'projectId', as: 'origin'})
    category.hasMany(models.Indicator, {as: 'indicator'})
  };
  return category;
};
