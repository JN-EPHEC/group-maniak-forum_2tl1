import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbStatus extends Model {
    declare statusId: number;
    declare statusName: string;
};

tbStatus.init(
        {
        // Attributs ici
        statusId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        statusName :{
            unique: true,
            type : DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbStatus',// Nom de la table 
    },
);

export default tbStatus