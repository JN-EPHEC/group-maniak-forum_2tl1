import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbAreaGym extends Model {};

tbAreaGym.init(
        {
        // Attributs ici
        areaId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        areaName :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        areaDesc :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        gymId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbGym",
                key : "gymId"
            }
        },
        areaImageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'tbAreaGym',// Nom de la table 
    },
);

export default tbAreaGym