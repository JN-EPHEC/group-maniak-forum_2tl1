import { usePage } from "../../../PageContext"
import { PostConnectUser } from "./postConnectUser"


function FormForConnexionToAccount(){
    const setPage = usePage()
    return (
        <div>
            <form className="formConnexionAccount" onSubmit={(e) => PostConnectUser(e, setPage)}>
                <label>Identifiant : </label>
                <input name="emailForm" className="inputIdentifier" type="text"></input>
                <label>Mot de passe : </label>
                <input name="passwordForm" className="inputPassWD" type="password"></input>
                <div id="erreurFormConnect"></div>
                <button type="submit"> Se connecter </button>
            </form>
        </div>
    )
}
export default FormForConnexionToAccount