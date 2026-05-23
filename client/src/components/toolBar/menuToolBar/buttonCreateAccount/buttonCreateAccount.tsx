import { usePage } from "../../../../PageContext"

function ButtonCreateAccount(){
    const setPage = usePage()
    return (
        
        <button className="btnBlue" id="buttonCreateAccount" onClick={() => setPage("pageCreationCompte")}>Créer mon compte</button>
    )
}

export default ButtonCreateAccount