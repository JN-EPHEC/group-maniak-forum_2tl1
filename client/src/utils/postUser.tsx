import type { User } from "../types/user";
import loadData from "./loadData";

async function postUser(
    prenom: string,
    nom: string,
    setData: (users: User[]) => void

) {
    try {
        let User = {"prenom" : prenom, "nom" : nom}
        await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(User)
        });
        await loadData(setData)
    } catch (err) {
    console.error("Erreur :", err);
  }
}
export default postUser