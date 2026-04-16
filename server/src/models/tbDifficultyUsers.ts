import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbDifficultyUsers extends Model {};

tbDifficultyUsers.init(
        {
        // Attributs ici
        userId : {
            type :DataTypes.INTEGER,
            primaryKey: true,
            references : {
                model: "tbUsers",
                key : "userId"
            }
        },
        difficultyId:{
            type :DataTypes.INTEGER,
            primaryKey: true,
            references : {
                model: "tbDifficulties",
                key : "difficultyId"
            }
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbDifficultyUsers',// Nom de la table 
    },
);

export default tbDifficultyUsers