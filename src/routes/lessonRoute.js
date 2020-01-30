const express = require('express');
const lessonController = require('../controllers/lessonController');

const router = express.Router();

router.get('/', lessonController.findAll);
router.get('/:id', lessonController.findOne);
router.post('/', lessonController.addNew);
router.put('/:id', lessonController.edit);
router.delete('/', lessonController.deleteAll);
router.delete('/:id', lessonController.delete);

module.exports = router;
