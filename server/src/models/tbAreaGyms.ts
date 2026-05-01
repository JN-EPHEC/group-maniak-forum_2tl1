import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbAreaGyms extends Model {
    declare areaId : number;
    declare areaName:string;
    declare areaDesc: string;
    declare gymId:number;
    declare areaImageUrl: string;
};

tbAreaGyms.init(
        {
        // Attributs ici
        areaId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        areaName :{
            type : DataTypes.STRING,
            unique:true,
            allowNull: false,
        },
        areaDesc :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        gymId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbGyms",
                key : "gymId"
            }
        },
        areaImageUrl: {
        unique:true,
        type: DataTypes.STRING,
        allowNull: true,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbAreaGyms',// Nom de la table 
    },
);

export default tbAreaGyms