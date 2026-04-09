import jwt from "jsonwebtoken";
export interface user{
    id: number;
    username: string;
    password: string;
    role: string
}
export const demoUser = {
  id: 1,
  username: "caca",
  password: "caca",
  role: "admin",
};

export const createAccessToken = (user:user) => {
    const accessSecret = process.env.JWT_ACCESS_SECRET;
     if (!accessSecret) {
    throw new Error("JWT_ACCESS_SECRET non configuré");
    }
    return jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        accessSecret,
        { expiresIn: "20s" },
    );
};
export const createRefreshToken = (user:user) => {
    const refreshSecret = process.env.JWT_REFRESH_SECRET;
    if (!refreshSecret) {
        throw new Error("JWT_REFRESH_SECRET non configuré");
    }
    return jwt.sign(
        { id: user.id, username: user.username },
        refreshSecret,
        { expiresIn: "7d" },
    );
};

