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
import CreateFormRatings from "./pages/formRatings/createFormRatings.tsx";

function App(){
  const [page, setPage] = useState("home");

  if(page === "aboutUs") {
    return (
      <PageContext.Provider value={setPage}>
        <CreationAboutUs />
      </PageContext.Provider>
    );
  }
  if(page === "blocSemaine") {
    return (
      <PageContext.Provider value={setPage}>
        <CreationWeekBoulder />
      </PageContext.Provider>
    );
  }
  if(page.startsWith("boulderPage")) {
    const gymId = page.split("-")[1];
    return (
      <PageContext.Provider value={setPage}>
        <CreationBoulderGymPage gymId={gymId} />
      </PageContext.Provider>
    );
  }
  if(page.startsWith("boulderId")) {
    const boulderId = Number(page.split("-")[1]);
    return (
      <PageContext.Provider value={setPage}>
        <CreationBoulderById boulderId={boulderId} />
      </PageContext.Provider>
    );
  }
  if(page === "pageConnexion") {
    return (
      <PageContext.Provider value={setPage}>
        <CreatePageConnexion />
      </PageContext.Provider>
    );
  }
  if(page.startsWith("formRatings")) {

    const parts = page.split("-");
    const boulderId = Number(parts[1]);
    return (
      <PageContext.Provider value={setPage}>
        <CreateFormRatings boulderId={boulderId}  />
      </PageContext.Provider>

    );
  }
  if(page === "pageProfil") {
    return (
      <PageContext.Provider value={setPage}>
        <CreationPageMonProfil />
      </PageContext.Provider>
    );
  }
  if(page === "pageCreationCompte") {
    return (
      <PageContext.Provider value={setPage}>
        <CreationPageCreateAccount />
      </PageContext.Provider>
    );
  }

  return (
    <PageContext.Provider value={setPage}>
      <CreationPageAccueil />
    </PageContext.Provider>
  );
}

export default App;