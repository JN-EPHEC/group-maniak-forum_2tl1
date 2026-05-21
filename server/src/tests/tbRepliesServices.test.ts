import { describe, test, expect, jest, beforeEach } from "@jest/globals";

import {
  getAllService,
  getByPkService,
  postService,
  delService
} from "../services/tbRepliesServices";

import {
  sequelize,
  tbUsers,
  tbComments,
  tbReplies
} from "../models/index.js";

// ------------------------------
// MOCK DES MODELES SEQUELIZE
// ------------------------------
jest.mock("../models/index.js", () => ({
  sequelize: {
    transaction: jest.fn() as any
  },
  tbUsers: {},
  tbComments: {
    create: jest.fn() as any
  },
  tbReplies: {
    findAll: jest.fn() as any,
    findByPk: jest.fn() as any,
    create: jest.fn() as any
  }
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("tbReplies Services", () => {

  // -----------------------------
  // getAllService
  // -----------------------------
  test("getAllService appelle findAll", async () => {
    const mockResult = [{ replyId: 1 }];
    (tbReplies.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getAllService();

    expect(tbReplies.findAll).toHaveBeenCalled();
    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // getByPkService
  // -----------------------------
  test("getByPkService appelle findAll avec where commentsId", async () => {
    const mockResult = [{ commentsId: 10 }];
    (tbReplies.findAll as jest.Mock as any).mockResolvedValue(mockResult);

    const result = await getByPkService(10);

    expect(tbReplies.findAll).toHaveBeenCalledWith(expect.objectContaining({
      where: { commentsId: 10 }
    }));

    expect(result).toBe(mockResult);
  });

  // -----------------------------
  // postService (transaction)
  // -----------------------------
  test("postService crée un childComment + reply + commit", async () => {
    const data = {
      parentId: 1,
      commentsTxt: "Hello",
      userId: 5,
      boulderId: 3
    };

    const mockTransaction = {
      commit: jest.fn(),
      rollback: jest.fn()
    };

    (sequelize.transaction as jest.Mock as any).mockResolvedValue(mockTransaction);

    const mockChild = { commentsId: 99, commentsTxt: "Hello" };
    (tbComments.create as jest.Mock as any).mockResolvedValue(mockChild);

    const mockReply = { replyId: 1, commentsId: 1, commentsrepliesId: 99 };
    (tbReplies.create as jest.Mock as any).mockResolvedValue(mockReply);

    const result = await postService(data);

    expect(sequelize.transaction).toHaveBeenCalled();
    expect(tbComments.create).toHaveBeenCalledWith(
      {
        commentsTxt: "Hello",
        userId: 5,
        boulderId: 3
      },
      { transaction: mockTransaction } as any
    );

    expect(tbReplies.create).toHaveBeenCalledWith(
      {
        commentsId: 1,
        commentsrepliesId: 99
      },
      { transaction: mockTransaction } as any
    );

    expect(mockTransaction.commit).toHaveBeenCalled();

    expect(result).toEqual({
      reply: mockReply,
      childComment: mockChild
    });
  });

  test("postService rollback si erreur", async () => {
    const data = {
      parentId: 1,
      commentsTxt: "Hello",
      userId: 5,
      boulderId: 3
    };

    const mockTransaction = {
      commit: jest.fn(),
      rollback: jest.fn()
    };

    (sequelize.transaction as jest.Mock as any).mockResolvedValue(mockTransaction);

    (tbComments.create as jest.Mock as any).mockImplementation(() => {
      throw new Error("Erreur test");
    });

    await expect(postService(data)).rejects.toThrow("Erreur test");

    expect(mockTransaction.rollback).toHaveBeenCalled();
  });

  // -----------------------------
  // delService
  // -----------------------------
  test("delService supprime un reply existant", async () => {
    const mockElement = {
      replyId: 10,
      destroy: (jest.fn() as jest.Mock as any).mockResolvedValue(undefined)
    };

    (tbReplies.findByPk as jest.Mock as any).mockResolvedValue(mockElement);

    const result = await delService(10);

    expect(tbReplies.findByPk).toHaveBeenCalledWith(10);
    expect(mockElement.destroy).toHaveBeenCalled();
    expect(result).toBe(mockElement);
  });

  test("delService retourne null si introuvable", async () => {
    (tbReplies.findByPk as jest.Mock as any).mockResolvedValue(null);

    const result = await delService(999);

    expect(result).toBeNull();
  });
});
