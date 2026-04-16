import { useState } from "react";
import DisplayMenuInterface from "./displayMenu";
import { usePage } from "../../../PageContext";

function ToolBar(){
    const[stateMenuDisplay, changeStateMenuDisplay] = useState(false)
    const setPage = usePage();
    return (
        <div id="toolBar">
            <button id="navigationButton" onClick={() => changeStateMenuDisplay(!stateMenuDisplay)}>Menu</button>
            <button id="accountButton" onClick={() => setPage("Profil")}>Profil</button>
            {stateMenuDisplay && <DisplayMenuInterface></DisplayMenuInterface>}
        </div>
    );
}

export default ToolBar