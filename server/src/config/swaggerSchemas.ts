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
 *     tbComments:
 *       type: object
 *       properties:
 *         commentsId:
 *           type: integer
 *           example: 42
 *         commentsTxt:
 *           type: string
 *           example: "Ceci est un commentaire"
 *         userId:
 *           type: integer
 *           example: 3
 *         boulderId:
 *           type: integer
 *           example: 5
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
 *     tbReplies:
 *       type: object
 *       properties:
 *         replyId:
 *           type: integer
 *           example: 10
 *         commentsId:
 *           type: integer
 *           description: ID du commentaire parent
 *           example: 12
 *         commentsrepliesId:
 *           type: integer
 *           description: ID du commentaire enfant créé automatiquement
 *           example: 42
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
 *         password:
 *           type: string
 *         pictureId:
 *           type: integer
 *           nullable: true
 *         statusId:
 *           type: integer
 *           nullable: true
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     CreateReplyInput:
 *       type: object
 *       required:
 *         - parentId
 *         - commentsTxt
 *         - userId
 *         - boulderId
 *       properties:
 *         parentId:
 *           type: integer
 *           description: ID du commentaire parent
 *           example: 12
 *         commentsTxt:
 *           type: string
 *           description: Texte du commentaire enfant
 *           example: "Je suis une réponse"
 *         userId:
 *           type: integer
 *           example: 3
 *         boulderId:
 *           type: integer
 *           example: 5
 */