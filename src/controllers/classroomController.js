const classroomModel = require('../models/classroomModel');

exports.findAll = (req, res) => {
  classroomModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving classrooms.',
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  classroomModel.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found classroom with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving classroom with id ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};

exports.addNew = (req, res) => {
  classroomModel.add(
    req.body.id_classroom, req.body.classroom_capacity, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while adding classroom.',
        });
      } else res.send(data);
    },
  );
};

exports.edit = (req, res) => {
  classroomModel.editInfo(
    req.params.id,
    req.body.classroom_capacity,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found classroom with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: `Could not edit classroom with id ${req.params.id}`,
          });
        }
      } else res.send(data);
    },
  );
};

exports.deleteAll = (req, res) => {
  classroomModel.removeAll((err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all classrooms.',
      });
    } else res.send({ message: 'All classrooms were deleted successfully!' });
  });
};

exports.delete = (req, res) => {
  classroomModel.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found classroom with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete classroom with id ${req.params.id}`,
        });
      }
    } else res.send({ message: 'classroom was deleted successfully!' });
  });
};
