export default interface Boulder {
        SumRating: number,
        boulderId: number,
        boulderName: string,
        boulderDesc: string,
        boulderLink: string,
        boulderReleaseDate: string,
        boulderEndDate: string,
        difficultyId: number,
        boulderImageUrl: string,
        createdAt: string,
        updatedAt: string,
        avgRating: number,
        difficulty: {
            difficultyId: number,
            difficultyColorName: string,
            difficultyFrenchScale: string,
            difficultyVerminScale: string
        },
        setter: {
            userId: number,
            userFName: string,
            userLName: string,
            userPseudo: string
        },
        area: {
            areaId: number,
            areaName: string,
            areaDesc: string,
            gym: {
                gymId: number,
                gymName: string,
            },
        }
    }
