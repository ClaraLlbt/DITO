'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Attachment.belongsTo(models.Article,{
        foreingKey:{
          allowNull: false
        }
      })
    }
  }
  Attachment.init({
    path: DataTypes.STRING,
    articleId : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};