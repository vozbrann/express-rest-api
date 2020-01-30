const express = require('express');
const teacherRoute = require('./teacherRoute');
const studentRoute = require('./studentRoute');
const groupRoute = require('./groupRoute');
const classroomRoute = require('./classroomRoute');
const lessonRoute = require('./lessonRoute');

const router = express.Router();

router.use('/teachers', teacherRoute);
router.use('/students', studentRoute);
router.use('/groups', groupRoute);
router.use('/classrooms', classroomRoute);
router.use('/lessons', lessonRoute);

module.exports = router;
