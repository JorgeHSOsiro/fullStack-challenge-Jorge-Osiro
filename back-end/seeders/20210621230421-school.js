module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('schools', [
      {
        name: 'Escola Souza',
        director: 'Paulo Souza',

      },
      {
        name: 'Escola Silva',
        director: 'Maria Silva',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('schools', null, {});
  },
};
