import { usePage } from "../../PageContext";
import { postRating } from "./ratingsPost";
import { useState, useEffect } from "react";
import type Difficulty from "../../types/Difficulty";


function RatingBoulderByIdForm({ boulderId, difficultyId }: { boulderId: number, difficultyId: number }) {
    const setPage = usePage();

    const token = localStorage.getItem("tokenIdentification");
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const userId = tokenUser?.id;

    interface RatingExistant {
        rateId: number,
        boulderId: number,
    }

    const [ratingsExistant, setRatingsExistant] = useState<RatingExistant[]>([]);
    const [hasRated, setHasRated] = useState(false);
    const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
    const [selectedDifficultyId, setSelectedDifficultyId] = useState<number>(difficultyId);

    useEffect(() => {
        if (!token || !userId) {
            setPage("pageConnexion");
            return;
        }

        fetch(`${import.meta.env.VITE_API_URL}/ratings/author/${userId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((res) => res.json())
            .then((data) => setRatingsExistant(Array.isArray(data) ? data : []));
    }, [userId, token]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/difficulties`)
            .then((res) => res.json())
            .then((data) => setDifficulties(Array.isArray(data) ? data : []));
    }, []);

    useEffect(() => {
        for (const r of ratingsExistant) {
            if (r.boulderId === Number(boulderId)) {
                setHasRated(true);
                break;
            }
        }
    }, [ratingsExistant, boulderId]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/difficulties`)
            .then((res) => res.json())
            .then((data) => setDifficulties(data));
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        await postRating(formData, boulderId, setPage);

    };

    if (hasRated) {
        alert("vous avez déjà voté pour ce bloc")
        setPage(`boulderId-${boulderId}`);
    }

    return (
        <div>
            <form id="formRatingBoulder" onSubmit={handleSubmit}>
                <span>Laisser un avis sur ce bloc</span>

                <label>Une note sur 10 :</label>
                <input type="number" min="1" max="10" name="rating" />


                <label>Difficulté ressentie :</label>
                <select
                    value={selectedDifficultyId}
                    onChange={(e) => setSelectedDifficultyId(Number(e.target.value))}
                    name="feelRating"
                >
                    {difficulties.map((d) => (
                        <option key={d.difficultyId} value={d.difficultyId}>
                            {d.difficultyColorName} — {d.difficultyFrenchScale} ({d.difficultyVerminScale})
                        </option>
                    ))}
                </select>


                <label>Un commentaire sur ce bloc :</label>
                <textarea name="ratingsTxt" placeholder="Laisse un commentaire..." />

                <label>Avez vous pris une vidéo ?</label>
                <textarea name="linkVideoForm" placeholder="Laisse le lien de votre vidéo..." />

                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default RatingBoulderByIdForm;