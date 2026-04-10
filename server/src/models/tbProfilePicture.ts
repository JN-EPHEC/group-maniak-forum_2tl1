import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbProfilePicture extends Model {};

tbProfilePicture.init(
        {
        // Attributs ici
        pictureId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        pictureLink :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        pictureLegend :{
            type : DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        modelName: 'tbProfilePicture',// Nom de la table 
    },
);

export default tbProfilePicture