import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  getByStatusService,
  postService,
  updateUser,
  delService
} from "../services/tbUsersServices";

import {
  tbUsers,
  tbDifficultyUsers,
  tbStatus,
  tbProfilePictures,
  tbDifficulties,
  tbBoulders
} from "../models/index.js";

import bcrypt from "bcrypt";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbUsers: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  },
  tbDifficultyUsers: {},
  tbStatus: {
    findByPk: jest.fn() as any
  },
  tbProfilePictures: {},
  tbDifficulties: {},
  tbBoulders: {}
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn()
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbUsers Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ userId: 1 }];
    (tbUsers.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbUsers.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findByPk avec include", async () => {
    const mockResult = { userId: 10 };
    (tbUsers.findByPk as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(10);

    expect(tbUsers.findByPk).toHaveBeenCalledWith(10, expect.any(Object));
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByStatusService
  // -----------------------------
  test("getByStatusService appelle findAll avec where statusId", async () => {
    const mockResult = [{ statusId: 3 }];
    (tbUsers.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByStatusService(3);

    expect(tbUsers.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { statusId: 3 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postService (bcrypt + create)
  // -----------------------------
  test("postService hash le password + crée un user", async () => {
    const data = {
      userMail: "test@mail.com",
      userLName: "Doe",
      userFName: "John",
      userPseudo: "JD",
      password: "secret",
      pictureId: 1,
      statusId: 2
    };

    (bcrypt.hash as jest.Mock as any).mockResolvedValue("hashed_pwd");

    const mockCreated = { userId: 1, ...data, userPassHashed: "hashed_pwd" };
    (tbUsers.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postService(data);

    expect(bcrypt.hash).toHaveBeenCalledWith("secret", 10);
    expect(tbUsers.create).toHaveBeenCalledWith({
      userMail: "test@mail.com",
      userLName: "Doe",
      userFName: "John",
      userPseudo: "JD",
      userPassHashed: "hashed_pwd",
      pictureId: 1,
      statusId: 2
    });

    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // updateUser
  // -----------------------------
  test("updateUser met à jour un user existant", async () => {
    const mockUser = {
      userId: 10,
      update: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbUsers.findByPk as jest.Mock as any).mockResolvedValue(mockUser);

    const result = await updateUser(10, { userPseudo: "NewName" });

    expect(tbUsers.findByPk).toHaveBeenCalledWith(10);
    expect(mockUser.update).toHaveBeenCalledWith({ userPseudo: "NewName" });
    expect(result).toBe(mockUser);
  });

  test("updateUser retourne null si introuvable", async () => {
    (tbUsers.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await updateUser(999, {});

    expect(result).toBeNull();
  });

  // -----------------------------
  // delService
  // -----------------------------
  test("delService supprime un status existant", async () => {
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
