export const PostConnectUser = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("emailForm");
    const password = data.get("passwordForm");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            identifier: email,
            password: password,
        })
    };
    console.log(email, password)
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions);
        console.log(response)
        if (response.status === 201) {
            alert("Connecté à votre compte avec succès, vous pouvez désormais acceder à votre profil via le bouton 'Mon profil'")
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