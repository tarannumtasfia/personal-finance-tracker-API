module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transactions", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    categoryId: {
      type: Sequelize.INTEGER
    },
    income: {
      type: Sequelize.DECIMAL
    },
    expense: {
      type: Sequelize.DECIMAL
    }
  });

  return Transaction;
};
