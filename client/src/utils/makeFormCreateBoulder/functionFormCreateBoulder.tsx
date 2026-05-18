import { fetchWithAuth } from "../fetchWithAuth";


export const postFormCreateBoulder = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const boulderDesc = data.get("boulderDescForm")
    const boulderName = data.get("boulderNameForm")
    const boulderImageurl = data.get("boulderImageUrlForm")
    const levelId = data.get("boulderLevelIdForm")
    const areaId = data.get("boulderAreaIdForm")
    const boulderReleaseDate = data.get("boulderDateForm")
    const userId = 1
    const boulderLink = data.get("boulderLinkForm")

    const tokenAuth = localStorage.getItem("tokenIdentification") ?? "";

    
    const requestOptions = {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
        body: JSON.stringify({ 
            boulderDesc: boulderDesc,
            boulderName: boulderName,
            boulderLink: boulderLink,
            boulderReleaseDate: boulderReleaseDate,
            boulderEndDate: null,
            difficultyId: levelId,
            userId: userId,
            areaId: areaId,
            boulderImageurl: boulderImageurl,
              })
    };
    const response = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/boulders`, requestOptions);
    const result = await response.json()
};