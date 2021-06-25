module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('directors', [
      {
        name: 'Paulo Souza',
        password: '12345678',
        email: 'souza@gmail.com',
        school_id: 1
      },
      {
        name: 'Nicole Freitas',
        password: '12345678',
        email: 'freitas@gmail.com',
        school_id: 2
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('directors', null, {});
  },
};