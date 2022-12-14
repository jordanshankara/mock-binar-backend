"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ToDoLists",
      [
        {
          user_id: "1",
          body: "My First Task",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: "2",
          body: "My Second Task",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ToDoLists", null, {});
  },
};
