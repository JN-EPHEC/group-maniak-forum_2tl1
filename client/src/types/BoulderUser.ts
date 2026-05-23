export default interface BoulderUser {
    boulderId: number;
    createdAt: string;
    boulder: {
      difficultyId: number;
      boulderId: number;
      boulderName:string;
      difficulty: {
        difficultyId: number;
        difficultyColorName: string;
        difficultyFrenchScale: string;
        difficultyVerminScale: string;
      };
    };
  }