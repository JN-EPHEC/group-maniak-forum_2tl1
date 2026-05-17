import { fetchWithAuth } from "../../utils/fetchWithAuth";

export const postRating = async (
    e: React.FormEvent<HTMLFormElement>,
    boulderId: number,
    setPage: (page: string) => void
) => {
    const data = new FormData(e.currentTarget);
    const token = localStorage.getItem("tokenIdentification") ?? "";
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const userId = tokenUser?.id;

    await fetchWithAuth(`${import.meta.env.VITE_API_URL}/ratings`, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({
            rateNote: data.get("rating"),
            difficultyId:data.get("boulderLevelIdForm"),
            rateTxt: data.get("ratingsTxt"),
            linkVideo: data.get("linkVideoForm"),
            boulderId,
            userId
        }),
    });

    setPage(`boulderId-${boulderId}`);
};