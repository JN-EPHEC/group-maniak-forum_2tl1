import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class groupes extends Model {};

groupes.init(
        {
        // Attributs ici
        groupeId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nom:{
            type : DataTypes.STRING,
            allowNull: false,
        },
        agence :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        actif :{
            type : DataTypes.BOOLEAN,
            allowNull: true,
        },
        imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "./img/pasgroupe.jpeg"
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'groupes',// Nom de la table 
    },
);

export default groupes