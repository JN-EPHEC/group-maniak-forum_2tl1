import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  postDifficultyService,
  delDifficultyService
} from "../services/tbDifficultiesServices";

import { tbDifficulties } from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbDifficulties: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbDifficulties Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ difficultyId: 1 }];
    (tbDifficulties.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbDifficulties.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec l'id", async () => {
    const mockResult = { difficultyId: 5 };
    (tbDifficulties.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(5);

    expect(tbDifficulties.findByPk).toHaveBeenCalledWith(5);
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postDifficultyService
  // -----------------------------
  test("postDifficultyService appelle create", async () => {
    const data = { difficultyColorName: "Bleu" };
    const mockCreated = { difficultyId: 1, ...data };

    (tbDifficulties.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postDifficultyService(data);

    expect(tbDifficulties.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delDifficultyService
  // -----------------------------
  test("delDifficultyService supprime un élément existant", async () => {
    const mockElement = {
      difficultyId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbDifficulties.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delDifficultyService(10);

    expect(tbDifficulties.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delDifficultyService retourne null si introuvable", async () => {
    (tbDifficulties.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delDifficultyService(999);

    expect(result).toBeNull();
  });
});
