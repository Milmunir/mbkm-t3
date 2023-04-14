'use strict';

const data = [
  {
    title: "Bocchi",
    caption: "Bocchi The Rock!",
    UserId: 2,
    image_url: "https://drive.google.com/file/d/1FB9OCRPIDlaomoC0X6NDCpBsnGMqAYG5/view?usp=share_link",
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Photos", data, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Photos",null, {})
  }
};
