const connection = require('../db');

exports.getAll = (result) => {
  connection.query('SELECT * FROM `classroom`;', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('classrooms: ', res);
    result(null, res);
  });
};

exports.getById = (id, result) => {
  connection.query('SELECT * FROM `classroom` WHERE id_classroom = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('Found classroom: ', res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

exports.add = (id, classroomCapacity, result) => {
  connection.query('INSERT INTO `classroom` (id_classroom, classroom_capacity) VALUES (?, ?)',
    [id, classroomCapacity], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res) {
        const newclassroom = {
          id, classroomCapacity,
        };
        console.log('classroom added: ', newclassroom);
        result(null, newclassroom);
      }
    });
};

exports.editInfo = (id, classroomCapacity, result) => {
  connection.query('UPDATE `classroom` SET classroom_capacity = ? WHERE id_classroom = ?',
    [classroomCapacity, id], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res.affectedRows === 0) {
        result({ kind: 'not_found' }, null);
        return;
      }

      if (res) {
        const updatedclassroom = {
          id, classroomCapacity,
        };
        console.log('classroom edited: ', updatedclassroom);
        result(null, updatedclassroom);
      }
    });
};

exports.remove = (id, result) => {
  connection.query('DELETE FROM `classroom` WHERE id_classroom = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted classroom with id: ', id);
    result(null, res);
  });
};

exports.removeAll = (result) => {
  connection.query('DELETE FROM `classroom`', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Deleted ${res.affectedRows} classroom`);
    result(null, res);
  });
};
