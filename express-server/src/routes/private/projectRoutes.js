const express = require('express');
const Project = require('../../models/Project.js');
const router = express.Router();

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { userId: req.user.id }});
    res.status(200).json(projects);
  }catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
router.post('/projects', async (req, res) => {
  try {
    const payload = {
      userId: req.user.id,
      title: req.body.title,
    }
    const project = await Project.create(payload);
    res.status(201).json(project);
  }catch(err){
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;