const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 100,
    }
  },
  imageUrl: {
    defaultValue: '/public/bg.jpg'
  }
});
