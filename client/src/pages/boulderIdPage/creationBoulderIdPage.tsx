import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import GetBoulderById from "../../hooks/getBoulderById"

function CreationBoulderById({ boulderId }: { boulderId: number }) {

    return (
        <div id="boulderById">
            <ToolBar />
            <GetBoulderById
                boulderId={boulderId}
            />
            <Footer />
        </div>
    )
}

export default CreationBoulderById