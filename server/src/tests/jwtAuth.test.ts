import { jwtAuth } from "../middlewares/jwtAuth";
import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken");

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

describe("Middleware jwtAuth", () => {
  beforeEach(() => {
    process.env.JWT_ACCESS_SECRET = "test-secret";
    jest.clearAllMocks();
  });

  test("Renvoie 401 si aucun header Authorization n'est fourni", () => {
    const req: any = { headers: {} };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Token manquant" });
  });

  test("Renvoie 401 si le header ne commence pas par Bearer", () => {
    const req: any = { headers: { authorization: "Token abc" } };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Token manquant" });
  });

  test("Renvoie 500 si le secret JWT est manquant", () => {
    delete process.env.JWT_ACCESS_SECRET;

    const req: any = { headers: { authorization: "Bearer abc" } };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403); // car erreur → catch → Token invalide
    expect(res.json).toHaveBeenCalledWith({ message: "Token invalide" });
  });

  test("Renvoie 401 si le token est expiré", () => {
    (jwt.verify as jest.Mock).mockImplementation(() => {
      const err: any = new Error("Token expiré");
      err.name = "TokenExpiredError";
      throw err;
    });

    const req: any = { headers: { authorization: "Bearer expiredtoken" } };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Token expiré" });
  });

  test("Renvoie 403 si le token est invalide", () => {
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error("Invalid token");
    });

    const req: any = { headers: { authorization: "Bearer invalidtoken" } };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Token invalide" });
  });

  test("Passe au next() si le token est valide", () => {
    const decoded = { id: 1, pseudo: "Test", role: 1 };

    (jwt.verify as jest.Mock).mockReturnValue(decoded);

    const req: any = { headers: { authorization: "Bearer validtoken" } };
    const res = mockResponse();
    const next = mockNext();

    jwtAuth(req, res, next);

    expect(req.user).toEqual(decoded);
    expect(next).toHaveBeenCalled();
  });
});
