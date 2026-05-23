
import { jest,describe, test, expect,it} from "@jest/globals";
import {checkPassword} from "../middlewares/checkPassword";
const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

describe("Middleware checkPassword", () => {
  test("Renvoie 401 si aucun mot de passe n'est fourni", () => {
    const req: any = { body: {} };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Veuillez entrer un mot de passe" });
    expect(next).not.toHaveBeenCalled();
  });

  test("Renvoie 400 si le mot de passe est trop court", () => {
    const req: any = { body: { password: "Aa1!" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Le mot de passe doit contenir au moins 8 caractères",
    });
  });

  test("Renvoie 400 si pas de majuscule", () => {
    const req: any = { body: { password: "abcd1234!" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Le mot de passe doit contenir au moins une majuscule",
    });
  });

  test("Renvoie 400 si pas de minuscule", () => {
    const req: any = { body: { password: "ABCD1234!" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Le mot de passe doit contenir au moins une minuscule",
    });
  });

  test("Renvoie 400 si pas de chiffre", () => {
    const req: any = { body: { password: "Abcdefg!" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Le mot de passe doit contenir au moins un chiffre",
    });
  });

  test("Renvoie 400 si pas de caractère spécial", () => {
    const req: any = { body: { password: "Abcdefg1" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Le mot de passe doit contenir au moins un caractère spécial",
    });
  });

  test("Passe au next() si le mot de passe est valide", () => {
    const req: any = { body: { password:"Winter2026?" } };
    const res = mockResponse();
    const next = mockNext();

    checkPassword(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
test("Renvoie 500 si une erreur interne survient dans le middleware", () => {
  const req: any = {
    body: {}
  };

  // On crée un getter qui throw dès qu'on lit req.body.password
  Object.defineProperty(req.body, "password", {
    get() {
      throw new Error("Erreur simulée");
    }
  });

  const res = mockResponse();
  const next = mockNext();

  checkPassword(req, res, next);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json).toHaveBeenCalledWith({
    message: "Erreur interne middleware checkPassword",
  });
  expect(next).not.toHaveBeenCalled();
});



});
