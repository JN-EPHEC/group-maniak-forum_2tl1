import { usePage } from "../../PageContext";
import { postRating } from "./ratingsPost";
import { useState, useEffect } from "react";

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

    useEffect(() => {
        if (!token) {
            setPage("pageConnexion");
            return;
        }

        fetch(`${import.meta.env.VITE_API_URL}/ratings/author/${userId}`)
            .then((res) => res.json())
            .then((data) => setRatingsExistant(Array.isArray(data) ? data : []));
    }, []);

    useEffect(() => {
        for (const r of ratingsExistant) {
            if (r.boulderId === Number(boulderId)) {
                setHasRated(true);
                break;
            }
        }
    }, [ratingsExistant]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await postRating(e, boulderId, difficultyId, setPage);
    };

    if (hasRated) {
        return <div>Vous avez déjà laissé un avis sur ce bloc !</div>;
    }

    return (
        <div>
            <form id="formRatingBoulder" onSubmit={handleSubmit}>
                <span>Laisser un avis sur ce bloc</span>
                <label>Une note sur 10 :</label>
                <input type="number" min="1" max="10" name="rating" />
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