const express = require('express');
const teachers = require('../models/teachers');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await teachers.teachers();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await teachers.oneTeacher(req.params.id);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  if (!req.body) res.sendStatus(400);

  try {
    const result = await teachers.addTeacher(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/', async (req, res) => {
  if (!req.body) res.sendStatus(400);

  try {
    const result = await teachers.editTeacher(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
