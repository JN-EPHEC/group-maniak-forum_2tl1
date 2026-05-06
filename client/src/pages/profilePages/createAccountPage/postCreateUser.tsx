export const postCreateUser = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userMail = data.get("formEmail")
    const userLName = data.get("formLName")
    const userFName = data.get("formFName")
    const userPseudo = data.get("formPseudo")
    const password = data.get("formPassword")
    const idPP = data.get("pick_PP")
    const pictureId = Number(idPP)
    const statusId = 2

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            userMail: userMail,
            userLName: userLName,
            userFName: userFName,
            userPseudo: userPseudo,
            password: password,
            pictureId: pictureId,
            statusId: statusId
        })
    };

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, requestOptions);

        if (response.status === 201) {
            alert("Compte créé avec succès !")
            // ou navigate vers la page de connexion
        } else if (response.status === 500) {
            alert("Cet email ou ce pseudo est déjà utilisé.")
        } else {
            alert("Une erreur inattendue est survenue.")
        }

    } catch (error) {
        alert("Impossible de contacter le serveur, vérifie ta connexion.")
        console.error(error)
    }
}