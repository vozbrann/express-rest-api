const lessonModel = require('../models/lessonModel');

exports.findAll = (req, res) => {
  lessonModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving lessons.',
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  lessonModel.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found lesson with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving lesson with id ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};

exports.addNew = (req, res) => {
  lessonModel.add(
    req.body.lesson_title,
    req.body.group_id_group,
    req.body.teacher_id_teacher,
    req.body.classroom_id_classroom,
    (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while adding lesson.',
        });
      } else res.send(data);
    },
  );
};

exports.edit = (req, res) => {
  lessonModel.editInfo(
    req.params.id,
    req.body.lesson_title,
    req.body.group_id_group,
    req.body.teacher_id_teacher,
    req.body.classroom_id_classroom,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found lesson with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: `Could not edit lesson with id ${req.params.id}`,
          });
        }
      } else res.send(data);
    },
  );
};

exports.deleteAll = (req, res) => {
  lessonModel.removeAll((err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all lessons.',
      });
    } else res.send({ message: 'All lessons were deleted successfully!' });
  });
};

exports.delete = (req, res) => {
  lessonModel.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found lesson with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete lesson with id ${req.params.id}`,
        });
      }
    } else res.send({ message: 'lesson was deleted successfully!' });
  });
};
