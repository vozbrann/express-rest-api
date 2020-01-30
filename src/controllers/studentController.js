const studentModel = require('../models/studentModel');

exports.findAll = (req, res) => {
  studentModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving students.',
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  studentModel.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found student with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving student with id ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};

exports.addNew = (req, res) => {
  studentModel.add(
    req.body.student_first_name,
    req.body.student_last_name,
    req.body.group_id_group, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while adding student.',
        });
      } else res.send(data);
    },
  );
};

exports.edit = (req, res) => {
  studentModel.editInfo(
    req.params.id,
    req.body.student_first_name,
    req.body.student_last_name,
    req.body.group_id_group, (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found student with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: `Could not edit student with id ${req.params.id}`,
          });
        }
      } else res.send(data);
    },
  );
};

exports.deleteAll = (req, res) => {
  studentModel.removeAll((err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all students.',
      });
    } else res.send({ message: 'All students were deleted successfully!' });
  });
};

exports.delete = (req, res) => {
  studentModel.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found student with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete student with id ${req.params.id}`,
        });
      }
    } else res.send({ message: 'Student was deleted successfully!' });
  });
};
