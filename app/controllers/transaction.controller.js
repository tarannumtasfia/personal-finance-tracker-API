const db = require("../models");
const Transaction = db.transactions;
const Category = db.categories;
const Op = db.Sequelize.Op;

// Create and Save a new transaction
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a transaction
  const transaction= {
    title: req.body.title,
    description: req.body.description,
    categoryId: req.body.categoryId,
    income: req.body.income,
    expense: req.body.expense,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt
  };

  // Save transaction in the database
  Transaction.create(transaction)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the transaction."
      });
    });
};

// Retrieve all transaction from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Transaction.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transaction."
      });
    });
};


// Retrieve all categories from the database.
exports.findAllCategories = (req, res) => {
  Category.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    });
};

// Find a single transaction with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Transaction.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving transaction with id=" + id
      });
    });
};

// Update a transaction by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Transaction.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "transaction was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update transaction with id=${id}. Maybe transaction was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating transaction with id=" + id
      });
    });
};

// Delete a transaction with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  console.log("JJ");

  Transaction.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Transaction was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Transaction with id=${id}. Maybe Transaction was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Transaction with id=" + id
      });
    });
};

// Delete all transaction from the database.
exports.deleteAll = (req, res) => {
  Transaction.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Transaction were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Transaction."
      });
    });
};

