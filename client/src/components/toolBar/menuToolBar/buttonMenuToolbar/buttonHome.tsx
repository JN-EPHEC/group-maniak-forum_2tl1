import { usePage } from "../../../../PageContext.tsx";

function ButtonHomePage(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("home")}> Page d'accueil </button>
    )
}

export default ButtonHomePage