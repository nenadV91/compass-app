const express = require('express');
const person = require('../controllers/person');
const router = express.Router();


// Create 
router.post('', async (req, res) => {
  const data = req.body;
  const result = await person.create(data);
  res.send(result);
});


// Get all
router.get('', async (req, res) => {
  const result = await person.getAll();
  res.send(result);
});


// Get one by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await person.getOne(id);
  res.send(result)
});


// Delete one by id
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await person.remove(id);
  res.send(result);
});


// Update one by id
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await person.update({id, data});
  res.send(result);
});


module.exports = router;