import { usePage } from "../../../../PageContext.tsx";

function ButtonWeekBoulderPage(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("blocSemaine")}>Bloc de la semaine</button>
    )
}

export default ButtonWeekBoulderPage