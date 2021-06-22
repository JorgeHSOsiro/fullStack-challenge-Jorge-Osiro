module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('schools', [
      {
        name: 'EMEF Cacilda Becker',
        director: 'Paulo Souza',

      },
      {
        name: 'EMIA - Escola Municipal de Iniciação Artística',
        director: 'Maria Silva',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('schools', null, {});
  },
};
