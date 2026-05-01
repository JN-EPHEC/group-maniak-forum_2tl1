import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import jwt from "jsonwebtoken";

import { createAccessToken, createRefreshToken } from "../utils/jwt";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
}));

describe("JWT utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_ACCESS_SECRET = "access-secret";
    process.env.JWT_REFRESH_SECRET = "refresh-secret";
  });

  test("createAccessToken génère un token avec le bon payload", () => {
    const fakeUser = {
      userId: 10,
      userPseudo: "Matthieu",
      statusId: 2,
    };

    (jwt.sign as jest.Mock).mockReturnValue("signed-access-token");

    const token = createAccessToken(fakeUser as any);

    expect(jwt.sign).toHaveBeenCalledWith(
      {
        id: 10,
        pseudo: "Matthieu",
        role: 2,
      },
      "access-secret",
      { expiresIn: "15min" }
    );

    expect(token).toBe("signed-access-token");
  });

  test("createAccessToken lance une erreur si JWT_ACCESS_SECRET est manquant", () => {
    delete process.env.JWT_ACCESS_SECRET;

    const fakeUser = {
      userId: 1,
      userPseudo: "Test",
      statusId: 1,
    };

    expect(() => createAccessToken(fakeUser as any)).toThrow(
      "JWT_ACCESS_SECRET non configuré"
    );
  });

  test("createRefreshToken génère un token avec le bon payload", () => {
    const fakeUser = {
      userId: 5,
      userPseudo: "Ekss",
      statusId: 1,
    };

    (jwt.sign as jest.Mock).mockReturnValue("signed-refresh-token");

    const token = createRefreshToken(fakeUser as any);

    expect(jwt.sign).toHaveBeenCalledWith(
      {
        id: 5,
        pseudo: "Ekss",
        role: 1,
      },
      "refresh-secret",
      { expiresIn: "7d" }
    );

    expect(token).toBe("signed-refresh-token");
  });

  test("createRefreshToken lance une erreur si JWT_REFRESH_SECRET est manquant", () => {
    delete process.env.JWT_REFRESH_SECRET;

    const fakeUser = {
      userId: 1,
      userPseudo: "Test",
      statusId: 1,
    };

    expect(() => createRefreshToken(fakeUser as any)).toThrow(
      "JWT_REFRESH_SECRET non configuré"
    );
  });
});
