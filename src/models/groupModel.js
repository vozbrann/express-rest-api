const connection = require('../db');

exports.getAll = (result) => {
  connection.query('SELECT * FROM `group`;', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('groups: ', res);
    result(null, res);
  });
};

exports.getById = (id, result) => {
  connection.query('SELECT * FROM `group` WHERE id_group = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('Found group: ', res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: 'not_found' }, null);
  });
};

exports.add = (groupName, result) => {
  connection.query('INSERT INTO `group` (group_name) VALUES (?)',
    [groupName], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      if (res) {
        const newgroup = {
          id: res.insertId, groupName,
        };
        console.log('group added: ', newgroup);
        result(null, newgroup);
      }
    });
};

exports.editInfo = (id, groupName, result) => {
  connection.query('UPDATE `group` SET group_name = ? WHERE id_group = ?',
    [groupName, id], (err, res) => {
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
        const updatedgroup = {
          id, groupName,
        };
        console.log('group edited: ', updatedgroup);
        result(null, updatedgroup);
      }
    });
};

exports.remove = (id, result) => {
  connection.query('DELETE FROM `group` WHERE id_group = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted group with id: ', id);
    result(null, res);
  });
};

exports.removeAll = (result) => {
  connection.query('DELETE FROM `group`', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log(`Deleted ${res.affectedRows} group`);
    result(null, res);
  });
};
