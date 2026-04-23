import ButtonAboutUsPage from "./buttonMenuToolbar/buttonAboutUs";
import ButtonForumPage from "./buttonMenuToolbar/buttonForum";
import ButtonHomePage from "./buttonMenuToolbar/buttonHome";
import ButtonWeekBoulderPage from "./buttonMenuToolbar/buttonWeekBoulder";

function DisplayMenuInterface(){
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white" id="extendedMenu">
            <ButtonHomePage></ButtonHomePage>
            <ButtonWeekBoulderPage></ButtonWeekBoulderPage>
            <ButtonForumPage></ButtonForumPage>
            <ButtonAboutUsPage></ButtonAboutUsPage>
        </div>
    )
}
export default DisplayMenuInterface