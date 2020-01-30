const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/', studentController.findAll);
router.get('/:id', studentController.findOne);
router.post('/', studentController.addNew);
router.put('/:id', studentController.edit);
router.delete('/', studentController.deleteAll);
router.delete('/:id', studentController.delete);

module.exports = router;
