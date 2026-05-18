import ButtonAboutUsPage from "./buttonMenuToolbar/buttonAboutUs.tsx";
import ButtonHomePage from "./buttonMenuToolbar/buttonHome.tsx";
import ButtonWeekBoulderPage from "./buttonMenuToolbar/buttonWeekBoulder.tsx";

function DisplayMenuInterface(){
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" id="extendedMenu">
            <ButtonHomePage></ButtonHomePage>
            <ButtonWeekBoulderPage></ButtonWeekBoulderPage>
            <ButtonAboutUsPage></ButtonAboutUsPage>
        </div>
    )
}
export default DisplayMenuInterface