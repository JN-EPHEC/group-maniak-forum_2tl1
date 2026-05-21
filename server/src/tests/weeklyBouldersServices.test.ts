import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import { getWeeklyBoulders } from "../services/weeklyBouldersServices";
import {
  tbRatings,
  tbBoulders,
  tbUsers,
  tbDifficulties,
  tbAreaGyms,
  tbGyms
} from "../models/index.js";

import { fn, col } from "sequelize";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbRatings: {
    findAll: jest.fn() as any
  },
  tbBoulders: {},
  tbUsers: {},
  tbDifficulties: {},
  tbAreaGyms: {},
  tbGyms: {}
}));

jest.mock("sequelize", () => ({
  fn: jest.fn(),
  col: jest.fn()
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("getWeeklyBoulders Service", () => {

  test("getWeeklyBoulders appelle tbRatings.findAll", async () => {
    const mockResult = [{ boulderId: 1, avgRating: 8 }];
    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getWeeklyBoulders();

    expect(tbRatings.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  test("getWeeklyBoulders retourne bien les 4 meilleurs blocs", async () => {
    const mockResult = [
      { boulderId: 1, avgRating: 9 },
      { boulderId: 2, avgRating: 8 },
      { boulderId: 3, avgRating: 7 },
      { boulderId: 4, avgRating: 6 }
    ];

    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getWeeklyBoulders();

    expect(tbRatings.findAll).toHaveBeenCalledWith(expect.objectContaining({
      limit: 4
    }));

    expect(result).toBe(mockResult);
  });
});
