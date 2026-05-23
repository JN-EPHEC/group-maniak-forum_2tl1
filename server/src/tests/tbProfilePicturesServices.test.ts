import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  postService,
  delService
} from "../services/tbProfilePicturesServices";

import { tbProfilePictures } from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbProfilePictures: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbProfilePictures Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ pictureId: 1 }];
    (tbProfilePictures.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbProfilePictures.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec l'id", async () => {
    const mockResult = { pictureId: 5 };
    (tbProfilePictures.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(5);

    expect(tbProfilePictures.findByPk).toHaveBeenCalledWith(5);
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postService
  // -----------------------------
  test("postService appelle create", async () => {
    const data = { pictureLink: "https://example.com/img.png" };
    const mockCreated = { pictureId: 1, ...data };

    (tbProfilePictures.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postService(data);

    expect(tbProfilePictures.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delService
  // -----------------------------
  test("delService supprime un élément existant", async () => {
    const mockElement = {
      pictureId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbProfilePictures.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delService(10);

    expect(tbProfilePictures.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delService retourne null si introuvable", async () => {
    (tbProfilePictures.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delService(999);

    expect(result).toBeNull();
  });
});
