const express = require('express');
const teacherRoute = require('./teacherRoute');

const router = express.Router();

router.use('/teachers', teacherRoute);

module.exports = router;
