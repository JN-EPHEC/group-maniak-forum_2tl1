
import { jest,describe, test, expect,it} from "@jest/globals";

import { requireAdmin } from "../middlewares/checkAdminRole";

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn();

describe("Middleware requireAdmin", () => {
  test("Renvoie 401 si req.user est absent", () => {
    const req: any = { user: null };
    const res = mockResponse();
    const next = mockNext();

    requireAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Veuillez vous connecter",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("Renvoie 403 si l'utilisateur n'est pas admin", () => {
    const req: any = { user: { role: 2 } }; // setter, pas admin
    const res = mockResponse();
    const next = mockNext();

    requireAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      message: "Accès refusé : rôle insuffisant",
    });
    expect(next).not.toHaveBeenCalled();
  });

  test("Passe au next() si l'utilisateur est admin", () => {
    const req: any = { user: { role: 1 } };
    const res = mockResponse();
    const next = mockNext();

    requireAdmin(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  test("Renvoie 500 si une erreur interne survient dans le middleware", () => {
    const req: any = { user: {} };

    // On force une erreur interne : accéder à req.user.role throw
    Object.defineProperty(req.user, "role", {
      get() {
        throw new Error("Erreur simulée");
      }
    });

    const res = mockResponse();
    const next = mockNext();

    requireAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Erreur interne middleware rôle",
    });
    expect(next).not.toHaveBeenCalled();
  });
});
