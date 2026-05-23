import type BoulderUser from "./BoulderUser";
export default interface User {
  userId: number;
  userMail: string;
  userLName: string;
  userFName: string;
  userPseudo: string;
  pictureId: number;
  statusId: number;
  createdAt: string;
  updatedAt: string;
  profilePicture: {
    pictureId: number;
    pictureLink: string;
    pictureLegend: string;
  };

  status: {
    statusId: number;
    statusName: string;
  };

  HighestLvl: BoulderUser[];
}
