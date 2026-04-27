import type { Request, Response } from "express";
import { tbUsers,tbDifficulties,tbBoulders,tbAreaGyms,tbGyms,tbRatings} from  "../models/index.js";
import { fn, col, literal } from "sequelize";

export const getWeeklyBoulders = async (req: Request, res: Response) => {
    try {
        const json = await tbRatings.findAll({
            attributes: [
                "boulderId",
                [fn("AVG", col("rateNote")), "avgRating"],
                [fn("COUNT", col("rateId")), "ratingCount"]
            ],
            include: [{
                model: tbBoulders,
                as: "boulder",
                attributes: [
                    "boulderId",
                    "boulderDesc",
                    "boulderLink",
                    "boulderReleaseDate",
                    "boulderEndDate",
                    "difficultyId",
                    "userId",
                    "areaId",
                    "boulderImageUrl"
                ],
                include: [
                    {
                        model: tbDifficulties,
                        as: "difficulty",
                        attributes: [
                            "difficultyId",
                            "difficultyColorName",
                            "difficultyFrenchScale",
                            "difficultyVerminScale"
                        ]
                    },
                    {
                        model: tbUsers,
                        as: "setter",
                        attributes: [
                            "userId",
                            "userFName",
                            "userLName",
                            "userPseudo"
                        ]
                    },
                    {
                        model: tbAreaGyms,
                        as: "area",
                        attributes: ["areaId", "areaName", "areaDesc"],
                        include: [{
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId", "gymName"]
                        }]
                    }
                ]
            }],
            group: [
                "tbRatings.boulderId",
                "boulder.boulderId",
                "boulder.difficulty.difficultyId",
                "boulder.setter.userId",
                "boulder.area.areaId",
                "boulder.area.gym.gymId"
            ],
            order: [[fn("AVG", col("rateNote")), "DESC"]],
            limit: 4
        });

        res.status(200).json(json);

    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};
