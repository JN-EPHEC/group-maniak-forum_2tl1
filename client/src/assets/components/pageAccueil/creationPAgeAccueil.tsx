import WhiteManiakLogo from "./logo_maniak_blanc"
import ToolBar from "../template/toolbar";
import Footer from "../template/footer";

function CreationPageAccueil(){
  
  console.log("aaaa")
  return (
      <div>
        <ToolBar></ToolBar>
        <WhiteManiakLogo></WhiteManiakLogo>   
        <Footer></Footer>
      </div>
);
}

export default CreationPageAccueil;