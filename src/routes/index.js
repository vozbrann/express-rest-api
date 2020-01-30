const express = require('express');
const teacherRoute = require('./teacherRoute');
const studentRoute = require('./studentRoute');
const groupRoute = require('./groupRoute');

const router = express.Router();

router.use('/teachers', teacherRoute);
router.use('/students', studentRoute);
router.use('/groups', groupRoute);

module.exports = router;
