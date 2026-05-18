export const PostConnectUser = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const identifier = data.get("emailForm");
    const password = data.get("passwordForm");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            identifier: identifier,
            password: password,
        })
    };
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions);
        if (response.status === 200) {
            alert("Connecté à votre compte avec succès, vous pouvez désormais acceder à votre profil via le bouton 'Mon profil'")
            const resultat = await response.json()
            localStorage.setItem("tokenIdentification", resultat.accessToken);
            localStorage.setItem("tokenUser", JSON.stringify(resultat.user));
            // ou navigate vers la page de connexion
        } else if (response.status === 401) {
            alert("Erreur de connexion, le mot de passe ou email est peut-être incorrect")
        } else {
            alert("Une erreur inattendue est survenue.")
        }
        
    
    } catch (error) {
        alert("Impossible de contacter le serveur, vérifie ta connexion.")
        console.error(error)
    }
};