export default interface Ratings {
  rateId: number;
  rateNote: number;
  difficultyId: number;
  rateTxt: string;
  videoLink: string | null;
  userId: number;
  boulderId: number;
  createdAt: string;
  updatedAt: string;

  author: {
    userId: number;
    userFName: string;
    userLName: string;
    userPseudo: string;
  };

  boulder: {
    boulderName: string;
    boulderId: number;
    boulderDesc: string;
    boulderLink: string;
    boulderReleaseDate: string;
    boulderEndDate: string | null;
    difficultyId: number;
    userId: number;
    areaId: number;
    boulderImageUrl: string | null;

    area: {
      areaId: number;
      areaName: string;
    };
            difficulty: {
            difficultyId: number,
            difficultyColorName: string,
            difficultyFrenchScale: string,
            difficultyVerminScale: string
        },
  };
}
