import { useState, useEffect } from "react";
import { usePage } from "../../../PageContext";
import { fetchWithAuth } from "../../../utils/fetchWithAuth";

import PP1 from "../../../assets/img/PP_Chat.png";
import PP2 from "../../../assets/img/PP_chien.png"

const profilePictures: Record<number, string> = {
    1: PP1,
    2: PP2,
};

function GetInfoProfile(){

    const setPage = usePage();

    interface BoulderUser {
        boulderId: number;
        boulder: {
            difficultyId: number;
            difficulty: {
                difficultyColorName: string;
                difficultyFrenchScale: string;
            }
        }
    }

    interface infoProfile {
        userId: number;
        userFName: string;
        userLName: string;
        userMail: string;
        userPseudo: string;
        pictureId: number;
        status: {
            statusId: number;
            statusName: string;
        };
        boulderUsers: BoulderUser[];
        createdAt: string;
    }

    const tokenAuth = localStorage.getItem("tokenIdentification") ?? "";
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");

    const [infoProfil, setInfoProfil] = useState<infoProfile | null>(null);

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

            {/* HEADER */}
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

            {/* INFOS */}
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
                            <span className="profil-info-value">{infoProfil?.boulderUsers?.length ?? 0}</span>
                        </div>
                    </div>
                </div>

                {/* BOULDERS */}
                {infoProfil?.boulderUsers && infoProfil.boulderUsers.length > 0 && (
                    <div className="profil-boulders">
                        <p className="profil-boulders-title">Blocs validés</p>
                        <div className="profil-boulders-list">
                            {infoProfil.boulderUsers.map((b: BoulderUser) => (
                                <div key={b.boulderId} className="profil-boulder-item" onClick={() => setPage(`boulderId-${b.boulderId}`)} style={{ cursor: "pointer" }}>
                                    <span className="boulder-name">Boulder #{b.boulderId}</span>
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
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GetInfoProfile;