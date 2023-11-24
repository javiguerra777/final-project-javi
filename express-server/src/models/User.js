const db = require('../db/database.js');
const { DataTypes } = require('sequelize');
const Project = require('./Project.js');
const Task = require('./Task.js');

const User = db.define('User', {
  name: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
User.hasMany(Project, {foreignKey: 'userId'});
User.hasMany(Task, {foreignKey: 'userId'});

module.exports = User;