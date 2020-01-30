const connection = require('../db');

exports.getAll = (result) => {
  connection.query('SELECT * FROM lesson', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('lessons: ', res);
    result(null, res);
  });
};

exports.getById = (id, result) => {
  connection.query('SELECT * FROM lesson WHERE id_lesson = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found lesson: ', res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

exports.add = (lessonTitle, groupId, teacherId, classroomId, result) => {
  connection.query('INSERT INTO lesson (lesson_title, group_id_group, teacher_id_teacher, classroom_id_classroom) VALUES (?,?,?,?)',
    [lessonTitle, groupId, teacherId, classroomId], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res) {
        const newlesson = {
          id: res.insertId, lessonTitle, groupId, teacherId, classroomId,
        };
        console.log('lesson added: ', newlesson);
        result(null, newlesson);
      }
    });
};

exports.editInfo = (id, lessonTitle, groupId, teacherId, classroomId, result) => {
  connection.query('UPDATE lesson SET lesson_title = ?, group_id_group = ?, teacher_id_teacher = ?, classroom_id_classroom = ? WHERE id_lesson = ?',
    [lessonTitle, groupId, teacherId, classroomId, id], (err, res) => {
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
        const updatedlesson = {
          id, lessonTitle, groupId, teacherId, classroomId,
        };
        console.log('lesson edited: ', updatedlesson);
        result(null, updatedlesson);
      }
    });
};

exports.remove = (id, result) => {
  connection.query('DELETE FROM lesson WHERE id_lesson = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted lesson with id: ', id);
    result(null, res);
  });
};

exports.removeAll = (result) => {
  connection.query('DELETE FROM lesson', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Deleted ${res.affectedRows} lesson`);
    result(null, res);
  });
};
