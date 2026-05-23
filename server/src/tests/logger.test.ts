import { requestLogger } from "../middlewares/logger";
import { describe, test, expect, jest } from "@jest/globals";

const mockNext = () => jest.fn();

describe("Middleware requestLogger", () => {
  test("Log correctement la requête et appelle next()", () => {
    const req: any = { method: "GET", url: "/test" };
    const res: any = {};

    const next = mockNext();

    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    requestLogger(req, res, next);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toContain("GET /test");
    expect(next).toHaveBeenCalled();

    spy.mockRestore();
  });

  test("Throw si console.log plante et next() n'est pas appelé", () => {
  const req: any = { method: "POST", url: "/boom" };
  const res: any = {};
  const next = jest.fn();

  const spy = jest.spyOn(console, "log").mockImplementation(() => {
    throw new Error("Erreur simulée");
  });

  expect(() => requestLogger(req, res, next)).toThrow();

  // next() NE DOIT PAS être appelé
  expect(next).not.toHaveBeenCalled();

  spy.mockRestore();
});
});
