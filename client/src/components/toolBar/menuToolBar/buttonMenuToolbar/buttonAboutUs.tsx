import { usePage } from "../../../../PageContext";

function ButtonAboutUsPage(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("aboutUs")}>A propos</button>
    )
}

export default ButtonAboutUsPage