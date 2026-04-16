const infoProfilTest = {
    id: 3,
    idPP: 1,
    username: "Boureym",
    name: "Junion",
    firstName: "Benjamin",
    nbrBlocsValides: 38,
    niveauEstime: "noir"
}

function InfoProfil(){
    return (
        <div id="infoProfil">
            <img id="PPUser" alt="Photo de profil de l'utilisateur" src="./img/PP_chat.png"></img>
            <div id="textInfoProfil">
                <h1 id="usernameProfil"> {infoProfilTest.username} </h1>
                <h2 id="Nom_prenom">
                    {infoProfilTest.name.toUpperCase()} {infoProfilTest.firstName}
                </h2>
                <h3>
                    <p>Niveau estimé : {infoProfilTest.niveauEstime}</p>
                    <p>Nombre de blocs validés : {infoProfilTest.nbrBlocsValides}</p>
                </h3>
            </div>
        </div>
    )
}

export default InfoProfil