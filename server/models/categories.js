'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryName: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Project, {through: 'ProjectRelations', foreignKey: 'projectID', as: 'origin'})
  };
  return Category;
};
