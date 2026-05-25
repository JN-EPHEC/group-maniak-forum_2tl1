export const PostConnectUser = async (e: any, setPage: (page: string) => void) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const identifier = data.get("emailForm");
    const password = data.get("passwordForm");
    const requestOptions = {
        method: 'POST',
        credentials: 'include' as RequestCredentials,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            identifier: identifier,
            password: password,
        })
    };
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions);
        if (response.status === 200) {
            const resultat = await response.json()
            localStorage.setItem("tokenIdentification", resultat.accessToken);
            localStorage.setItem("tokenUser", JSON.stringify(resultat.user));
            setPage("pageProfil")
        } else if (response.status === 401) {
            (document.getElementById("erreurFormConnect") as HTMLElement).innerText = "Erreur de connexion, le mot de passe ou email est peut-être incorrect"
        } else {
            (document.getElementById("erreurFormConnect") as HTMLElement).innerText = "Une erreur inattendue est survenue.";
        }
        
    
    } catch (error) {
        console.error(error)
    }
};