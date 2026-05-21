import WhiteManiakLogo from "../../components/logoManiak/logo_maniak_blanc.tsx";
import ToolBar from "../../components/toolBar/toolbar.tsx";
import Footer from "../../components/footer/footer.tsx";
import CreateGymList from "../../hooks/getAreaGym/getAreaGyms.tsx";

function CreationPageAccueil(){
  
  return (
      <div>
        <ToolBar></ToolBar>
        <WhiteManiakLogo></WhiteManiakLogo> 
        <div style={{ position: "relative", zIndex: 1 }}>
          <CreateGymList></CreateGymList> 
        </div>
          
        <Footer></Footer>
      </div>
  );
}

export default CreationPageAccueil;