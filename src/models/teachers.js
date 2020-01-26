const connection = require('../db');

const teachers = {};

teachers.teachers = () => new Promise((resolve, reject) => {
  connection.query('SELECT * FROM teacher', (err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result);
  });
});

teachers.oneTeacher = (id) => new Promise((resolve, reject) => {
  connection.query('SELECT * FROM teacher WHERE id_teacher = ?', [id], (err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result[0]);
  });
});

teachers.addTeacher = ({
  firstName,
  lastName,
  specialization,
}) => new Promise((resolve, reject) => {
  connection.query('INSERT INTO teacher (teacher_first_name, teacher_last_name, teacher_specialization) VALUES (?,?,?)',
    [firstName, lastName, specialization], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
});

teachers.editTeacher = ({
  firstName,
  lastName,
  specialization,
  id,
}) => new Promise((resolve, reject) => {
  connection.query('UPDATE teacher SET teacher_first_name = ?, teacher_last_name = ?, teacher_specialization = ? WHERE id_teacher = ?',
    [firstName, lastName, specialization, id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
});

module.exports = teachers;
