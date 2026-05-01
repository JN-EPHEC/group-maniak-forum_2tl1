import type { Request, Response } from "express";
import * as tbRatingsServices from "../services/tbRatingsServices.js"
// GET ALL Ratings
export const getAllRatings = async (req : Request,res : Response ) =>{
     try {
        const json = await tbRatingsServices.getAllService()
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// GET Ratings by PK
export const getRatingsbyPk = async (req:Request,res: Response) =>{
   try {
        const id = Number(req.params.id);
        const json = await tbRatingsServices.getByPkService(id)
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// Get Ratings par User 
export const getRatingsByUser = async (req : Request,res : Response ) =>{
     try {
        const id = Number(req.params.id);
        const json = await tbRatingsServices.getByUserService(id)
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// Get Ratings par Boulders 
export const getRatingsByBoulders = async (req : Request,res : Response ) =>{
     try {
        const id = Number(req.params.id);
        const json = await tbRatingsServices.getByBoulderService(id)
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
export const getRatingsByAreaGym = async (req : Request,res : Response ) =>{
     try {
        const id = Number(req.params.id);
        const json = await tbRatingsServices.getByAreaService(id);
        res.status(200).json(json);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// POST Ratings
export const postRatings = async (req: Request, res: Response) => {
  try {
    const rating = await tbRatingsServices.postService(req.body);
    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
};

// DEL Ratings
export const delRatings = async (req: Request,res : Response) => {
      try {
        const id = Number(req.params.id);
        const deleted = await tbRatingsServices.delService(id);
        if (!deleted) {
          return res.status(404).json({ error: "pas d'élement ayant cet ID" });
        }
        res.status(204).json({
          message: `l'élement ${id} a été supprimé`
        });
      } catch (error) {
        res.status(500).json({ error: (error as any).message });
      }
};