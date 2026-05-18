export default interface BoulderUser {
        boulderId: number;
        boulder: {
            difficultyId: number;
            difficulty: {
                difficultyColorName: string;
                difficultyFrenchScale: string;
            }
        }
    }