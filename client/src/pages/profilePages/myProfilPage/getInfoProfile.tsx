import { useState, useEffect } from "react";
import { usePage } from "../../../PageContext";
import { fetchWithAuth } from "../../../utils/fetchWithAuth";
import type Ratings from "../../../types/Ratings.ts";
import PP1 from "../../../assets/img/PP_Chat.png";
import PP2 from "../../../assets/img/PP_chien.png"
import type User from "../../../types/User.ts";
const profilePictures: Record<number, string> = {
    1: PP1,
    2: PP2,
};

function GetInfoProfile(){

    const setPage = usePage();
 const tokenAuth = localStorage.getItem("tokenIdentification") ?? "";
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");

    const [infoProfil, setInfoProfil] = useState<User | null>(null);
    const [ratingsInfo, setRatingsInfo] = useState<Ratings[]>([]);

    useEffect(() => {
        if (!tokenUser) {
            alert("Vous n'êtes pas encore connecté. Rendez vous dans la rubrique 'Se connecter'");
            setPage("pageConnexion");
            return;
        }

        fetchWithAuth(`${import.meta.env.VITE_API_URL}/users/${tokenUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then((res) => res.json())
            .then((data) => setInfoProfil(data));

        fetchWithAuth(`${import.meta.env.VITE_API_URL}/ratings/author/${tokenUser.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
            .then((res) => res.json())
            .then((data) => setRatingsInfo(data));

    }, []);



    const getDifficultyColor = (colorName: string): string => {
        const colors: Record<string, string> = {
            "noir": "#1a1a1a",
            "blanc": "#e0e0e0",
            "rouge": "#e53935",
            "bleu": "#1e88e5",
            "vert": "#43a047",
            "jaune": "#fdd835",
            "orange": "#fb8c00",
            "violet": "#8e24aa",
            "rose": "#e91e8c",
        };
        return colors[colorName.toLowerCase()] ?? "#888";
    };

    const avatarSrc = infoProfil?.pictureId ? profilePictures[infoProfil.pictureId] : null;


    return (
        <div className="profil-card">

            <div className="profil-header">
                <div className="avatar-circle">
                    {avatarSrc
                        ? <img src={avatarSrc} alt="Photo de profil" />
                        : <span className="avatar-fallback">{infoProfil?.userFName?.[0]}{infoProfil?.userLName?.[0]}</span>
                    }
                </div>
                <div className="profil-header-info">
                    <p className="profil-fullname">{infoProfil?.userFName} {infoProfil?.userLName}</p>
                    <p className="profil-pseudo">@{infoProfil?.userPseudo}</p>
                    <span className="profil-badge">{infoProfil?.status?.statusName}</span>
                </div>
            </div>

            <div className="profil-body">
                <div className="profil-info-grid">
                    <div className="profil-info-item">
                        <i className="ti ti-mail" />
                        <div>
                            <span className="profil-info-label">Email</span>
                            <span className="profil-info-value">{infoProfil?.userMail}</span>
                        </div>
                    </div>
                    <div className="profil-info-item">
                        <i className="ti ti-calendar" />
                        <div>
                            <span className="profil-info-label">Membre depuis</span>
                            <span className="profil-info-value">
                                {infoProfil?.createdAt ? new Date(infoProfil.createdAt).toLocaleDateString("fr-FR") : "—"}
                            </span>
                        </div>
                    </div>
                    <div className="profil-info-item">
                        <i className="ti ti-mountain" />
                        <div>
                            <span className="profil-info-label">Blocs réalisés</span>
                            <span className="profil-info-value">{ratingsInfo?.length ?? 0}</span>
                        </div>
                    </div>
                </div>

                {infoProfil?.HighestLvl && infoProfil.HighestLvl.length > 0 && (
                <div className="profil-boulders">
                    <p className="profil-boulders-title">Bloc le plus difficile validé</p>
                    {(() => {
                        const b = infoProfil.HighestLvl[0];
                        return (
                            <div className="profil-boulder-item" onClick={() => setPage(`boulderId-${b.boulderId}`)} style={{ cursor: "pointer" }}>
                                <span className="boulder-name">Boulder : {b.boulder.boulderName}</span>
                                <div className="boulder-difficulty">
                                    <span
                                        className="boulder-color-dot"
                                        style={{ backgroundColor: getDifficultyColor(b.boulder?.difficulty?.difficultyColorName ?? "") }}
                                    />
                                    <span className="boulder-scale">
                                        {b.boulder?.difficulty?.difficultyFrenchScale
                                            ? `(${b.boulder.difficulty.difficultyFrenchScale})`
                                            : ""}
                                    </span>
                                </div>
                            </div>
                        );
                    })()}
                </div>
                )}
                {ratingsInfo && ratingsInfo.length > 0 && (
                    <div className="profil-boulders">
                        <p className="profil-boulders-title">Blocs réalisés</p>
                        {ratingsInfo.map((r) => (
                            <div key={r.rateId} className="profil-boulder-item" onClick={() => setPage(`boulderId-${r.boulderId}`)} style={{ cursor: "pointer" }}>
                                <span className="boulder-name">Boulder : {r.boulder.boulderName} — {r.boulder.area.areaName}</span>
                                <span className="profil-info-value">Note : {r.rateNote}/10</span>
                                                                    <span
                                        className="boulder-color-dot"
                                        style={{ backgroundColor: getDifficultyColor(r.boulder?.difficulty?.difficultyColorName ?? "") }}
                                    />
                                    <span className="boulder-scale">
                                        {r.boulder?.difficulty?.difficultyFrenchScale
                                            ? `(${r.boulder.difficulty.difficultyFrenchScale})`
                                            : ""}
                                    </span>
                                {r.rateTxt && <span className="profil-info-label">"{r.rateTxt}"</span>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default GetInfoProfile;