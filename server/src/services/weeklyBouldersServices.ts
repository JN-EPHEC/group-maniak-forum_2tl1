import { tbUsers,tbDifficulties,tbBoulders,tbAreaGyms,tbGyms,tbRatings} from  "../models/index.js";
import { fn, col } from "sequelize";

export async function getWeeklyBoulders(){
    return tbRatings.findAll({
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

};