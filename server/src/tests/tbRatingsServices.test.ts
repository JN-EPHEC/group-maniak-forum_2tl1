import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  getByUserService,
  getByBoulderService,
  getByAreaService,
  postService,
  delService
} from "../services/tbRatingsServices";

import {
  sequelize,
  tbRatings,
  tbUsers,
  tbBoulders,
  tbAreaGyms,
  tbDifficultyUsers,
  tbDifficulties
} from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  sequelize: {
    transaction: jest.fn() as any
  },
  tbRatings: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  },
  tbUsers: {},
  tbBoulders: {},
  tbAreaGyms: {},
  tbDifficultyUsers: {
    findOrCreate: jest.fn() as any
  },
  tbDifficulties: {}
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbRatings Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ rateId: 1 }];
    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbRatings.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec include", async () => {
    const mockResult = { rateId: 10 };
    (tbRatings.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(10);

    expect(tbRatings.findByPk).toHaveBeenCalledWith(10, expect.any(Object));
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByUserService
  // -----------------------------
  test("getByUserService appelle findAll avec where userId", async () => {
    const mockResult = [{ userId: 7 }];
    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByUserService(7);

    expect(tbRatings.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { userId: 7 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByBoulderService
  // -----------------------------
  test("getByBoulderService appelle findAll avec where boulderId", async () => {
    const mockResult = [{ boulderId: 3 }];
    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByBoulderService(3);

    expect(tbRatings.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { boulderId: 3 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByAreaService
  // -----------------------------
  test("getByAreaService appelle findAll avec where areaId", async () => {
    const mockResult = [{ areaId: 2 }];
    (tbRatings.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByAreaService(2);

    expect(tbRatings.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { areaId: 2 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postService (transaction)
  // -----------------------------
  test("postService crée un rating + findOrCreate + commit", async () => {
    const data = {
      rateNote: 8,
      difficultyId: 3,
      rateTxt: "Super",
      videoLink: null,
      userId: 1,
      boulderId: 5
    };

    const mockTransaction = {
      commit: jest.fn(),
      rollback: jest.fn()
    };

    (sequelize.transaction as jest.Mock as any).mockResolvedValue(mockTransaction);

    const mockRating = { rateId: 1, ...data };
    (tbRatings.create as jest.Mock as any).mockResolvedValue(mockRating);

    (tbDifficultyUsers.findOrCreate as jest.Mock as any).mockResolvedValue([{ userId: 1, boulderId: 5 }]);

    const result = await postService(data);

    expect(sequelize.transaction).toHaveBeenCalled();
    expect(tbRatings.create).toHaveBeenCalledWith(expect.any(Object), { transaction: mockTransaction } as any);
    expect(tbDifficultyUsers.findOrCreate).toHaveBeenCalled();
    expect(mockTransaction.commit).toHaveBeenCalled();
    expect(result).toBe(mockRating);
  });

  test("postService rollback si erreur", async () => {
    const data = {
      rateNote: 8,
      difficultyId: 3,
      rateTxt: "Super",
      videoLink: null,
      userId: 1,
      boulderId: 5
    };

    const mockTransaction = {
      commit: jest.fn(),
      rollback: jest.fn()
    };

    (sequelize.transaction as jest.Mock as any).mockResolvedValue(mockTransaction);

    (tbRatings.create as jest.Mock as any).mockImplementation(() => {
      throw new Error("Erreur test");
    });

    await expect(postService(data)).rejects.toThrow("Erreur test");

    expect(mockTransaction.rollback).toHaveBeenCalled();
  });

  // -----------------------------
  // delService
  // -----------------------------
  test("delService supprime un rating existant", async () => {
    const mockElement = {
      rateId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbRatings.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delService(10);

    expect(tbRatings.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delService retourne null si introuvable", async () => {
    (tbRatings.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delService(999);

    expect(result).toBeNull();
  });
});
