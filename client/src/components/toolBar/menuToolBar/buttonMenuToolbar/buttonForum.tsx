import { usePage } from "../../../../PageContext.tsx";

function ButtonForumPage(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("forum")}>Forum</button>
    )
}

export default ButtonForumPage