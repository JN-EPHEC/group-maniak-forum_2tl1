import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbDifficulty extends Model {};

tbDifficulty.init(
        {
        // Attributs ici
        difficultyId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        difficultyColorName :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        difficultyFrenchScale:{
            type : DataTypes.STRING,
            allowNull: false,
        },
        difficultyVerminScale:{
            type : DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'tbDifficulty',// Nom de la table 
    },
);

export default tbDifficulty