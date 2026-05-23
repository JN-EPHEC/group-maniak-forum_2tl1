import { usePage } from "../../../../PageContext";

function ButtonDisconnectUser(){
    const setPage = usePage()
    return (
        <button className="btnBlue" id="buttonMyProfile" onClick={() => {
            localStorage.clear();
            setPage("home");
        }}> Déconnexion </button>
    )
}

export default ButtonDisconnectUser