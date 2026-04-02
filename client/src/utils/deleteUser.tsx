import type { User } from "../types/user";
import loadData from "./loadData";

async function deleteUser(
    id: number,
    setData: (users: User[]) => void
    ) {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`, {
      method: "DELETE",
    });
    await loadData(setData)
  } catch (err) {
    console.error("Erreur :", err);
  }
}
export default deleteUser