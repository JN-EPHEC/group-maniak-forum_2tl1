import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  getByAreaService,
  getByGymService,
  getBySetterService,
  getByDifficultyService,
  postBoulderService,
  updateBoulderService,
  delBoulderService
} from "../services/tbBouldersServices";

import {
  tbUsers,
  tbDifficulties,
  tbBoulders,
  tbAreaGyms,
  tbGyms,
  tbRatings,
  sequelize
} from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbUsers: {},
  tbDifficulties: {},
  tbBoulders: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  },
  tbAreaGyms: {},
  tbGyms: {},
  tbRatings: {},
  sequelize: {
    fn: jest.fn(),
    col: jest.fn()
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbBoulders Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ boulderId: 1 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbBoulders.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findAll avec where boulderId", async () => {
    const mockResult = [{ boulderId: 10 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(10);

    expect(tbBoulders.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { boulderId: 10 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByAreaService
  // -----------------------------
  test("getByAreaService appelle findAll avec where areaId", async () => {
    const mockResult = [{ areaId: 3 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByAreaService(3);

    expect(tbBoulders.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { areaId: 3 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByGymService
  // -----------------------------
  test("getByGymService appelle findAll", async () => {
    const mockResult = [{ gymId: 2 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByGymService(2);

    expect(tbBoulders.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getBySetterService
  // -----------------------------
  test("getBySetterService appelle findAll avec where userId", async () => {
    const mockResult = [{ userId: 7 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getBySetterService(7);

    expect(tbBoulders.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { userId: 7 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByDifficultyService
  // -----------------------------
  test("getByDifficultyService appelle findAll avec where difficultyId", async () => {
    const mockResult = [{ difficultyId: 4 }];
    (tbBoulders.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByDifficultyService(4);

    expect(tbBoulders.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { difficultyId: 4 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postBoulderService
  // -----------------------------
  test("postBoulderService appelle create", async () => {
    const data = { boulderName: "Test" };
    const mockCreated = { boulderId: 1, ...data };

    (tbBoulders.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postBoulderService(data);

    expect(tbBoulders.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // updateBoulderService
  // -----------------------------
  test("updateBoulderService met à jour un boulder existant", async () => {
    const mockElement = {
      boulderId: 10,
      update: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbBoulders.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await updateBoulderService(10, { name: "New" });

    expect(tbBoulders.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.update).toHaveBeenCalledWith({ name: "New" });
    expect(result).toBe(mockElement);
  });

  test("updateBoulderService retourne null si introuvable", async () => {
    (tbBoulders.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await updateBoulderService(999, {});

    expect(result).toBeNull();
  });

  // -----------------------------
  // delBoulderService
  // -----------------------------
  test("delBoulderService supprime un boulder existant", async () => {
    const mockElement = {
      boulderId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbBoulders.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delBoulderService(10);

    expect(tbBoulders.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delBoulderService retourne null si introuvable", async () => {
    (tbBoulders.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delBoulderService(999);

    expect(result).toBeNull();
  });
});
