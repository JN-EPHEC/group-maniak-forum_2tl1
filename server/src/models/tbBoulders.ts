import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbBoulders extends Model {};

tbBoulders.init(
        {
        // Attributs ici
        boulderId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        boulderName :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        boulderDesc :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        boulderLink :{
            type : DataTypes.STRING,
            unique:true,
            allowNull: true,
        },
        boulderReleaseDate :{
            type : DataTypes.DATE,
            allowNull: false,
        },
        boulderEndDate :{
            type : DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        difficultyId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbDifficulties",
                key : "difficultyId"
            }
        },
        userId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbUsers",
                key : "userId"
            }
        },
        areaId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbAreaGyms",
                key : "areaId"
            }
        },
        boulderImageUrl: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: true,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbBoulders',// Nom de la table 
    },
);

export default tbBoulders