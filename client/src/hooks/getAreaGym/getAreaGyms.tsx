import { useState, useEffect } from "react";
import { usePage } from "../../PageContext";
import type Gym from "../../types/Gym";
function CreateGymList(){
   
    const [gyms, setGyms] = useState<Gym[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/gyms`)
            .then((res) => res.json())
            .then((data) => setGyms(data));
    }, []); 

    const setPage = usePage();
    
    return (
        <div id='listGym'>
            {gyms.map((gym) => (
                <div key={`idGym${gym.gymId}`} id={`idGym${gym.gymId}`} onClick={() => setPage(`boulderPage-${gym.gymId}`)}>
                    <img alt="img_maniak_charleroi" src={gym.areaImageUrl}></img>
                    <span>{gym.gymName}</span>
                </div>
            ))}
        </div>
       
    );
}

export default CreateGymList




