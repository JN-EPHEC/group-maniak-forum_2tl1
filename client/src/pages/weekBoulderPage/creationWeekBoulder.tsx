import WhiteManiakLogo from "../../components/logoManiak/logo_maniak_blanc";
import Footer from "../../components/footer/footer";
import ToolBar from "../../components/toolBar/toolbar";
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