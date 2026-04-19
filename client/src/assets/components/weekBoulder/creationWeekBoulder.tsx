import WhiteManiakLogo from "../pageAccueil/logo_maniak_blanc";
import Footer from "../template/footer";
import ToolBar from "../template/toolbar";
import WeekBoulder from "./listeBlocsSemaine";

function CreationWeekBoulder(){
    return (
        <div>
            <ToolBar></ToolBar>
            <WhiteManiakLogo></WhiteManiakLogo>
            <WeekBoulder></WeekBoulder>
            <Footer></Footer>
        </div>
    )
}

export default CreationWeekBoulder