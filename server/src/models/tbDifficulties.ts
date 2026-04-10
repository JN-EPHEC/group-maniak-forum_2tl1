import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbDifficulties extends Model {};

tbDifficulties.init(
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
        freezeTableName: true,
        modelName: 'tbDifficulties',// Nom de la table 
    },
);

export default tbDifficulties