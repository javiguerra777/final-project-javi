const db = require('../db/database.js');
const { DataTypes } = require('sequelize');
const User = require('./User.js');
const Task = require('./Task.js');

const Project = db.define('Project', {
  title: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
});
Project.hasMany(Task, {foreignKey: 'projectId'});

module.exports = Project;
