module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('directors',
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
      school_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('directors'),
};