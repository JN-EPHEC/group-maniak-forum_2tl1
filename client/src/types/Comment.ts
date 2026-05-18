export default interface Comment {
        commentsId: number,
        author: {
            userId: number,
            userFName : string,
            userLName: string,
            userPseudo: string
        },
        boulderId: number,
        commentsTxt: string,
    }