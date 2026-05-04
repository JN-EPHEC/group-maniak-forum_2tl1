import ToolBar from "../../../components/toolBar/toolbar";
import Footer from "../../../components/footer/footer";
import FormForConnexionToAccount from "./formForConnexionToAccount";

function CreatePageConnexion(){
    return (
        <div>
            <ToolBar></ToolBar>
            <FormForConnexionToAccount></FormForConnexionToAccount>
            <Footer></Footer>
        </div>
        
    )
}

export default CreatePageConnexion