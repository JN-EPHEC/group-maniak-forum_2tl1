import { useState, useEffect } from "react";
import { getStars } from "../utils/conversionRating";
import { postCommentsBoulder } from "../utils/createComments/postCommentsBoulder";
import { usePage } from "../PageContext";

interface Props {
    boulderId: number;
    patchForm?: React.ReactNode;
}

function GetBoulderById({ boulderId, patchForm }: Props){
    interface BoulderById {
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
    interface CommentById {
        commentsId: number,
        author: {
            userId: number,
            userFName : string,
            userLName: string,
            userPseudo: string
        },
        boulderId: number,
        commentsTxt: string,
    }

    interface RatingsByBoulders {
        rateId: number,
        rateNote: number,
        difficultyId: number,
        rateTxt: string,
        author: {
            userId: number,
            userFName : string,
            userLName: string,
            userPseudo: string
        },
        boulderId: number,
        commentsTxt: string,
        
    }
    const setPage  = usePage();
    const [boulderById, setBoulderById] = useState<BoulderById[]>([]);
    const [commentsBoulderById,setCommentsBoulderById] = useState<CommentById[]>([]);
    const [RatingsByBoulders,setRatingsByBoulders] = useState<RatingsByBoulders[]>([]);
    
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/boulders/${boulderId}`)
            .then((res) => res.json())
            .then((data) => setBoulderById(Array.isArray(data) ? data : [data]));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/comments/boulder/${boulderId}`)
            .then((res) => res.json())
            .then((data) => setCommentsBoulderById(data));
    }, []); 
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/ratings/boulder/${boulderId}`)
            .then((res) => res.json())
            .then((data) => setRatingsByBoulders(data));
    }, []);
    return (
    <div id="boulderDetail">
    {boulderById.map((boulder) => (
        <div key={boulder.boulderId} className="boulderCard">
            <span className="boulderNameTitle">{boulder.boulderName}</span>
            <span className="setterInfo">
                Ouvreur : {`${boulder.setter.userPseudo} (${boulder.setter.userFName} ${boulder.setter.userLName})`}
            </span>

            <div className="boulderImageUrl">
                {boulder.boulderImageUrl && <img src={boulder.boulderImageUrl} />}
            </div>

            <span className="boulderDesc">{boulder.boulderDesc}</span>
            <span className="areaNameBoulder">Zone : {boulder.area.areaName}</span>
            <span className="boulderReleaseDate">
                Jour d'ouverture : {new Date(boulder.boulderReleaseDate).toLocaleDateString()}
            </span>

            <span className="boulderLink">
                {boulder.boulderLink && <a href={boulder.boulderLink}>Voir</a>}
            </span>

            <span className="areaDescBoulder">{boulder.area.areaDesc}</span>


            <div className="ratingSection">
                <div id="ratingStars">
                    {getStars(boulder.avgRating).map((star, i) => (
                        star === "full" ? (
                            <span key={i} className="star-full">★</span>
                        ) : star === "half" ? (
                            <span key={i} className="star-half">★</span>
                        ) : (
                            <span key={i} className="star-empty">★</span>
                        )
                    ))}
                    <span className="ratingCount">({boulder.SumRating})</span>
                </div>

                <button
                    className="buttonOrange"
                    onClick={() => setPage(`formRatings-${boulderId}`)}
                >
                    Laisser un avis
                </button>
            </div>
        </div>
    ))}


    <div id="ratingsList">
        <h3>Avis & Notes</h3>

        {RatingsByBoulders.length === 0 && (
            <p className="noRatings">Aucun avis pour le moment.</p>
        )}

        {RatingsByBoulders.map((rate) => (
            <div key={rate.rateId} className="ratingCard">
                <span className="ratingAuthor">{rate.author.userPseudo}</span>

                <div className="ratingNote">
                    Note : <strong>{rate.rateNote}/10</strong>
                </div>

                <div className="ratingDifficulty">
                    Difficulté ressentie : <strong>{rate.difficultyId}</strong>
                </div>

                <div className="ratingTxt">{rate.rateTxt}</div>
            </div>
        ))}
    </div>


    <div id="ajouterCommentaire">
        <form onSubmit={postCommentsBoulder}>
            <input type="hidden" name="boulderId" value={boulderId} />
            <textarea name="commentsTxtForm" placeholder="Laisse un commentaire..."></textarea>
            <button type="submit">Publier</button>
        </form>
    </div>

    <div id="commentsList">
        <h3>Commentaires</h3>

        {commentsBoulderById.map((comments) => (
            <div key={comments.commentsId} className="commentCard">
                <span className="commentAuthor">{comments.author.userPseudo}</span>
                <span className="commentTxt">{comments.commentsTxt}</span>
            </div>
        ))}
    </div>
</div>

)
}

export default GetBoulderById