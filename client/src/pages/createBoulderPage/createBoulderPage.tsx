import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import CreateFormAddingBoulder from "./makeFormCreateBoulder"

function CreateBoulderPage(){
    return (
        <div>
            <ToolBar></ToolBar>
            <CreateFormAddingBoulder></CreateFormAddingBoulder>
            <Footer></Footer>
        </div>
    )
}

export default CreateBoulderPage