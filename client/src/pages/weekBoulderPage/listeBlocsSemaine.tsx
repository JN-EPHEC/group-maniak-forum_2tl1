
import { usePage } from "../../PageContext";
import { getStars } from "../../utils/conversionRating";
import { useState, useEffect } from "react";
function WeekBoulder() {
interface WeeklyBoulder {
    boulderId: number;
    avgRating: number;
    ratingCount: number;

    boulder: {
        boulderId: number;
        boulderName: string;
        boulderDesc: string;
        boulderLink: string | null;
        boulderReleaseDate: string;
        boulderEndDate: string | null;
        difficultyId: number;
        userId: number;
        areaId: number;
        boulderImageUrl: string | null;

        difficulty: {
            difficultyId: number;
            difficultyColorName: string;
            difficultyFrenchScale: string;
            difficultyVerminScale: string;
        };

        setter: {
            userId: number;
            userFName: string;
            userLName: string;
            userPseudo: string;
        };

        area: {
            areaId: number;
            areaName: string;
            areaDesc: string;

            gym: {
                gymId: number;
                gymName: string;
            };
        };
    };
}



     const [boulderWeekly, setBoulderWeekly] = useState<WeeklyBoulder[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/boulders/weekly`)
            .then((res) => res.json())
            .then((data) => setBoulderWeekly(Array.isArray(data) ? data : [data]));
    }, []);

    const setPage = usePage();
    

    return (
        <div id="boulderWeekly">
        {boulderWeekly.map((boulder) => (
        <div key={boulder.boulderId} className="boulderCard">
            <span className="boulderNameTitle">{boulder.boulder.boulderName}</span>
            <span className="setterInfo">
                Ouvreur : {`${boulder.boulder.setter.userPseudo} (${boulder.boulder.setter.userFName} ${boulder.boulder.setter.userLName})`}
            </span>

            <div className="boulderImageUrl">
                {boulder.boulder.boulderImageUrl && <img src={boulder.boulder.boulderImageUrl} />}
            </div>

            <span className="boulderDesc">{boulder.boulder.boulderDesc}</span>
            <span className="areaNameBoulder">Zone : {boulder.boulder.area.areaName}</span>
            <span className="boulderReleaseDate">
                Jour d'ouverture : {new Date(boulder.boulder.boulderReleaseDate).toLocaleDateString()}
            </span>

            <span className="boulderLink">
                {boulder.boulder.boulderLink && <a href={boulder.boulder.boulderLink}>Voir</a>}
            </span>

            <span className="areaDescBoulder">{boulder.boulder.area.areaDesc}</span>


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
                    <span className="ratingCount">({boulder.ratingCount})</span>
                </div>

                <button
                    className="buttonOrange"
                    onClick={() => setPage(`formRatings-${boulder.boulderId}`)}
                >
                    Laisser un avis
                </button>
            </div>
        </div>
        
        )
        )
        }  
        </div> 
    )
}
export default WeekBoulder