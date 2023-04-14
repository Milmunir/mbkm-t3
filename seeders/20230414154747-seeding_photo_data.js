'use strict';

const data = [
  {
    title: "Rin",
    caption: "Yuru Camp",
    image_url: "https://drive.google.com/file/d/1vTSqluz09Y4e055quX_fBQm9BwXnR80S/view?usp=share_link",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Photo 2",
    caption: "Kizumonogatari",
    image_url: "https://drive.google.com/file/d/1iUkV8oJo24906VrBqBLorzdHW7JmYGLl/view?usp=share_link",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Yae",
    caption: "Genshin Impact 3rd",
    image_url: "https://drive.google.com/file/d/1exBUA0iHii1XBhQ2Ys_vnB_7o--s0xjr/view?usp=share_link",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Photos",null, {})
  }
};
