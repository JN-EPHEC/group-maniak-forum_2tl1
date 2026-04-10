import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbUsers extends Model {};

tbUsers.init(
        {
        // Attributs ici
        userId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        userMail :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        userLName :{
            type : DataTypes.STRING,
            allowNull: true,
        },
        userFName :{
            type : DataTypes.STRING,
            allowNull: true,
        },
        userPseudo :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        userPassHashed :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        difficultyId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbDifficulties",
                key : "difficultyId"
            }
        },
        pictureId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbProfilePictures",
                key : "pictureId"
            }
        },
        statusId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbStatus",
                key : "statusId"
            }
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbUsers',// Nom de la table 
    },
);

export default tbUsers