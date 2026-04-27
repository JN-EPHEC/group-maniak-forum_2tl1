/**
 * @swagger
 * components:
 *   schemas:
 *     Gym:
 *       type: object
 *       required:
 *         - gymName
 *         - gymAddress
 *         - gymSchedule
 *       properties:
 *         gymId:
 *           type: integer
 *         gymName:
 *           type: string
 *         gymAddress:
 *           type: string
 *         gymSchedule:
 *           type: object
 *         areaImageUrl:
 *           type: string
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     AreaGym:
 *       type: object
 *       required:
 *         - areaName
 *         - areaDesc
 *         - gymId
 *       properties:
 *         areaId:
 *           type: integer
 *         areaName:
 *           type: string
 *         areaDesc:
 *           type: string
 *         gymId:
 *           type: integer
 *         areaImageUrl:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Difficulty:
 *       type: object
 *       required:
 *         - difficultyColorName
 *         - difficultyFrenchScale
 *         - difficultyVerminScale
 *       properties:
 *         difficultyId:
 *           type: integer
 *         difficultyColorName:
 *           type: string
 *         difficultyFrenchScale:
 *           type: string
 *         difficultyVerminScale:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProfilePicture:
 *       type: object
 *       required:
 *         - pictureLink
 *         - pictureLegend
 *       properties:
 *         pictureId:
 *           type: integer
 *         pictureLink:
 *           type: string
 *         pictureLegend:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Status:
 *       type: object
 *       required:
 *         - statusName
 *       properties:
 *         statusId:
 *           type: integer
 *         statusName:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Boulder:
 *       type: object
 *       required:
 *         - boulderDesc
 *         - boulderReleaseDate
 *         - difficultyId
 *         - userId
 *         - areaId
 *       properties:
 *         boulderId:
 *           type: integer
 *         boulderDesc:
 *           type: string
 *         boulderLink:
 *           type: string
 *         boulderReleaseDate:
 *           type: string
 *         boulderEndDate:
 *           type: string
 *           nullable: true
 *         difficultyId:
 *           type: integer
 *         userId:
 *           type: integer
 *         areaId:
 *           type: integer
 *         boulderImageUrl:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - commentsTxt
 *         - userId
 *         - boulderId
 *       properties:
 *         commentsId:
 *           type: integer
 *         commentsTxt:
 *           type: string
 *         userId:
 *           type: integer
 *         boulderId:
 *           type: integer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Rating:
 *       type: object
 *       required:
 *         - rateNote
 *         - rateTxt
 *         - userId
 *         - boulderId
 *       properties:
 *         rateId:
 *           type: integer
 *         rateNote:
 *           type: integer
 *         difficultyId:
 *           type: integer
 *         rateTxt:
 *           type: string
 *         videoLink:
 *           type: string
 *           nullable: true
 *         userId:
 *           type: integer
 *         boulderId:
 *           type: integer
 */

 /**
 * @swagger
 * components:
 *   schemas:
 *     Reply:
 *       type: object
 *       required:
 *         - commentsId
 *         - commentsrepliesId
 *       properties:
 *         replyId:
 *           type: integer
 *         commentsId:
 *           type: integer
 *         commentsrepliesId:
 *           type: integer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DifficultyUser:
 *       type: object
 *       required:
 *         - userId
 *         - difficultyId
 *       properties:
 *         userId:
 *           type: integer
 *         difficultyId:
 *           type: integer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - userMail
 *         - userPseudo
 *         - userPassHashed
 *       properties:
 *         userId:
 *           type: integer
 *         userMail:
 *           type: string
 *         userLName:
 *           type: string
 *           nullable: true
 *         userFName:
 *           type: string
 *           nullable: true
 *         userPseudo:
 *           type: string
 *         userPassHashed:
 *           type: string
 *         pictureId:
 *           type: integer
 *           nullable: true
 *         statusId:
 *           type: integer
 *           nullable: true
 */
