import { PostConnectUser } from "./postConnectUser"

function FormForConnexionToAccount(){
    return (
        <div>
            <form className="formConnexionAccount" onSubmit={PostConnectUser}>
                <label>Adresse e-mail : </label>
                <input name="emailForm" className="inputEmail" type="email"></input>
                <label>Mot de passe : </label>
                <input name="passwordForm" className="inputPassWD" type="password"></input>
                <button type="submit"> Se connecter </button>
            </form>
        </div>
    )
}
export default FormForConnexionToAccount