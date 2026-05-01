import { ErrorHandler } from "../middlewares/errorHandler";
import { describe, test, expect, jest, beforeEach, afterEach } from "@jest/globals";

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Middleware ErrorHandler", () => {
  test("Renvoie 500 et message par défaut", () => {
    const err = {};
    const req: any = {};
    const res = mockResponse();
    const next = mockNext();

    ErrorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Internal server error" });
    expect(next).toHaveBeenCalled();
  });

  test("Renvoie le status et message fournis", () => {
    const err = { status: 403, message: "Accès refusé" };
    const req: any = {};
    const res = mockResponse();
    const next = mockNext();

    ErrorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: "Accès refusé" });
    expect(next).toHaveBeenCalled();
  });

  test("Throw si res.status plante et next() n'est pas appelé", () => {
    const req: any = {};
    const res: any = {};
    const next = mockNext();

    res.status = () => {
      throw new Error("Erreur simulée");
    };

    expect(() => ErrorHandler({}, req, res, next)).toThrow();

    expect(next).not.toHaveBeenCalled();
  });
});
