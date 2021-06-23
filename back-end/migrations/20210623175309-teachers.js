module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('teachers',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('teachers'),
};