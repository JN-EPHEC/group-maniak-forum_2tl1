import ButtonConnectAccount from "./buttonCreateAccount/buttonConnectAccount"
import ButtonCreateAccount from "./buttonCreateAccount/buttonCreateAccount"
import ButtonDisconnectUser from "./buttonCreateAccount/buttonDisconnect"
import ButtonMonProfil from "./buttonCreateAccount/buttonMonProfil"

function DisplayMenuCreateAccount(){
    return (
        <div id="extendedMenuAccount">
            <ButtonMonProfil></ButtonMonProfil>
            <ButtonCreateAccount></ButtonCreateAccount>
            <ButtonConnectAccount></ButtonConnectAccount>
            <ButtonDisconnectUser></ButtonDisconnectUser>
        </div>
    )
}

export default DisplayMenuCreateAccount
