import { usePage } from "../../../../PageContext"

function ButtonMonProfil(){
    const setPage = usePage()
    return (
        <button className="btnBlue" id="buttonMyProfile" onClick={() => setPage("pageProfil")}> Mon profil </button>
    )
}

export default ButtonMonProfil