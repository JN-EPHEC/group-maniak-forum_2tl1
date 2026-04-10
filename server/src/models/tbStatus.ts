import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbStatus extends Model {};

tbStatus.init(
        {
        // Attributs ici
        statusId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        statusName :{
            type : DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'tbStatus',// Nom de la table 
    },
);

export default tbStatus