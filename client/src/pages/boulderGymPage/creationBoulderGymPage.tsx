import ToolBar from "../../components/toolBar/toolbar"
import Footer from "../../components/footer/footer"
import GetBoulder from "../../hooks/getAreaGym/getBoulder";
import CreateFormAddingBoulder from "../../utils/makeFormCreateBoulder/makeFormCreateBoulder";

interface Props {
  gymId: string;
}

function CreationBoulderGymPage({ gymId }: Props){
    return (
        <div id="boulderGym">
            <ToolBar></ToolBar>
            <GetBoulder gymId={gymId}/>
            <CreateFormAddingBoulder></CreateFormAddingBoulder>
            <Footer></Footer>
        </div>
        
    )
}

export default CreationBoulderGymPage   