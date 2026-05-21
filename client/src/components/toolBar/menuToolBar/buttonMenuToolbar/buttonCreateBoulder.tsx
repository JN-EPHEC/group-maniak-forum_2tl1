import { usePage } from "../../../../PageContext.tsx";

function ButtonCreateBoulder(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("home")}> Créer un bloc </button>
    )
}

export default ButtonCreateBoulder