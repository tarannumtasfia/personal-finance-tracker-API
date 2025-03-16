module.exports = app => {
  const transactions = require("../controllers/transaction.controller.js");

  var router = require("express").Router();

  // Create a new transaction
  router.post("/", transactions.create);

  // Retrieve all transactions
  router.get("/", transactions.findAll);

  // Retrieve all categories
  router.get("/categories", transactions.findAllCategories);

  // Retrieve a single transaction with id
  router.get("/:id", transactions.findOne);

  // Update a transaction with id
  router.put("/:id", transactions.update);

  // Delete a transaction with id
  router.delete("/:id", transactions.delete);

  // Delete all transactions
  router.delete("/", transactions.deleteAll);

  app.use('/api/transactions', router);
};