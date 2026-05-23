import { usePage } from "../../../../PageContext.tsx";

function ButtonCreateBoulder(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("createBoulder")}> Créer un bloc </button>
    )
}

export default ButtonCreateBoulder