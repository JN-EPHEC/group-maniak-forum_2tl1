import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbProfilePictures extends Model {
    declare pictureId: number;
    declare pictureLink: string;
    declare pictureLegend: string;
};

tbProfilePictures.init(
        {
        // Attributs ici
        pictureId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        pictureLink :{
            type : DataTypes.STRING,
            unique:true,
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
        freezeTableName: true,
        modelName: 'tbProfilePictures',// Nom de la table 
    },
);

export default tbProfilePictures