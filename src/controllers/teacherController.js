const teacherModel = require('../models/teacherModel');

exports.findAll = (req, res) => {
  teacherModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving teachers.',
      });
    } else {
      console.log('GET All teachers: ', data);
      res.send(data);
    }
  });
};

exports.findOne = (req, res) => {
  teacherModel.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found teacher with id: ${req.params.id}`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving teacher with id ${req.params.id}`,
        });
      }
    } else {
      console.log('GET one teacher: ', data);
      res.send(data);
    }
  });
};

exports.addNew = (req, res) => {
  teacherModel.add(
    req.body.teacher_first_name,
    req.body.teacher_last_name,
    req.body.teacher_specialization, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while adding teacher.',
        });
      } else {
        console.log('Teacher added: ', data);
        res.send(data);
      }
    },
  );
};

exports.edit = (req, res) => {
  teacherModel.editInfo(
    req.params.id,
    req.body.teacher_first_name,
    req.body.teacher_last_name,
    req.body.teacher_specialization,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found teacher with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: `Could not edit teacher with id ${req.params.id}`,
          });
        }
      } else {
        console.log('Teacher edited: ', data);
        res.send(data);
      }
    },
  );
};

exports.deleteAll = (req, res) => {
  teacherModel.removeAll((err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all teachers.',
      });
    } else res.send({ message: 'All teachers were deleted successfully!' });
  });
};

exports.delete = (req, res) => {
  teacherModel.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete teacher with id ${req.params.id}`,
        });
      }
    } else res.send({ message: `Deleted teacher with id:${data}` });
  });
};
