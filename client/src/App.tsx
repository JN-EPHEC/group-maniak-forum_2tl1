import CreationAboutUs from "./pages/aboutUsPage/creationAboutUs";
import CreationPageAccueil from "./pages/homePage/creationPAgeAccueil";
import { useState } from "react";
import { PageContext } from "./PageContext";
import CreationPageMonProfil from "./pages/profilePage/creationPageMonProfil";
import CreationWeekBoulder from "./pages/weekBoulderPage/creationWeekBoulder";

function App(){
  const [page, setPage] = useState("home");
  if(page === "aboutUs") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationAboutUs>
          
          </CreationAboutUs>
        </PageContext.Provider>
        
      </div>
    );
  }
  if(page === "Profil") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationPageMonProfil>
          
          </CreationPageMonProfil>
        </PageContext.Provider>
        
      </div>
    );
  }
  if(page === "blocSemaine") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationWeekBoulder>
          
          </CreationWeekBoulder>
        </PageContext.Provider>
        
      </div>
    );
  }
  return (
    <div>
      <PageContext.Provider value={setPage}>
        <CreationPageAccueil>
        </CreationPageAccueil>
      </PageContext.Provider>
      
    </div>
  )
  
}

export default App;