import WhiteManiakLogo from "../../components/logoManiak/logo_maniak_blanc.tsx";
import ToolBar from "../../components/toolBar/toolbar.tsx";
import Footer from "../../components/footer/footer.tsx";
import CreateGymList from "../../hooks/getAreaGym/getAreaGyms.tsx";

function CreationPageAccueil(){
  
  console.log("aaaa")
  return (
      <div>
        <ToolBar></ToolBar>
        <WhiteManiakLogo></WhiteManiakLogo> 
        <CreateGymList></CreateGymList>  
        <Footer></Footer>
      </div>
  );
}

export default CreationPageAccueil;