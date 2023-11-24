const express = require('express');
const Task = require('../../models/Task.js');
const router = express.Router();

router.get('/tasks/:projectId', async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id, projectId: req.params.projectId }});
    res.status(200).json(tasks);
  } catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.post('/tasks/:projectId', async (req, res) => {
  try {
    const payload = {
      userId: req.user.id,
      projectId: req.params.projectId,
      name: req.body.name,
      status: req.body.status.toLowerCase().trim(),
    }
    console.log(payload);
    const task = await Task.create(payload);
    res.status(201).json(task);
  } catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.patch('/tasks/:id', async (req, res) => {
  try {
    const payload = {
      name: req.body.name,
      status: req.body.status.toLowerCase().trim(),
    }
    const task = await Task.update(payload, { where: { id: req.params.id, userId: req.user.id }});
    res.status(200).json(task);
  } catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id, userId: req.user.id }});
    res.status(200).json({ message: 'Task deleted' });
  } catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;