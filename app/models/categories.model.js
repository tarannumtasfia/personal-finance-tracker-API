module.exports = (sequelize, Sequelize) => {
  const Categories = sequelize.define("categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false // Disable the automatic addition of createdAt and updatedAt columns
  });

  return Categories;
};