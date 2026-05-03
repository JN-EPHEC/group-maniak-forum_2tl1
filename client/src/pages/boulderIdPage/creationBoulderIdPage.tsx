import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import GetBoulderById from "../../hooks/getBoulderById"

interface Props {
  boulderId: string;
}

function CreationBoulderById({ boulderId }: Props){
    return (
        <div id="boulderById">
            <ToolBar></ToolBar>
            <GetBoulderById  boulderId={boulderId}></GetBoulderById>
            <Footer></Footer>
        </div>
    )
}

export default CreationBoulderById