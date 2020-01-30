const connection = require('../db');

exports.getAll = (result) => {
  connection.query('SELECT * FROM student', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('students: ', res);
    result(null, res);
  });
};

exports.getById = (id, result) => {
  connection.query('SELECT * FROM student WHERE id_student = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found student: ', res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

exports.add = (firstName, lastName, groupId, result) => {
  connection.query('INSERT INTO student (student_first_name, student_last_name, group_id_group) VALUES (?,?,?)',
    [firstName, lastName, groupId], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res) {
        const newstudent = {
          id: res.insertId, firstName, lastName, groupId,
        };
        console.log('student added: ', newstudent);
        result(null, newstudent);
      }
    });
};

exports.editInfo = (id, firstName, lastName, groupId, result) => {
  connection.query('UPDATE student SET student_first_name = ?, student_last_name = ?, group_id_group = ? WHERE id_student = ?',
    [firstName, lastName, groupId, id], (err, res) => {
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
        const updatedstudent = {
          id, firstName, lastName, groupId,
        };
        console.log('student edited: ', updatedstudent);
        result(null, updatedstudent);
      }
    });
};

exports.remove = (id, result) => {
  connection.query('DELETE FROM student WHERE id_student = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted student with id: ', id);
    result(null, res);
  });
};

exports.removeAll = (result) => {
  connection.query('DELETE FROM student', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log(`Deleted ${res.affectedRows} student`);
    result(null, res);
  });
};
