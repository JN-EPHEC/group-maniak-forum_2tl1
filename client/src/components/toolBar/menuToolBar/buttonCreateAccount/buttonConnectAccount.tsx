import { usePage } from "../../../../PageContext"

function ButtonConnectAccount (){
    const setPage = usePage()
    return (
        <button className="btnBlue" id="buttonConnectAccount" onClick={() => setPage("pageConnexion")}> Connexion </button>
    )
}

export default ButtonConnectAccount