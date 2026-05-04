import pp_chat from "../../../assets/img/PP_Chat.png"
import pp_chien from "../../../assets/img/PP_chien.png"
import { postCreateUser } from "./postCreateUser"

function FormForCreationAccount(){
    return (
        <form className="formCreateAccount" onSubmit={postCreateUser}>
            <div className="formCreateAccountFName">
                <label>Prénom</label>
                <input type="text" name="formFName" required />
            </div>

            <div className="formCreateAccountLName">
                <label>Nom de famille</label>
                <input type="text" name="formLName" required />
            </div>

            <div className="formCreateAccountPseudo">
                <label>Pseudo</label>
                <input type="text" name="formPseudo" required />
            </div>

            <div className="formCreateAccountEmail">
                <label>E-mail</label>
                <input type="email" name="formEmail" required />
            </div>

            <div className="formCreateAccountPassword">
                <label>Mot de passe</label>
                <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" name="formPassword" required />
            </div>

            <div className="formCreateAccountPictureId">
                <label>Photo de profil</label>
                <div className="ppChoices">
                <div className="ppOption">
                    <img src={pp_chat} />
                    <input type="radio" name="pick_PP" value="1" required />
                </div>
                <div className="ppOption">
                    <img src={pp_chien} />
                    <input type="radio" name="pick_PP" value="2" />
                </div>
                </div>
            </div>

            <button className="btnOrange" id="boutonSoumissionCreateAccount" type="submit">
                Créer mon profil
            </button>
        </form>
    )
}
export default FormForCreationAccount