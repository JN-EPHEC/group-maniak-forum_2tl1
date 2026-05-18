import type BoulderUser from "./BoulderUser";
export default interface User {
        userId: number;
        userFName: string;
        userLName: string;
        userMail: string;
        userPseudo: string;
        pictureId: number;
        status: {
            statusId: number;
            statusName: string;
        };
        HighestLvl : BoulderUser[];
        createdAt: string;
    }
