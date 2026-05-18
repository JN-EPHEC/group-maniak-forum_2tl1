import { useState } from "react";
import { fetchWithAuth } from "../../utils/fetchWithAuth";

function PatchBoulderId({ boulderId }: { boulderId: number }) {
    const [releaseDate, setReleaseDate] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const token = localStorage.getItem("tokenIdentification");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/boulders/${boulderId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization' : `${token}`,
                },
                body: JSON.stringify({ "boulderEndDate": releaseDate }),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="formPatchDate">
            <form onSubmit={handleSubmit}>
                <label>Date de fin du bloc :</label>
                <input
                    type="date"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    required
                />
                <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Envoi..." : "Mettre à jour"}
                </button>
            </form>
            {status === "success" && <p>Date mise à jour avec succès !</p>}
            {status === "error" && <p>Une erreur est survenue.</p>}
        </div>
    );
}

export default PatchBoulderId;