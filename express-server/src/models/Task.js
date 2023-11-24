const db = require('../db/database.js');
const { DataTypes } = require('sequelize');
const User = require('./User.js');
const Project = require('./Project.js');

const Task = db.define('Task', {
  name: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    }
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

module.exports = Task;
