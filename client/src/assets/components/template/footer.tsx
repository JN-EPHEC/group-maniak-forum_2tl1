import { usePage } from "../../../PageContext"

function Footer(){
   const setPage = usePage();
   return (
    <div id="footer">
        <div id="copyrightManiakFooter">
            ©Maniak
        </div>
        <div id="copyrightTextFooter">
            Ce site web a été réalisé par JUNION Benjamin et DECREME Matthieu. {"\n"}
            Toute les autorisations nécessaire aux droits d'auteur ont été obtenue.
        </div>
        <button id="aboutUs" onClick={() => setPage("aboutUs")}> A propos </button>
    </div>
   )    
}

export default Footer