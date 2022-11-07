const { Router } = require('express');
const Character = require('../models/Character.js');

module.exports = Router().get('/', async (req, res) => {
  console.log('yup');
  const characters = await Character.getAll();
  console.log(characters);
  res.json(characters);
});
