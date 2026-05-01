import { checkOwnerOrAdmin } from "../middlewares/checkOwnerOrAdmin";
import { describe, test, expect, jest } from "@jest/globals";

// Mock du modèle Sequelize
const mockModel = {
  findByPk: jest.fn(),
} as any;

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

describe("Middleware checkOwnerOrAdmin", () => {
  test("Renvoie 401 si req.user est absent", async () => {
    const req: any = { user: null, params: { id: "1" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Veuillez vous connecter",
    });
  });

  test("Renvoie 400 si l'ID est invalide", async () => {
    const req: any = { user: { id: 5 }, params: { id: "abc" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "ID invalide",
    });
  });

  test("Renvoie 404 si la ressource n'existe pas", async () => {
    mockModel.findByPk.mockResolvedValue(null);

    const req: any = { user: { id: 5 }, params: { id: "10" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "Ressource introuvable",
    });
  });

  test("Passe au next() si l'utilisateur est admin", async () => {
    mockModel.findByPk.mockResolvedValue({ userId: 99 });

    const req: any = { user: { id: 5, role: 1 }, params: { id: "10" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test("Renvoie 403 si l'utilisateur n'est pas propriétaire", async () => {
    mockModel.findByPk.mockResolvedValue({ userId: 99 });

    const req: any = { user: { id: 5, role: 2 }, params: { id: "10" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      message: "Accès refusé : cette ressource ne vous appartient pas",
    });
  });

  test("Passe au next() si l'utilisateur est propriétaire", async () => {
    mockModel.findByPk.mockResolvedValue({ userId: 5 });

    const req: any = { user: { id: 5, role: 2 }, params: { id: "10" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test("Renvoie 500 si une erreur interne survient", async () => {
    // On force findByPk à throw
    mockModel.findByPk.mockImplementation(() => {
      throw new Error("Erreur simulée");
    });

    const req: any = { user: { id: 5, role: 2 }, params: { id: "10" } };
    const res = mockResponse();
    const next = mockNext();

    const middleware = checkOwnerOrAdmin(mockModel, "userId");
    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Erreur interne middleware ownerOrAdmin",
    });
    expect(next).not.toHaveBeenCalled();
  });
});
