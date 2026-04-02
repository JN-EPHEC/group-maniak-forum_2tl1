import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import sequelize from './config/database.js';
import {requestLogger} from './middlewares/logger.js'
import { ErrorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';



import cors from "cors";

//Import du router
import apiRoutes from './routes/apiRoutes.js';
//Constantes
const app = express();
const port = 3000;

// Pour paser le JSON, pour que Express parse le req en json
app.use(express.json());
// Pour utiliser le logger 
app.use(requestLogger);
//Pour autorisé le front a parler avec le back 
app.use(cors());
//Pour pouvoir utiliser SwaggerUi 
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerSpec));
///Redirection de request
app.use('/api',apiRoutes);
app.use('/',express.static('../public'));
//DEVOIR 1
app.use('/groupes',express.static('../public/groupes'));

//Apres toute les routes le errorhandler pour gerer les erreurs
app.use(ErrorHandler);
///Dans la console
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
            ///Syncronisation des tables (model)
            try {
                try {
                await sequelize.sync();
                console.log('la syncro est done')
                try {
                /// Lancement du Serveur
                app.listen(port, () => {
                    console.log(`Serveur lancé sur http://localhost:${port}`);
                });
                 } catch (error){
                console.error(`'listen pas on : ${error}`)
                }
                } catch (error){
                console.error(`'La syncro a foiré : ${error}`)
                }


            } catch (error){
                console.error('La syncro a foiré')
            }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}    
startServer();
    

