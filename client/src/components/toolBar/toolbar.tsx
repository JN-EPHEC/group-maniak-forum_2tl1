import { useState } from "react";
import DisplayMenuInterface from "./menuToolBar/displayMenu.tsx";
import DisplayMenuCreateAccount from "./menuToolBar/displayCreateAccount.tsx";

function ToolBar(){
    const[stateMenuDisplay, changeStateMenuDisplay] = useState(false)
    const[stateCreateAccount, changeStateCreateAccount] = useState(false)
    return (
        <div id="toolBar">
            <button id="navigationButton" onClick={() => changeStateMenuDisplay(!stateMenuDisplay)}>Menu</button>
            <button id="accountButton" onClick={() => changeStateCreateAccount(!stateCreateAccount)}>Profil</button>
            {stateMenuDisplay && <DisplayMenuInterface></DisplayMenuInterface>}
            {stateCreateAccount && <DisplayMenuCreateAccount></DisplayMenuCreateAccount>}
        </div>
    );
}

export default ToolBar