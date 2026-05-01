import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import { Json } from "sequelize/lib/utils";

class tbGyms extends Model {
    declare gymId : number;
    declare gymName: string;
    declare gymAddress: string;
    declare gymSchedule: Json;
    declare areaImageUrl: string;
};

tbGyms.init(
        {
        // Attributs ici
        gymId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        gymName :{
            unique:true,
            type : DataTypes.STRING,
            allowNull: false,
        },
        gymAddress :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        gymSchedule :{
            type : DataTypes.JSON,
            allowNull: false,
        },
        areaImageUrl: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: true,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbGyms',// Nom de la table 
    },
);

export default tbGyms