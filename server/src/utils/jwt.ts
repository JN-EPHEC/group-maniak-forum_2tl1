import jwt from "jsonwebtoken";
import type tbUsers from "../models/tbUsers.js";

const ACCESS_EXPIRES_IN = "15min";
const REFRESH_EXPIRES_IN = "7d";

export interface JwtAccessPayload {
    id: number;
    pseudo: string;
    role: string;
}

export interface JwtRefreshPayload {
    id: number;
    pseudo: string;
    role: string;
}

export const createAccessToken = (user: tbUsers) => {
    const accessSecret = process.env.JWT_ACCESS_SECRET;
    if (!accessSecret) {
        throw new Error("JWT_ACCESS_SECRET non configuré");
        }

    const payload: JwtAccessPayload = {
        id: user.userId,
        pseudo: user.userPseudo,
        role: user.statusId,
        };

    return jwt.sign(payload, accessSecret, { expiresIn: ACCESS_EXPIRES_IN });
};

export const createRefreshToken = (user: tbUsers) => {
    const refreshSecret = process.env.JWT_REFRESH_SECRET;
    if (!refreshSecret) {
        throw new Error("JWT_REFRESH_SECRET non configuré");
    }

const payload: JwtRefreshPayload = {
        id: user.userId,
        pseudo: user.userPseudo,
        role: user.statusId
    };

    return jwt.sign(payload, refreshSecret, { expiresIn: REFRESH_EXPIRES_IN });
};
