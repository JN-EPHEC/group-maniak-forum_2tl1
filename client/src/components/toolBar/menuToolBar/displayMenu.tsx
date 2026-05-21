import ButtonAboutUsPage from "./buttonMenuToolbar/buttonAboutUs.tsx";
import ButtonCreateBoulder from "./buttonMenuToolbar/buttonCreateBoulder.tsx";
import ButtonHomePage from "./buttonMenuToolbar/buttonHome.tsx";
import ButtonWeekBoulderPage from "./buttonMenuToolbar/buttonWeekBoulder.tsx";

function DisplayMenuInterface(){

    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const role = tokenUser?.role;

    const canAddBoulder = role === 1 || role === 3;


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" id="extendedMenu">
            <ButtonHomePage></ButtonHomePage>
            <ButtonWeekBoulderPage></ButtonWeekBoulderPage>
            <ButtonAboutUsPage></ButtonAboutUsPage>
            { canAddBoulder && <ButtonCreateBoulder></ButtonCreateBoulder>}
        </div>
    )
}
export default DisplayMenuInterface