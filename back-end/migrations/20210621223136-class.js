module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('classes',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      school_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      representative_one: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      representative_two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('classes'),
};

