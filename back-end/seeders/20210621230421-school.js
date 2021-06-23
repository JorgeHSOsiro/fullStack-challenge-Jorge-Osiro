module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('schools', [
      {
        name: 'EMEF Cacilda Becker',

      },
      {
        name: 'EMIA - Escola Municipal de Iniciação Artística',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('schools', null, {});
  },
};
