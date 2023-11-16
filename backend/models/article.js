'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  }
  Article.init({
    attachment: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Article',
  });
  console.log('Article model initialized successfully');
  return Article // true
};