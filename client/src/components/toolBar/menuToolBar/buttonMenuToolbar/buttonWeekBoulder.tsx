import { usePage } from "../../../../PageContext";

function ButtonWeekBoulderPage(){
    const setPage = usePage();
    return (
        <button className="btnBlue" onClick={() => setPage("blocSemaine")}>Bloc de la semaine</button>
    )
}

export default ButtonWeekBoulderPage