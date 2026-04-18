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
 *           example: 1
 *         gymName:
 *           type: string
 *           example: "Maniak Charleroi"
 *         gymAddress:
 *           type: string
 *           example: "100 Chaussée de Bruxelles, 6020 Dampremy"
 *         gymSchedule:
 *           type: object
 *           description: Horaires d'ouverture par jour
 *           example:
 *             lundi: "10:00-22:30"
 *             mardi: "10:00-22:30"
 *             mercredi: "10:00-22:30"
 *             jeudi: "10:00-22:30"
 *             vendredi: "10:00-22:30"
 *             samedi: "10:00-20:00"
 *             dimanche: "10:00-20:00"
 *         areaImageUrl:
 *           type: string
 *           example: "https://www.maniak.club/web/image/431121-f5c37b32/charleroi.jpg"
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
 *           example: 3
 *         areaName:
 *           type: string
 *           example: "Pan Güllich"
 *         areaDesc:
 *           type: string
 *           example: "Zone de force avec pan, poutre et entraînement"
 *         gymId:
 *           type: integer
 *           description: Référence vers la salle Maniak
 *           example: 1
 *         areaImageUrl:
 *           type: string
 *           example: "https://www.maniak.club/web/image/485481-66c44039/padoue2.jpg"
 *         gym:
 *           type: object
 *           description: Informations minimales sur la salle liée
 *           properties:
 *             gymId:
 *               type: integer
 *               example: 1
 *             gymName:
 *               type: string
 *               example: "Maniak Charleroi"
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
 *           example: 1
 *         difficultyColorName:
 *           type: string
 *           example: "Bleu"
 *         difficultyFrenchScale:
 *           type: string
 *           example: "5C"
 *         difficultyVerminScale:
 *           type: string
 *           example: "V3"
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
 *           example: 12
 *         pictureLink:
 *           type: string
 *           description: URL de l'image de profil
 *           example: "https://cdn.maniak.club/profile/pic_12.png"
 *         pictureLegend:
 *           type: string
 *           description: Légende associée à l'image
 *           example: "Photo prise lors de l'ouverture de la salle"
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
 *           example: 2
 *         statusName:
 *           type: string
 *           description: Nom du statut utilisateur
 *           example: "Premium"
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
 *           example: 42
 *         boulderDesc:
 *           type: string
 *           example: "Bloc physique sur grosses prises"
 *         boulderLink:
 *           type: string
 *           example: "https://cdn.maniak.club/boulders/b42.mp4"
 *         boulderReleaseDate:
 *           type: string
 *           format: date
 *           example: "2024-03-15"
 *         boulderEndDate:
 *           type: string
 *           nullable: true
 *           example: null
 *         difficultyId:
 *           type: integer
 *           example: 3
 *         userId:
 *           type: integer
 *           description: ID du setter
 *           example: 7
 *         areaId:
 *           type: integer
 *           example: 5
 *         boulderImageUrl:
 *           type: string
 *           example: "https://cdn.maniak.club/boulders/img42.jpg"
 *         difficulty:
 *           type: object
 *           description: Informations sur la difficulté
 *           properties:
 *             difficultyId:
 *               type: integer
 *             difficultyColorName:
 *               type: string
 *             difficultyFrenchScale:
 *               type: string
 *             difficultyVerminScale:
 *               type: string
 *         setter:
 *           type: object
 *           description: Informations sur l'ouvreur
 *           properties:
 *             userId:
 *               type: integer
 *             userFName:
 *               type: string
 *             userLName:
 *               type: string
 *             userPseudo:
 *               type: string
 *         area:
 *           type: object
 *           description: Zone dans laquelle se trouve le bloc
 *           properties:
 *             areaId:
 *               type: integer
 *             areaName:
 *               type: string
 *             areaDesc:
 *               type: string
 *             gym:
 *               type: object
 *               properties:
 *                 gymId:
 *                   type: integer
 *                 gymName:
 *                   type: string
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
 *           example: 12
 *         commentsTxt:
 *           type: string
 *           example: "Super bloc, très physique !"
 *         userId:
 *           type: integer
 *           example: 5
 *         boulderId:
 *           type: integer
 *           example: 42
 *         author:
 *           type: object
 *           description: Auteur du commentaire
 *           properties:
 *             userId:
 *               type: integer
 *             userFName:
 *               type: string
 *             userLName:
 *               type: string
 *             userPseudo:
 *               type: string
 *         boulder:
 *           type: object
 *           description: Bloc associé
 *           properties:
 *             boulderId:
 *               type: integer
 *             boulderDesc:
 *               type: string
 *             boulderLink:
 *               type: string
 *             boulderReleaseDate:
 *               type: string
 *             boulderEndDate:
 *               type: string
 *             difficultyId:
 *               type: integer
 *             userId:
 *               type: integer
 *             areaId:
 *               type: integer
 *             boulderImageUrl:
 *               type: string
 *             area:
 *               type: object
 *               properties:
 *                 areaId:
 *                   type: integer
 *                 areaName:
 *                   type: string
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
 *           example: 18
 *         rateNote:
 *           type: integer
 *           description: Note entre 0 et 10
 *           example: 7
 *         difficultyId:
 *           type: integer
 *           example: 3
 *         rateTxt:
 *           type: string
 *           example: "Très bon bloc, exigeant mais fun"
 *         videoLink:
 *           type: string
 *           nullable: true
 *           example: "https://cdn.maniak.club/ratings/video18.mp4"
 *         userId:
 *           type: integer
 *           example: 5
 *         boulderId:
 *           type: integer
 *           example: 42
 *         author:
 *           type: object
 *           description: Auteur de la note
 *           properties:
 *             userId:
 *               type: integer
 *             userFName:
 *               type: string
 *             userLName:
 *               type: string
 *             userPseudo:
 *               type: string
 *         boulder:
 *           type: object
 *           description: Bloc associé
 *           properties:
 *             boulderId:
 *               type: integer
 *             boulderDesc:
 *               type: string
 *             boulderLink:
 *               type: string
 *             boulderReleaseDate:
 *               type: string
 *             boulderEndDate:
 *               type: string
 *             difficultyId:
 *               type: integer
 *             userId:
 *               type: integer
 *             areaId:
 *               type: integer
 *             boulderImageUrl:
 *               type: string
 *             area:
 *               type: object
 *               properties:
 *                 areaId:
 *                   type: integer
 *                 areaName:
 *                   type: string
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
 *           example: 7
 *         commentsId:
 *           type: integer
 *           description: ID du commentaire parent
 *           example: 12
 *         commentsrepliesId:
 *           type: integer
 *           description: ID du commentaire enfant (la réponse)
 *           example: 34
 *         parentComment:
 *           type: object
 *           description: Commentaire parent
 *           properties:
 *             commentsId:
 *               type: integer
 *         childComment:
 *           type: object
 *           description: Commentaire enfant (la réponse)
 *           properties:
 *             commentsId:
 *               type: integer
 *             commentsTxt:
 *               type: string
 *             userId:
 *               type: integer
 *             boulderId:
 *               type: integer
 *             author:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                 userFName:
 *                   type: string
 *                 userLName:
 *                   type: string
 *                 userPseudo:
 *                   type: string
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
 *           example: 12
 *         difficultyId:
 *           type: integer
 *           example: 4
 *         user:
 *           type: object
 *           description: Informations sur l'utilisateur (si inclus)
 *           properties:
 *             userId:
 *               type: integer
 *             userPseudo:
 *               type: string
 *         difficulty:
 *           type: object
 *           description: Informations sur la difficulté (si inclus)
 *           properties:
 *             difficultyId:
 *               type: integer
 *             difficultyColorName:
 *               type: string
 *             difficultyFrenchScale:
 *               type: string
 *             difficultyVerminScale:
 *               type: string
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
 *           description: Identifiant unique de l'utilisateur
 *           example: 1
 *         
 *         userMail:
 *           type: string
 *           description: Adresse email unique de l'utilisateur
 *           example: "matthieu@example.com"
 *         
 *         userLName:
 *           type: string
 *           nullable: true
 *           description: Nom de famille
 *           example: "Decrème"
 *         
 *         userFName:
 *           type: string
 *           nullable: true
 *           description: Prénom
 *           example: "Matthieu"
 *         
 *         userPseudo:
 *           type: string
 *           description: Pseudonyme unique
 *           example: "MatthieuD"
 *         
 *         userPassHashed:
 *           type: string
 *           description: Mot de passe hashé
 *           example: "$2b$10$hash..."
 *         
 *         pictureId:
 *           type: integer
 *           nullable: true
 *           description: Référence vers l'image de profil
 *           example: 4
 *         
 *         statusId:
 *           type: integer
 *           nullable: true
 *           description: Référence vers le statut utilisateur
 *           example: 2
 */
