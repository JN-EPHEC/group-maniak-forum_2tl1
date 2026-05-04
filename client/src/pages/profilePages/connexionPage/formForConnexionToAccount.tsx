import { PostConnectUser } from "./postConnectUser"

function FormForConnexionToAccount(){
    return (
        <div>
            <form className="formConnexionAccount" onSubmit={PostConnectUser}>
                <label>Identifiant : </label>
                <input name="emailForm" className="inputIdentifier" type="text"></input>
                <label>Mot de passe : </label>
                <input name="passwordForm" className="inputPassWD" type="password"></input>
                <button type="submit"> Se connecter </button>
            </form>
        </div>
    )
}
export default FormForConnexionToAccount