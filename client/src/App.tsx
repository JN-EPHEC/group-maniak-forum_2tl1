import CreationAboutUs from "./pages/aboutUsPage/creationAboutUs.tsx";
import CreationPageAccueil from "./pages/homePage/creationPAgeAccueil.tsx";
import { useState } from "react";
import { PageContext } from "./PageContext.tsx";
import CreationWeekBoulder from "./pages/weekBoulderPage/creationWeekBoulder.tsx";
import CreationBoulderGymPage from "./pages/boulderGymPage/creationBoulderGymPage.tsx";
import CreationBoulderById from "./pages/boulderIdPage/creationBoulderIdPage.tsx";
import CreatePageConnexion from "./pages/profilePages/connexionPage/creationPageConnexion.tsx";
import CreationPageCreateAccount from "./pages/profilePages/createAccountPage/creationPageCreateAccount.tsx";
import CreationPageMonProfil from "./pages/profilePages/myProfilPage/creationPageMyProfil.tsx";

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
  if(page.startsWith("boulderId")) {
    const boulderId = page.split("-")[1];
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationBoulderById boulderId={boulderId} />
        </PageContext.Provider>
      </div>
    );
  }
  if(page === "pageConnexion") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreatePageConnexion>
            
          </CreatePageConnexion>
        </PageContext.Provider>
        
      </div>
    );
  }
  if(page === "pageProfil") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationPageMonProfil>
            
          </CreationPageMonProfil>
        </PageContext.Provider>
        
      </div>
    );
  }
  if(page === "pageCreationCompte") {
    return (
      <div>
        <PageContext.Provider value={setPage}>
          <CreationPageCreateAccount>
            
          </CreationPageCreateAccount>
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