import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import sequelize from './config/database.js';
import {requestLogger} from './middlewares/logger.js'
import { ErrorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import cors from "cors";
import { initModels } from './models/initModels.js';
import cookieParser from "cookie-parser";
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser()); 

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

app.use(requestLogger);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRoutes);
app.use(ErrorHandler);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await initModels();
        await sequelize.sync();
        console.log('La syncro est done');
        app.listen(port, () => {
            console.log(`Serveur lancé sur http://${process.env.BACK_URL}:${port}`);
        });
    } catch (error) {
        console.error('Erreur au démarrage :', error);
    }
}

startServer();