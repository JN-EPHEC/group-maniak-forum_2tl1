import ButtonConnectAccount from "./buttonCreateAccount/buttonConnectAccount"
import ButtonCreateAccount from "./buttonCreateAccount/buttonCreateAccount"
import ButtonMonProfil from "./buttonCreateAccount/buttonMonProfil"

function DisplayMenuCreateAccount(){
    return (
        <div id="extendedMenuAccount">
            <ButtonMonProfil></ButtonMonProfil>
            <ButtonCreateAccount></ButtonCreateAccount>
            <ButtonConnectAccount></ButtonConnectAccount>
        </div>
    )
}

export default DisplayMenuCreateAccount
