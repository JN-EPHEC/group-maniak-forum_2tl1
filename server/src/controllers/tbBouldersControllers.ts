import type { Request, Response } from "express";
import { tbUsers,tbDifficulties,tbBoulders,tbAreaGyms,tbGyms,tbRatings,sequelize} from  "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";

export const getAllBoulders = async (req : Request,res : Response ) =>{
    try {
        const json = await tbBoulders.findAll({
 
            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },

            include: [
                {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
                {
                    model: tbDifficulties,
                    as: "difficulty",
                    attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
                },
                {
                    model: tbUsers,
                    as: "setter",
                    attributes: ["userId","userFName","userLName","userPseudo"]
                },
                {
                    model: tbAreaGyms,
                    as: "area",
                    attributes: ["areaId","areaName","areaDesc"],
                    include :[
                        {
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId","gymName"]
                        }
                    ]
                }
            ],

            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });

        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

export const getBoulderbyPk = async (req:Request,res: Response) =>{
    try {
        const id = req.params.id as string;

        const json = await tbBoulders.findAll({
            where:{ boulderId:id },

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },

            include: [
                {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
                {
                    model: tbDifficulties,
                    as: "difficulty",
                    attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
                },
                {
                    model: tbUsers,
                    as: "setter",
                    attributes: ["userId","userFName","userLName","userPseudo"]
                },
                {
                    model: tbAreaGyms,
                    as: "area",
                    attributes: ["areaId","areaName","areaDesc"],
                    include :[
                        {
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId","gymName"]
                        }
                    ]
                }
            ],

            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });

        res.status(200).json(json);

    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
export const getBoulderByArea = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {areaId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },

            include: [
                {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
                {
                    model: tbDifficulties,
                    as: "difficulty",
                    attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
                },
                {
                    model: tbUsers,
                    as: "setter",
                    attributes: ["userId","userFName","userLName","userPseudo"]
                },
                {
                    model: tbAreaGyms,
                    as: "area",
                    attributes: ["areaId","areaName","areaDesc"],
                    include :[
                        {
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId","gymName"]
                        }
                    ]
                }
            ],

            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });

        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};

export const getBoulderByGym = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },
            include: 
            [
            {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
            {model: tbDifficulties,
            as: "difficulty",
            attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]},
            {
            model: tbUsers,
            as: "setter",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
            model: tbAreaGyms,
            as: "area",
            attributes: ["areaId","areaName","areaDesc"],
            required: true,
            include :[ {
                model: tbGyms,
                as: "gym",
                attributes: ["gymId","gymName"],
                            where : {gymId:id},
                            required: true,
            }]
            }],
            
            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderBySetter = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {userId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },

            include: [
                {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
                {
                    model: tbDifficulties,
                    as: "difficulty",
                    attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
                },
                {
                    model: tbUsers,
                    as: "setter",
                    attributes: ["userId","userFName","userLName","userPseudo"]
                },
                {
                    model: tbAreaGyms,
                    as: "area",
                    attributes: ["areaId","areaName","areaDesc"],
                    include :[
                        {
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId","gymName"]
                        }
                    ]
                }
            ],

            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });

        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getBoulderByDifficulty = async (req:Request,res:Response) => {
    try {
        const id = req.params.id as string;
        const json = await tbBoulders.findAll({
            where : {difficultyId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"]
                ]
            },

            include: [
                {
                    model: tbRatings,
                    as: "ratings",
                    attributes: [] 
                },
                {
                    model: tbDifficulties,
                    as: "difficulty",
                    attributes: ["difficultyId","difficultyColorName","difficultyFrenchScale","difficultyVerminScale"]
                },
                {
                    model: tbUsers,
                    as: "setter",
                    attributes: ["userId","userFName","userLName","userPseudo"]
                },
                {
                    model: tbAreaGyms,
                    as: "area",
                    attributes: ["areaId","areaName","areaDesc"],
                    include :[
                        {
                            model: tbGyms,
                            as: "gym",
                            attributes: ["gymId","gymName"]
                        }
                    ]
                }
            ],

            group: [
                "tbBoulders.boulderId",
                "difficulty.difficultyId",
                "setter.userId",
                "area.areaId",
                "area->gym.gymId"
            ]
        });

        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const postBoulder = async (req:Request,res:Response) => {
    postElement(req,res,tbBoulders)
};
export const deleteBoulder = async (req:Request,res:Response)=>{
    delElement(req,res,tbBoulders)
};
