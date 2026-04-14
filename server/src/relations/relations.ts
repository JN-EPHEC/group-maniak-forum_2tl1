import {
    tbGyms,
    tbDifficulties,
    tbProfilePictures,
    tbStatus,
    tbAreaGyms,
    tbUsers,
    tbBoulders,
    tbComments,
    tbRatings,
    tbReplies
} from "../models/index";
    // -------------------------
    // USERS
    // -------------------------

    tbUsers.belongsTo(tbDifficulties, { foreignKey: "difficultyId", as: "difficulty" });
    tbDifficulties.hasMany(tbUsers, { foreignKey: "difficultyId", as: "users" });

    tbUsers.belongsTo(tbProfilePictures, { foreignKey: "pictureId", as: "profilePicture" });
    tbProfilePictures.hasMany(tbUsers, { foreignKey: "pictureId", as: "users" });

    tbUsers.belongsTo(tbStatus, { foreignKey: "statusId", as: "status" });
    tbStatus.hasMany(tbUsers, { foreignKey: "statusId", as: "users" });


    // -------------------------
    // BOULDERS
    // -------------------------

    tbBoulders.belongsTo(tbDifficulties, { foreignKey: "difficultyId", as: "difficulty" });
    tbDifficulties.hasMany(tbBoulders, { foreignKey: "difficultyId", as: "boulders" });

    tbBoulders.belongsTo(tbUsers, { foreignKey: "userId", as: "setter" });
    tbUsers.hasMany(tbBoulders, { foreignKey: "userId", as: "bouldersSet" });

    tbBoulders.belongsTo(tbAreaGyms, { foreignKey: "areaId", as: "area" });
    tbAreaGyms.hasMany(tbBoulders, { foreignKey: "areaId", as: "boulders" });


    // -------------------------
    // AREA / GYM
    // -------------------------

    tbAreaGyms.belongsTo(tbGyms, { foreignKey: "gymId", as: "gym" });
    tbGyms.hasMany(tbAreaGyms, { foreignKey: "gymId", as: "areas" });


    // -------------------------
    // COMMENTS
    // -------------------------

    tbComments.belongsTo(tbUsers, { foreignKey: "userId", as: "author" });
    tbUsers.hasMany(tbComments, { foreignKey: "userId", as: "comments" });

    tbComments.belongsTo(tbBoulders, { foreignKey: "boulderId", as: "boulder" });
    tbBoulders.hasMany(tbComments, { foreignKey: "boulderId", as: "comments" });


    // -------------------------
    // RATINGS
    // -------------------------

    tbRatings.belongsTo(tbUsers, { foreignKey: "userId", as: "author" });
    tbUsers.hasMany(tbRatings, { foreignKey: "userId", as: "ratings" });

    tbRatings.belongsTo(tbBoulders, { foreignKey: "boulderId", as: "boulder" });
    tbBoulders.hasMany(tbRatings, { foreignKey: "boulderId", as: "ratings" });


    // -------------------------
    // REPLIES (self-relation on comments)
    // -------------------------
tbReplies.belongsTo(tbComments, {foreignKey: "commentsId", as: "parentComment" });
tbReplies.belongsTo(tbComments, { foreignKey: "commentsrepliesId", as: "childComment" });
tbComments.hasMany(tbReplies, { foreignKey: "commentsId", as: "replies" });
tbComments.hasMany(tbReplies, { foreignKey: "commentsrepliesId", as: "isReplyOf" });



