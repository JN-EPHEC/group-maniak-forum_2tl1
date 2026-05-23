import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  postService,
  delService
} from "../services/tbStatusServices";

import { tbStatus } from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbStatus: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbStatus Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ statusId: 1 }];
    (tbStatus.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbStatus.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec l'id", async () => {
    const mockResult = { statusId: 5 };
    (tbStatus.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(5);

    expect(tbStatus.findByPk).toHaveBeenCalledWith(5);
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postService
  // -----------------------------
  test("postService appelle create", async () => {
    const data = { statusName: "admin" };
    const mockCreated = { statusId: 1, ...data };

    (tbStatus.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postService(data);

    expect(tbStatus.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delService
  // -----------------------------
  test("delService supprime un élément existant", async () => {
    const mockElement = {
      statusId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbStatus.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delService(10);

    expect(tbStatus.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delService retourne null si introuvable", async () => {
    (tbStatus.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delService(999);

    expect(result).toBeNull();
  });
});
