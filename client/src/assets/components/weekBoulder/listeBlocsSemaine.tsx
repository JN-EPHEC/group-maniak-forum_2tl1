const weekBoulder1 = {
    idBoulder: 45, 
    nomBoulder: "la Dalleuh",
    difficulte: "noire",
    description: "Blocs de type dalle qui requiert assez de précision pour la pose de pied",
    ouvreur: "Matito",
    area: "La dalle",
}
const weekBoulder2 = {
    idBoulder: 46, 
    nomBoulder: "Le Toit Penché",
    difficulte: "rouge",
    description: "Bloc de type dévers qui demande une bonne gestion de la force et des hanches",
    ouvreur: "Sarah",
    area: "Le toit",
}

const weekBoulder3 = {
    idBoulder: 47, 
    nomBoulder: "La Fissure",
    difficulte: "bleue",
    description: "Bloc technique sur petites prises qui nécessite une bonne lecture du mur",
    ouvreur: "Bastien",
    area: "Le pan",
}

const weekBoulder4 = {
    idBoulder: 48, 
    nomBoulder: "Le Bombé",
    difficulte: "jaune",
    description: "Bloc d'équilibre sur volumes arrondis, idéal pour travailler le centre de gravité",
    ouvreur: "Manu",
    area: "Le gorille",
}



function WeekBoulder(){
    return (
        <ul id="blocsDeLaSemaine">
            <li className="boulderCard">
                <p className="boulderCard_nom">{weekBoulder1.nomBoulder}</p>
                <p className="boulderCard_difficulte">{weekBoulder1.difficulte}</p>
                <p className="boulderCard_description">{weekBoulder1.description}</p>
                <div className="boulderCard_footer">
                    <p className="boulderCard_ouvreur">🧗 {weekBoulder1.ouvreur}</p>
                    <p className="boulderCard_area">📍 {weekBoulder1.area}</p>
                </div>
            </li>
            <li className="boulderCard">
                <p className="boulderCard_nom">{weekBoulder2.nomBoulder}</p>
                <p className="boulderCard_difficulte">{weekBoulder2.difficulte}</p>
                <p className="boulderCard_description">{weekBoulder2.description}</p>
                <div className="boulderCard_footer">
                    <p className="boulderCard_ouvreur">🧗 {weekBoulder2.ouvreur}</p>
                    <p className="boulderCard_area">📍 {weekBoulder2.area}</p>
                </div>
            </li>
            <li className="boulderCard">
                <p className="boulderCard_nom">{weekBoulder3.nomBoulder}</p>
                <p className="boulderCard_difficulte">{weekBoulder3.difficulte}</p>
                <p className="boulderCard_description">{weekBoulder3.description}</p>
                <div className="boulderCard_footer">
                    <p className="boulderCard_ouvreur">🧗 {weekBoulder3.ouvreur}</p>
                    <p className="boulderCard_area">📍 {weekBoulder3.area}</p>
                </div>
            </li>
            <li className="boulderCard">
                <p className="boulderCard_nom">{weekBoulder4.nomBoulder}</p>
                <p className="boulderCard_difficulte">{weekBoulder4.difficulte}</p>
                <p className="boulderCard_description">{weekBoulder4.description}</p>
                <div className="boulderCard_footer">
                    <p className="boulderCard_ouvreur">🧗 {weekBoulder4.ouvreur}</p>
                    <p className="boulderCard_area">📍 {weekBoulder4.area}</p>
                </div>
            </li>
        </ul>
    );
};

export default WeekBoulder
