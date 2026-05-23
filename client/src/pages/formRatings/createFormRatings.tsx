import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import RatingBoulderByIdForm from "./ratingsBoulderByIdForm"

interface Props {
  boulderId: number
}

function CreateFormRatings({ boulderId }: Props){
    return(
        <div>
            <ToolBar></ToolBar>
            <RatingBoulderByIdForm boulderId={boulderId}></RatingBoulderByIdForm>
            <Footer></Footer>
        </div>
    )
}

export default CreateFormRatings