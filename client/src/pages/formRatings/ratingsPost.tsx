import { fetchWithAuth } from "../../utils/fetchWithAuth";

export const postRating = async (
    e: React.FormEvent<HTMLFormElement>,
    boulderId: number,
    difficultyId: number,
    setPage: (page: string) => void
) => {
    const data = new FormData(e.currentTarget);
    
    const token = localStorage.getItem("tokenIdentification") ?? "";
    const userId = localStorage.getItem("tokenUser")

    await fetchWithAuth(`${import.meta.env.VITE_API_URL}/ratings`, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({
            rating: data.get("rating"),
            ratingsTxt: data.get("ratingsTxt"),
            linkVideo: data.get("linkVideoForm"),
            boulderId,
            userId,
            difficultyId
        }),
    });

    setPage(`boulderId-${boulderId}`);
};