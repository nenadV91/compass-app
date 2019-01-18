const express = require('express');
const person = require('../controllers/person');
const router = express.Router();


// Create 
router.post('', async (req, res) => {
  try {
    const data = req.body;
    const result = await person.create(data);
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error}); 
  }
});


// Get all
router.get('', async (req, res) => {
  try {
    const result = await person.getAll();
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});


// Get one by id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await person.getOne(id);
    res.send(result)
  } catch(error) {
    res.status(500).send({message: error});
  }
});


// Delete one by id
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await person.remove(id);
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});


// Update one by id
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await person.update({id, data});
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});


module.exports = router;