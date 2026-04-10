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
        rateTxt :{
            type : DataTypes.STRING,
            allowNull: false,
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
        modelName: 'tbRatings',// Nom de la table 
    },
);

export default tbRatings