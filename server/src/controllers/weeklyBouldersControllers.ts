import type { Request, Response } from "express";
import * as getWeeklyBouldersServices from "../services/weeklyBouldersServices.js";

export const getWeeklyBoulders = async (req: Request, res: Response) => {
    try {
        const json = await getWeeklyBouldersServices.getWeeklyBoulders();
        res.status(200).json(json);

    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};
