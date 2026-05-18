
import { tbUsers,tbDifficulties,tbBoulders,tbAreaGyms,tbGyms,tbRatings,sequelize} from  "../models/index.js";

export async function getAllService() {
  return tbBoulders.findAll({
            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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
}
export async function getByPkService(id:number){
    return tbBoulders.findAll({
            where:{ boulderId:id },

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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
}
export async function getByAreaService(id:number){
    return tbBoulders.findAll({
            where : {areaId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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

};
export async function getByGymService(id:number){
    return tbBoulders.findAll({
            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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
};
export async function getBySetterService(id:number){
    return tbBoulders.findAll({
            where : {userId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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

};
export async function getByDifficultyService(id:number){
    return tbBoulders.findAll({
            where : {difficultyId:id},

            attributes: {
                include: [
                    [sequelize.fn("AVG", sequelize.col("ratings.rateNote")), "avgRating"],
                    [sequelize.fn("COUNT", sequelize.col("ratings.rateNote")), "SumRating"]
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
}
export async function postBoulderService(data:any) {
  return tbBoulders.create(data);
}
export const updateBoulderService = async (boulderId: number, data: any) => {
  const boulder = await tbBoulders.findByPk(boulderId);
  if (!boulder) return null;

  await boulder.update(data);
  return boulder;
};
export async function delBoulderService(id: number) {
  const element = await tbBoulders.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}