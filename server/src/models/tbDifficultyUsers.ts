import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbDifficultyUsers extends Model {
    declare userId: number;
    declare boulderId: number;
};

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
        boulderId:{
            type :DataTypes.INTEGER,
            primaryKey: true,
            references : {
                model: "tbBoulders",
                key : "boulderId"
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