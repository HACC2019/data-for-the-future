'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.belongsToMany(models.Project, {through: 'ProjectCategories', foreignKey: 'projectID', as: 'origin'})
  };
  return category;
};
