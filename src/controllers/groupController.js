const groupModel = require('../models/groupModel');

exports.findAll = (req, res) => {
  groupModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving groups.',
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  groupModel.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found group with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving group with id ${req.params.id}`,
        });
      }
    } else res.send(data);
  });
};

exports.addNew = (req, res) => {
  groupModel.add(
    req.body.group_name, (err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while adding group.',
        });
      } else res.send(data);
    },
  );
};

exports.edit = (req, res) => { 
  groupModel.editInfo(
    req.params.id,
    req.body.group_name,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found group with id ${req.params.id}.`,
          });
        } else {
          res.status(500).send({
            message: `Could not edit group with id ${req.params.id}`,
          });
        }
      } else res.send(data);
    },
  );
};

exports.deleteAll = (req, res) => {
  groupModel.removeAll((err) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all groups.',
      });
    } else res.send({ message: 'All groups were deleted successfully!' });
  });
};

exports.delete = (req, res) => {
  groupModel.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found group with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Could not delete group with id ${req.params.id}`,
        });
      }
    } else res.send({ message: 'group was deleted successfully!' });
  });
};
