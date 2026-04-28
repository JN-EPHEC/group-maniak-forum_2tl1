import { useState, useEffect } from "react";
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
        area: object;
    }
    const [boulder, setBoulder] = useState<Boulder[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/boulders`)
            .then((res) => res.json())
            .then((data) => setBoulder(data));
    }, []); 

    console.log(boulder)

    return (
        <div id="boulderList">
            {boulder.map((boulder) => (
                <div key={`idBoulder${boulder.boulderId}`} id={`idBoulder${boulder.boulderId}`} className={`difficultyId${boulder.difficultyId}`}>
                    {boulder.boulderImageUrl && (
                        <img alt="img_boulder" src={boulder.boulderImageUrl} />
                    )}
                    <span className="boulderName">{boulder.boulderName}</span>
                    <span className="descriptionBoulder">{boulder.boulderDesc}</span>
                    <span className="nameArea">📍{boulder.area.areaName}</span>
                    <span></span>
                </div>
            ))}
        </div>
    )
}

export default GetBoulder