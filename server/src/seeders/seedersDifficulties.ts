import { QueryInterface } from "sequelize";
import difficulties from "../data/difficulties.json";

export default {
  async up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert(
      "Difficulties",
      difficulties.map((d) => ({
        difficultyId: d.difficultyId,
        difficultyColorName: d.difficultyColorName,
        difficultyFrenchScale: d.difficultyFrenchScale,
        difficultyVerminScale: d.difficultyVerminScale,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );
  },

  async down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete("Difficulties", {}, {});
  }
};
