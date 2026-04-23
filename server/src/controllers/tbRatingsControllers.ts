import type { Request, Response } from "express";
import { tbRatings,tbUsers,tbBoulders,tbAreaGyms } from "../models/index.js";
import { postElement,delElement } from "../utils/simpleControllers.js";
// GET ALL Ratings
export const getAllRatings = async (req : Request,res : Response ) =>{
     try {
        const json = await tbRatings.findAll({
                include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// GET Ratings by PK
export const getRatingsbyPk = async (req:Request,res: Response) =>{
   try {
        const id = req.params.id as string;
        const json = await tbRatings.findByPk(id,{
                include:  [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// Get Ratings par User 
export const getRatingsByUser = async (req : Request,res : Response ) =>{
     try {
        const id = req.params.id as string;
        const json = await tbRatings.findAll({
            where : {userId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// Get Ratings par Boulders 
export const getRatingsByBoulders = async (req : Request,res : Response ) =>{
     try {
        const id = req.params.id as string;
        const json = await tbRatings.findAll({
            where : {boulderId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getRatingsByAreaGym = async (req : Request,res : Response ) =>{
     try {
        const id = req.params.id as string;
        const json = await tbRatings.findAll({
            where : {areaId:id},
            include: [{
            model: tbUsers,
            as: "author",
            attributes: ["userId","userFName","userLName","userPseudo"]
            },{
                model: tbBoulders,
                as:"boulder",
                attributes: ["boulderId","boulderDesc","boulderLink","boulderReleaseDate","boulderEndDate","difficultyId","userId","areaId","boulderImageUrl"],
                include :[ {
                model: tbAreaGyms,
                as: "area",
                attributes: ["areaId","areaName"]
            }]
            }]
        });
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// POST Ratings
export const postRatings = async (req: Request,res : Response) => {
    postElement(req,res,tbRatings)
};

// DEL Ratings
export const delRatings = async (req: Request,res : Response) => {
    delElement(req,res,tbRatings)
};