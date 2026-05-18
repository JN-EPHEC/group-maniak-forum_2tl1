import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import GetBoulderById from "../../hooks/getBoulderById"
import PatchBoulderId from "./buttonPatchBoulder";

function CreationBoulderById({ boulderId }: { boulderId: number }) {

    const tokenUser = JSON.parse(localStorage.getItem("tokenUser") ?? "null");
    const role = tokenUser?.role;

    const canAddBoulder = role === 1 || role === 3;

    return (
        <div id="boulderById">
            <ToolBar />
            <GetBoulderById
                boulderId={boulderId}
                patchForm={canAddBoulder ? <PatchBoulderId boulderId={boulderId} /> : undefined}
            />
            <Footer />
        </div>
    )
}

export default CreationBoulderById