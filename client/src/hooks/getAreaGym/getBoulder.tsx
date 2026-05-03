import { useState, useEffect } from "react";
import { getStars } from "../../utils/conversionRating";
import { usePage } from "../../PageContext";

interface Props {
  gymId: string;
}


function GetBoulder({ gymId }: Props){

    
    interface Boulder {
        boulderId: number;
        boulderName:string;
        boulderDesc: string; 
        boulderLink: string;
        boulderReleaseDate: string;
        difficultyId: number;
        areaId: number;
        boulderImageUrl: string;
        area: {
            areaId: number;
            areaName: string;
        }
        avgRating: number;
        SumRating: string;
    }
    const [boulder, setBoulder] = useState<Boulder[]>([]);
    


    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/boulders/byGym/${gymId}`)
            .then((res) => res.json())
            .then((data) => setBoulder(data));
    }, []); 

    console.log(boulder)

    
    const setPage = usePage();

    return (
        <div id="boulderList">
            {boulder.map((boulder) => (
                <div key={`idBoulder${boulder.boulderId}`} id={`idBoulder${boulder.boulderId}`} className={`difficultyId${boulder.difficultyId}`} onClick={() => setPage(`boulderId-${boulder.boulderId}`)}>
                    {boulder.boulderImageUrl && (
                        <img alt="img_boulder" src={boulder.boulderImageUrl} />
                    )}
                    <span className="boulderName">{boulder.boulderName}</span>
                    <span className="descriptionBoulder">{boulder.boulderDesc}</span>
                    <span className="nameArea">📍{boulder.area.areaName}</span>
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
                </div>
            ))}
        </div>
    )
}

export default GetBoulder