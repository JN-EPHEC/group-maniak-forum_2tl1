import WhiteManiakLogo from "../../components/logoManiak/logo_maniak_blanc.tsx";
import Footer from "../../components/footer/footer.tsx";
import ToolBar from "../../components/toolBar/toolbar.tsx";
import WeekBoulder from "./listeBlocsSemaine.tsx";

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