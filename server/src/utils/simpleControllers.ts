import type { Request, Response } from "express";

// GET ALL 
export async function getAll(req : Request,res : Response,table:any ){
    try {
        const json = await table.findAll();
        res.status(200).json(json);

    } catch (error) {
    res.status(500).json({ error: (error as any).message });
};  
};
// GET  by PK
export async function getByPk(req:Request,res: Response,table:any ){
    try {
        const id = req.params.id as string;
        const json = await table.findByPk(id);
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message })
    }
};
// POST 
export async function postElement(req: Request,res : Response,table:any ){
    try {
        const json = await table.create(req.body);
        res.status(201).json(json);
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};

// DEL 
export async function delElement(req: Request,res : Response,table:any ){
    try {
         const id = req.params.id as string;
            const json = await table.findByPk(id);
            if (!json) return res.status(404).json({error : "pas d'élement ayant cet ID"});
            await json.destroy();
            res.status(204).json({message: `l'élement ${id} de la table : ${table} a été supprimé`});
    } catch (error) {
        res.status(500).json({ error: (error as any).message });
    }
};