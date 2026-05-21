import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { getAllService, getByPkService, postAreaGymService, delAreaGymService } from "../services/tbAreaGymsServices";
import { tbAreaGyms, tbGyms } from "../models/index.js";
// Mock des modèles Sequelize
jest.mock("../models/index.js", () => ({
  tbAreaGyms: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any,
  },
  tbGyms: {}
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbAreaGyms Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService retourne tous les areaGyms avec include gym", async () => {
    const mockResult = [{ areaId: 1 }] ;
    (tbAreaGyms.findAll as jest.Mock as any ).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbAreaGyms.findAll).toHaveBeenCalledWith({
      include: {
        model: tbGyms,
        as: "gym",
        attributes: ["gymId", "gymName"]
      }
    });

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService retourne les areaGyms filtrés par ID", async () => {
    const mockResult = [{ areaId: 5 }];
    (tbAreaGyms.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(5);

    expect(tbAreaGyms.findAll).toHaveBeenCalledWith({
      where: { areaId: 5 },
      include: {
        model: tbGyms,
        as: "gym",
        attributes: ["gymId", "gymName"]
      }
    });

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postAreaGymService
  // -----------------------------
  test("postAreaGymService crée un nouvel areaGym", async () => {
    const data = { areaName: "Bloc A" };
    const mockCreated = { areaId: 1, ...data };

    (tbAreaGyms.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postAreaGymService(data);

    expect(tbAreaGyms.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delAreaGymService
  // -----------------------------
  test("delAreaGymService supprime un élément existant", async () => {
    const mockElement = {
      areaId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbAreaGyms.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delAreaGymService(10);

    expect(tbAreaGyms.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delAreaGymService retourne null si l'élément n'existe pas", async () => {
    (tbAreaGyms.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delAreaGymService(999);

    expect(tbAreaGyms.findByPk).toHaveBeenCalledWith(999);
    expect(result).toBeNull();
  });
});
