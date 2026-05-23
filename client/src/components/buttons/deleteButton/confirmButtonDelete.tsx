import { useState } from "react"
import { fetchWithAuth } from "../../../utils/fetchWithAuth";

function ConfirmButtonDelete({ boulderId, setPage }: { boulderId: number, setPage: (page: string) => void }) {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const token = localStorage.getItem("tokenIdentification") ?? "";

    const handleDelete = async () => {
        const response = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/boulders/${boulderId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.ok) {
            setPage(`home`);
        }
    }

    return (
        <div>
            <button className="btn-delete" onClick={() => setShowConfirmation(true)}>
                Supprimer
            </button>

            {showConfirmation && (
                <div className="confirm-box">
                    <p>Confirmer la suppression ?</p>
                    <button className="btn-confirm" onClick={handleDelete}>Oui, supprimer</button>
                    <button className="btn-cancel" onClick={() => setShowConfirmation(false)}>Annuler</button>
                </div>
            )}
        </div>
    )
}

export default ConfirmButtonDelete