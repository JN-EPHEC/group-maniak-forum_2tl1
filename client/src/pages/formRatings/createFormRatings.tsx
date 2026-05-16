import Footer from "../../components/footer/footer"
import ToolBar from "../../components/toolBar/toolbar"
import RatingBoulderByIdForm from "./ratingsBoulderByIdForm"

interface Props {
  boulderId: number;
  difficultyId: number,
}

function CreateFormRatings({ boulderId, difficultyId }: Props){
    return(
        <div>
            <ToolBar></ToolBar>
            <RatingBoulderByIdForm boulderId={boulderId} difficultyId={difficultyId}></RatingBoulderByIdForm>
            <Footer></Footer>
        </div>
    )
}

export default CreateFormRatings