import { usePage } from "../../../PageContext"

function DisplayMenuInterface(){
    const setPage = usePage();
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" id="extendedMenu">
            <button className="btnBlue" onClick={() => setPage("home")}> Page d'accueil </button>
            <button className="btnBlue" onClick={() => setPage("blocSemaine")}>Bloc de la semaine</button>
            <button className="btnBlue" onClick={() => setPage("forum")}>Forum</button>
            <button className="btnBlue" onClick={() => setPage("aboutUs")}>A propos</button>
        </div>
    )
}
export default DisplayMenuInterface