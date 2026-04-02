import relation from "../controllers/relation.js";
import express from "express";
import type { Request, Response } from "express";
//relation
const artistes = relation.artistes;
const groupes = relation.groupes;

// methode
/// GET tout 
export const getAllArtistes = async (req : Request,res : Response ) =>{
    try {
        const artistesAll = await artistes.findAll({
               include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.status(200).json(artistesAll);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
///GET id

export const getArtisteById = async (req : Request,res : Response ) =>{
    try {
         let artId = req.params.id;
        const artiste = await artistes.findAll({
        where : {id : artId},
       include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.status(200).json(artiste);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
///GET artiste par id de groupe
export const getArtistesByIdGroupe = async (req : Request,res : Response ) =>{
    try {
        let id = req.params.id;
        const artistesGrouped = await artistes.findAll({
        where : {groupeId : id},
        include: {
            model: groupes,
            as: "groupe",
            attributes: ["nom"] 
        }
    });
    res.json(artistesGrouped);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
///GET artiste par id de sexe
export const getArtistesBySexe = async (req : Request,res : Response ) =>{
    try {
        let sexe = req.params.sexe;
        const artistebySexe = await artistes.findAll({
            where : {sexe}
        });
        res.status(200).json(artistebySexe);
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
///post 
export const postArtiste = async (req : Request,res : Response ) =>{
    try {
        const art = await artistes.create(req.body);
        res.status(201).json(art);
        console.log(`L'artiste ${art} à bien été crée`)
    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};