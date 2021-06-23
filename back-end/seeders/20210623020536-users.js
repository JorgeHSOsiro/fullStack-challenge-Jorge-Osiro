module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Paulo Souza',
        password: '12345678',
        email: 'souza@gmail.com',
        role: 'diretor',
      },
      {
        name: 'Nicole Freitas',
        password: '12345678',
        email: 'freitas@gmail.com',
        role: 'professor',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
