const express = require('express');
const teacherController = require('../controllers/teacherController');

const router = express.Router();

router.get('/', teacherController.findAll);
router.get('/:id', teacherController.findOne);
router.post('/', teacherController.addNew);
router.put('/:id', teacherController.edit);
router.delete('/', teacherController.deleteAll);
router.delete('/:id', teacherController.delete);

module.exports = router;
