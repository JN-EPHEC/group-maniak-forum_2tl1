import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  postGymService,
  delGymService
} from "../services/tbGymServices";

import { tbGyms } from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbGyms: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbGyms Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ gymId: 1 }];
    (tbGyms.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbGyms.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec l'id", async () => {
    const mockResult = { gymId: 5 };
    (tbGyms.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(5);

    expect(tbGyms.findByPk).toHaveBeenCalledWith(5);
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postGymService
  // -----------------------------
  test("postGymService appelle create", async () => {
    const data = { gymName: "Maniak Charleroi" };
    const mockCreated = { gymId: 1, ...data };

    (tbGyms.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postGymService(data);

    expect(tbGyms.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delGymService
  // -----------------------------
  test("delGymService supprime un élément existant", async () => {
    const mockElement = {
      gymId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbGyms.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delGymService(10);

    expect(tbGyms.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delGymService retourne null si introuvable", async () => {
    (tbGyms.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delGymService(999);

    expect(result).toBeNull();
  });
});
