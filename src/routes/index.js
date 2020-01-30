const express = require('express');
const teacherRoute = require('./teacherRoute');
const groupRoute = require('./groupRoute');

const router = express.Router();

router.use('/teachers', teacherRoute);
router.use('/groups', groupRoute);

module.exports = router;
