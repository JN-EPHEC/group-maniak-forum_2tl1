import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";


/// User table (model)

class users extends Model {}

users.init(
    {
        // Attributs ici
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        prenom :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        nom :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'users',// Nom de la table 
    },
);


export default users