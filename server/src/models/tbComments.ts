import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbComments extends Model {
    declare commentsId: number;
    declare commentsTxt: string;
    declare userId:number;
    declare boulderId:number;
};

tbComments.init(
        {
        // Attributs ici
        commentsId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        commentsTxt :{
            type : DataTypes.STRING,
            allowNull: false,
        },
        userId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbUsers",
                key : "userId"
            }
        },
        boulderId:{
            type :DataTypes.INTEGER,
            references : {
                model: "tbBoulders",
                key : "boulderId"
            }
        }
    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbComments',// Nom de la table 
    },
);

export default tbComments