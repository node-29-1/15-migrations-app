'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'releaseYear', 'release_date');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('movies', 'release_date', 'releaseYear');
  }
};
