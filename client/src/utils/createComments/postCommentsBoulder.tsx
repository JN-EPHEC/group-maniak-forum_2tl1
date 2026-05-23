
import { fetchWithAuth } from "../fetchWithAuth";
export const postCommentsBoulder = async (e: any, setPage: (page: string) => void) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const commentsTxt = data.get("commentsTxtForm")
    const userId = 2
    const boulderId = data.get("boulderId")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            commentsTxt: commentsTxt,
            userId: userId,
            boulderId: boulderId,
        })
    };
    try {
        const response = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/comments`, requestOptions);
        if(response.status == 403){
            setPage("pageConnexion")
        }
    } catch(error) {
        console.error(error)
    }
}    