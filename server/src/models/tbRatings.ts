import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbRatings extends Model {};

tbRatings.init(
        {
        // Attributs ici
        rateId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        rateNote :{
            type : DataTypes.INTEGER,
            allowNull: false,
        },
        difficultyId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbDifficulties",
                key : "difficultyId"
            }
        },
        rateTxt :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        videoLink :{
            type : DataTypes.STRING,
            allowNull: true,
        },
        userId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbUsers",
                key : "userId"
            }
        },
        boulderId:{
            type :DataTypes.INTEGER,
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
        modelName: 'tbRatings',// Nom de la table 
    },
);

export default tbRatings