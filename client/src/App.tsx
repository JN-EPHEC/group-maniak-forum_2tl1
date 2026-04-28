import CreationAboutUs from "./pages/aboutUsPage/creationAboutUs.tsx";
import CreationPageAccueil from "./pages/homePage/creationPAgeAccueil.tsx";
import { useState } from "react";
import { PageContext } from "./PageContext.tsx";
import CreationPageMonProfil from "./pages/profilePage/creationPageMonProfil.tsx";
import CreationWeekBoulder from "./pages/weekBoulderPage/creationWeekBoulder.tsx";
import CreationBoulderGymPage from "./pages/boulderGymPage/creationBoulderGymPage.tsx";

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
  if(page.startsWith("boulderPage")) {
    const gymId = page.split("-")[1];
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationBoulderGymPage gymId={gymId} />
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