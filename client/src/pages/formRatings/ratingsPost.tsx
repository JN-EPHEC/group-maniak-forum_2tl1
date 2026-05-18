import { fetchWithAuth } from "../../utils/fetchWithAuth";

export const postRating = async (
    formData: FormData,
    boulderId: number,
    setPage: (page: string) => void) => {
    const token = localStorage.getItem("tokenIdentification") ?? "";
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const userId = tokenUser?.id;

    if (!userId) return;

    await fetchWithAuth(`${import.meta.env.VITE_API_URL}/ratings`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            rateNote: formData.get("rating"),
            rateTxt: formData.get("ratingsTxt"),
            videoLink: formData.get("linkVideoForm"),
            boulderId: boulderId,
            userId: userId,
            difficultyId: formData.get("feelRating")
        }),
    });

    setPage(`boulderId-${boulderId}`);
};