module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('schools',
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
      director: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
    }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('schools'),
};
