import { fetchWithAuth } from "../../utils/fetchWithAuth";


export const postFormCreateBoulder = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const boulderDesc = data.get("boulderDescForm")
    const boulderName = data.get("boulderNameForm")
    const boulderImageUrl = data.get("boulderImageUrlForm")
    const levelId = data.get("boulderLevelIdForm")
    const areaId = data.get("boulderAreaIdForm")
    const boulderReleaseDate = data.get("boulderDateForm")
    const userId = data.get("boulderSetterIdForm")
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
            boulderImageUrl: boulderImageUrl,
              })
    };
    const response = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/boulders`, requestOptions);
    const result = await response.json()
    console.log(result)
};
