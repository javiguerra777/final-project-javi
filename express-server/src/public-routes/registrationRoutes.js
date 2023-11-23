const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const router = express.Router();

// Registration Routes
router.post('/register', async (req, res) => {
  const { name, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, password: hashedPassword, email });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    delete user.dataValues.password
    res.status(201).json({token, ...user.dataValues});
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      delete user.dataValues.password;
      res.status(200).json({ token, ...user.dataValues });
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});
module.exports = router;
