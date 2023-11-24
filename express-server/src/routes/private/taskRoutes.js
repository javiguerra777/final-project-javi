const express = require('express');
const Task = require('../../models/Task.js');
const router = express.Router();

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id, projectId: req.query.projectId }});
    res.status(200).json(tasks);
  }catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.post('/tasks', async (req, res) => {
  try {
    const payload = {
      userId: req.user.id,
      projectId: req.body.projectId,
      name: req.body.name,
      status: req.body.status,
    }
    const task = await Task.create(payload);
    res.status(201).json(task);
  }catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;