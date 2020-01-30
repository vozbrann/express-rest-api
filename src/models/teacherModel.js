const connection = require('../db');

exports.getAll = (result) => {
  connection.query('SELECT * FROM teacher', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

exports.getById = (id, result) => {
  connection.query('SELECT * FROM teacher WHERE id_teacher = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

exports.add = (firstName, lastName, specialization, result) => {
  connection.query('INSERT INTO teacher (teacher_first_name, teacher_last_name, teacher_specialization) VALUES (?,?,?)',
    [firstName, lastName, specialization], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res) {
        const newTeacher = {
          id: res.insertId, firstName, lastName, specialization,
        };
        result(null, newTeacher);
      }
    });
};

exports.editInfo = (id, firstName, lastName, specialization, result) => {
  connection.query('UPDATE teacher SET teacher_first_name = ?, teacher_last_name = ?, teacher_specialization = ? WHERE id_teacher = ?',
    [firstName, lastName, specialization, id], (err, res) => {
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
        const updatedTeacher = {
          id, firstName, lastName, specialization,
        };
        result(null, updatedTeacher);
      }
    });
};

exports.remove = (id, result) => {
  connection.query('DELETE FROM teacher WHERE id_teacher = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted teacher with id: ', id);
    result(null, id);
  });
};

exports.removeAll = (result) => {
  connection.query('DELETE FROM teacher', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Deleted ${res.affectedRows} teacher`);
    result(null, res);
  });
};
