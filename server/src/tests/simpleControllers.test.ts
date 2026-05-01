import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { Request } from "express";

import { getAll, getByPk, postElement, delElement } from "../utils/simpleControllers";

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("simpleControllers", () => {
  let table: any;

  beforeEach(() => {
    table = {
      findAll: jest.fn(),
      findByPk: jest.fn(),
      create: jest.fn(),
    };
    jest.clearAllMocks();
  });

  // GET ALL
  test("getAll retourne 200 et les données", async () => {
    table.findAll.mockResolvedValue([{ id: 1 }]);

    const req = {} as Request;
    const res = mockResponse();

    await getAll(req, res, table);

    expect(table.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
  });

  test("getAll retourne 500 en cas d'erreur", async () => {
    table.findAll.mockRejectedValue(new Error("DB error"));

    const req = {} as Request;
    const res = mockResponse();

    await getAll(req, res, table);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "DB error" });
  });

  // GET BY PK
  test("getByPk retourne 200 et l'élément", async () => {
    table.findByPk.mockResolvedValue({ id: 5 });

    const req = { params: { id: "5" } } as unknown as Request;
    const res = mockResponse();

    await getByPk(req, res, table);

    expect(table.findByPk).toHaveBeenCalledWith("5");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 5 });
  });

  test("getByPk retourne 500 en cas d'erreur", async () => {
    table.findByPk.mockRejectedValue(new Error("Erreur interne"));

    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();

    await getByPk(req, res, table);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erreur interne" });
  });

  // POST
  test("postElement crée un élément et retourne 201", async () => {
    table.create.mockResolvedValue({ id: 1 });

    const req = { body: { name: "Test" } } as Request;
    const res = mockResponse();

    await postElement(req, res, table);

    expect(table.create).toHaveBeenCalledWith({ name: "Test" });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1 });
  });

  test("postElement retourne 500 en cas d'erreur", async () => {
    table.create.mockRejectedValue(new Error("Erreur création"));

    const req = { body: {} } as Request;
    const res = mockResponse();

    await postElement(req, res, table);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erreur création" });
  });

  // DELETE
  test("delElement supprime un élément et retourne 204", async () => {
    const fakeItem = { destroy: jest.fn() };
    table.findByPk.mockResolvedValue(fakeItem);

    const req = { params: { id: "3" } } as unknown as Request;
    const res = mockResponse();

    await delElement(req, res, table);

    expect(table.findByPk).toHaveBeenCalledWith("3");
    expect(fakeItem.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith({
      message: "l'élement 3 de la table : [object Object] a été supprimé",
    });
  });

  test("delElement retourne 404 si l'élément n'existe pas", async () => {
    table.findByPk.mockResolvedValue(null);

    const req = { params: { id: "99" } } as unknown as Request;
    const res = mockResponse();

    await delElement(req, res, table);

    expect(table.findByPk).toHaveBeenCalledWith("99");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "pas d'élement ayant cet ID",
    });
  });

  test("delElement retourne 500 en cas d'erreur", async () => {
    table.findByPk.mockRejectedValue(new Error("Erreur DB"));

    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();

    await delElement(req, res, table);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erreur DB" });
  });
});
