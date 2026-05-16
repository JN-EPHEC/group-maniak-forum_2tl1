import { useState, useEffect } from "react";
import { getStars } from "../utils/conversionRating";
import { postCommentsBoulder } from "../utils/createComments/postCommentsBoulder";
import { usePage } from "../PageContext";

interface Props {
        boulderId: string;
}

function GetBoulderById({ boulderId }: Props){
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
    const setPage = usePage()
    const [boulderById, setBoulderById] = useState<BoulderById[]>([]);
    const [commentsBoulderById,setCommentsBoulderById] = useState<CommentById[]>([]);
         
    
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/boulders/${boulderId}`)
            .then((res) => res.json())
            .then((data) => setBoulderById(data));
    }, []); 

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/comments/boulder/${boulderId}`)
            .then((res) => res.json())
            .then((data) => setCommentsBoulderById(data));
    }, []); 

    console.log(commentsBoulderById)
    return (
    <div id="boulderDetail">
        {boulderById.map((boulder) => (
            <div key={boulder.boulderId} className="boulderCard">
                <span className="boulderNameTitle">{boulder.boulderName}</span>
                <span className="setterInfo">Ouvreur : {`${boulder.setter.userPseudo} (${boulder.setter.userFName} ${boulder.setter.userLName})`}</span>
                <div className="boulderImageUrl">
                {boulder.boulderImageUrl && <img src={boulder.boulderImageUrl} />}
                </div>
                <span className="boulderDesc">{boulder.boulderDesc}</span>
                <span className="areaNameBoulder">Zone : {boulder.area.areaName}</span>
                <span className="boulderReleaseDate">Jour d'ouverture : {new Date(boulder.boulderReleaseDate).toLocaleDateString()}</span>
                <span className="boulderLink">{boulder.boulderLink && <a href={boulder.boulderLink}>Voir</a>}</span>
                
                <span className="areaDescBoulder">{boulder.area.areaDesc}</span>
                
                <span id="ratingStars">
                    {getStars(boulder.avgRating).map((star, i) => (
                            star === 'full' 
                            ? <span key={i} className="star-full">★</span>
                            : star === 'half' 
                                ? <span key={i} className="star-half">★</span>
                                : <span key={i} className="star-empty">★   </span>
                    ))}
                    {`(${boulder.SumRating})`}
                </span>
                <span className="formAddRating">
                    <button className="buttonOrange" onClick={() => setPage("formRatings")}>Laisser un avis</button>
                </span>
            </div>
        ))}
        <div id="ajouterCommentaire">
            <form onSubmit={postCommentsBoulder}>
                <input type="hidden" name="boulderId" value={boulderId} />
                <textarea name='commentsTxtForm' placeholder="Laisse un commentaire..."></textarea>
                <input type="hidden" name=""></input>
                <button type="submit"> Publier </button>
            </form>
        </div>
        {commentsBoulderById.map((comments) => (
            <div key={comments.commentsId} className="commentCard">
                <span className="commentAuthor">{comments.author.userPseudo}</span>
                <span className="commentTxt">{comments.commentsTxt}</span>
            </div>
        ))} 
    </div>
)
}

export default GetBoulderById