const express = require('express');
const classroomController = require('../controllers/classroomController');

const router = express.Router();

router.get('/', classroomController.findAll);
router.get('/:id', classroomController.findOne);
router.post('/', classroomController.addNew);
router.put('/:id', classroomController.edit);
router.delete('/', classroomController.deleteAll);
router.delete('/:id', classroomController.delete);

module.exports = router;
