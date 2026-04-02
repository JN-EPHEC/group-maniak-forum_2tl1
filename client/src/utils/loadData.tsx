import type { User } from "../types/user";

async function loadData(setData: (users: User[]) => void) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    const users = await res.json();
    setData(users); //
  } catch (err) {
    console.error(err);
  }
}
export default loadData