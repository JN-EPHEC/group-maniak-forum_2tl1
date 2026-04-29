import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class tbReplies extends Model {};

tbReplies.init(
    
        {
        replyId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        commentsId: {
            type: DataTypes.INTEGER,
            references: { model: "tbComments", key: "commentsId" },
            onDelete: "CASCADE",
        },
        commentsrepliesId: {
            type: DataTypes.INTEGER,
            references: { model: "tbComments", key: "commentsId" }
        }

    },
    {
        //les options de la table ici (model)
        sequelize, //need to pass the connection instance
        freezeTableName: true,
        modelName: 'tbReplies',// Nom de la table 
    },
);

export default tbReplies