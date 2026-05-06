import { useState, useEffect } from "react";
import { usePage } from "../../../PageContext";

function GetInfoProfile(){

    const setPage = usePage()

    interface infoProfile {
        userId: number;
        userFName: string,
        userLName: string, 
        userMail: string, 
        userPseudo: string, 
        status: {
            statusId: number,
            statusName: string,
        },
        boulderUsers: [

        ],
        createdAt: string,
    }

    const tokenAuth = localStorage.getItem("tokenIdentification")?? "";
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser")?? "null");;

    const [infoProfil,setInfoProfil] = useState<infoProfile | null>(null);
    console.log(tokenAuth, tokenUser)
    useEffect(() => {
        if (!tokenUser) {
            alert("Vous n'êtes pas encore connecté. Rendez vous dans la rubrique 'Se connecter'");
            setPage("pageConnexion");
            return;
        }

        fetch(`${import.meta.env.VITE_API_URL}/users/${tokenUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then((res) => res.json())
            .then((data) => setInfoProfil(data));
    }, []);
        
        
    console.log(infoProfil)
    return (
        <div className="profil-card">
            <div className="profil-header">
                <div className="avatar-circle">
                    <img src="/assets/profilePicture/default.jpg" alt="Photo de profil" />
                </div>
                <div>
                    <p>{infoProfil?.userFName} {infoProfil?.userLName}</p>
                    <p>@{infoProfil?.userPseudo}</p>
                    <span>{infoProfil?.status?.statusName}</span>
                </div>
            </div>

            <p><i className="ti ti-mail" /> {infoProfil?.userMail}</p>
            <p><i className="ti ti-calendar" /> Membre depuis {infoProfil?.createdAt ? new Date(infoProfil.createdAt).toLocaleDateString("fr-FR") : "—"}</p>

            <p>Blocs réalisés : {infoProfil?.boulderUsers?.length}</p>
            {infoProfil?.boulderUsers?.map((b: any) => (
             <div key={b.boulderId}>
                <p>Boulder #{b.boulderId} — difficulté {b.boulder?.difficultyId}</p>
                 <p>{new Date(b.createdAt).toLocaleDateString("fr-FR")}</p>
             </div>
            ))}
        </div>
    );
}

export default GetInfoProfile