import CreationAboutUs from "./assets/components/aboutUsPage/creationAboutUs";
import CreationPageAccueil from "./assets/components/pageAccueil/creationPAgeAccueil";
import { useState } from "react";
import { PageContext } from "./PageContext";
import CreationPageMonProfil from "./assets/components/profilPage/creationPageMonProfil";
import CreationWeekBoulder from "./assets/components/weekBoulder/creationWeekBoulder";

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