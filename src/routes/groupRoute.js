const express = require('express');
const groupController = require('../controllers/groupController');

const router = express.Router();

router.get('/', groupController.findAll);
router.get('/:id', groupController.findOne);
router.post('/', groupController.addNew);
router.put('/:id', groupController.edit);
router.delete('/', groupController.deleteAll);
router.delete('/:id', groupController.delete);

module.exports = router;
