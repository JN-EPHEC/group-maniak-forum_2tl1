import ToolBar from "../../components/toolBar/toolbar"
import Footer from "../../components/footer/footer"
import GetBoulder from "../../hooks/getAreaGym/getBoulder";
import CreateFormAddingBoulder from "../../utils/makeFormCreateBoulder/makeFormCreateBoulder";

interface Props {
  gymId: string;
}

function CreationBoulderGymPage({ gymId }: Props){
    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const role = tokenUser?.role;

    const canAddBoulder = role === 1 || role === 3;

    return (
        <div id="boulderGym">
            <ToolBar></ToolBar>
            <GetBoulder gymId={gymId}/>
            {canAddBoulder && <CreateFormAddingBoulder />}
            <Footer></Footer>
        </div>
        
    )
}

export default CreationBoulderGymPage