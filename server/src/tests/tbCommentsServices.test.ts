import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  getByUserService,
  getByBoulderService,
  postCommentService,
  delCommentService
} from "../services/tbCommentsServices";

import {
  tbUsers,
  tbComments,
  tbBoulders,
  tbAreaGyms,
  tbReplies
} from "../models/index.js";

import { Op, Sequelize } from "sequelize";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  tbUsers: {},
  tbComments: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  },
  tbBoulders: {},
  tbAreaGyms: {},
  tbReplies: {}
}));

jest.mock("sequelize", () => ({
  Op: { and: "AND" },
  Sequelize: {
    where: jest.fn(),
    col: jest.fn(),
    fn: jest.fn()
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbComments Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ commentsId: 1 }];
    (tbComments.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbComments.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findAll avec where commentsId", async () => {
    const mockResult = [{ commentsId: 10 }];
    (tbComments.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(10);

    expect(tbComments.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: expect.any(Object)
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByUserService
  // -----------------------------
  test("getByUserService appelle findAll avec where userId", async () => {
    const mockResult = [{ userId: 7 }];
    (tbComments.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByUserService(7);

    expect(tbComments.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: expect.any(Object)
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByBoulderService
  // -----------------------------
  test("getByBoulderService appelle findAll avec where boulderId", async () => {
    const mockResult = [{ boulderId: 3 }];
    (tbComments.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByBoulderService(3);

    expect(tbComments.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: expect.any(Object)
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postCommentService
  // -----------------------------
  test("postCommentService appelle create", async () => {
    const data = { commentsTxt: "Hello" };
    const mockCreated = { commentsId: 1, ...data };

    (tbComments.create as jest.Mock as any).mockResolvedValue(mockCreated);

    const result = await postCommentService(data);

    expect(tbComments.create).toHaveBeenCalledWith(data);
    expect(result).toBe(mockCreated);
  });

  // -----------------------------
  // delCommentService
  // -----------------------------
  test("delCommentService supprime un commentaire existant", async () => {
    const mockElement = {
      commentsId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbComments.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delCommentService(10);

    expect(tbComments.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delCommentService retourne null si introuvable", async () => {
    (tbComments.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delCommentService(999);

    expect(result).toBeNull();
  });
});
