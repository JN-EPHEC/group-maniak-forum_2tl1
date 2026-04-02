import express from "express";
import type { Request,Response,NextFunction } from "express";
import { basicAuth } from "../middlewares/basicAuth";
import auth from 'http-auth';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
// config du real et du fichier source
const digest = auth.digest({
    realm: "Zone Secure",
    file: __dirname + "/../../users.htdigest"
});
// Middleware digest compatible Express
const digestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    digest.check(req, res, (valid: boolean) => {
        if (valid) next();
        else res.status(401).send("Unauthorized");
    });
};
/**
* @swagger
* /api/admin/digest:
*   get:
*       summary: Route admin protégée en HTTP Digest
*       tags: [Admin]
*       security:
*           - digestAuth: []
*       responses:
*           200:
*              description: Authentification Digest valide
*           401:
*               desription: Non authorisé
*/
// Route protégée
router.get("/digest", digestMiddleware, (req: Request, res: Response) => {
    res.json({ message: `C'est la zone digest, ${req.user} !!` });
});


/**
* @swagger
* /api/admin/basic:
*   get:
*       summary: Route admin protégée en HTTP Basic
*       tags: [Admin]
*       security:
*           - basicAuth: []
*       responses:
*           200:
*              description: Authentification Basic valide
*           401:
*               desription: Non authorisé
*/
router.get("/basic",basicAuth, (req:Request,res:Response) => {
    res.json({message: "C'est la zone admin la"})
});

export default router