function makeCardsGroup(dico){
    let cards = ""
    for(let i of dico){
        let status = "Oui"
        if(!i.agence){status = "Non"}
        cards += `<div class="card m-1 " style="width: 18rem;"><img class="img-thumbnail"src="${i.imageUrl}" class="card-img-top" alt="not real image"><div class="card-body">
                <h5 class="card-title">${i.nom} </h5>
                <p class="card-text"> Agence : ${i.agence}</p>
                <p class="card-text"> Actif : ${status}</p>
                <a onclick="showArtistes(${i.groupeId})" class="btn btn-primary">Voir les artistes</a>
                </div>
                </div>`
    }
    return cards
};
function makeCardsArtist(dico){
    let cards = ""
    for(let i of dico){
        let sexe = "Woman"
        if(i.sexe =="M"){sexe = "Man"}
        cards += `<div class="card m-1 " style="width: 18rem;"><img class="img-thumbnail"src="${i.imageUrl}" class="card-img-top" alt="not real image"><div class="card-body">
                <h5 class="card-title">${i.nickname} </h5>
                <p class="card-text"> Nationalité : ${i.nation} </p>
                <p class="card-text"> Sexe : ${sexe}</p>
                <p class="card-text"> Groupe : ${i.groupe.nom}</p>
                <a onclick="showGroupes(${i.groupeId})" class="btn btn-primary">Voir le groupe</a>
                </div>
                </div>`
    }
    return cards
};
async function showArtistes(groupeId) {
    try {
        let response;
        if (groupeId != 0) {
      response = await fetch(`http://localhost:3000/api/groupes/artistes/asgroupe/${groupeId}`);
    } else {
      response = await fetch(`http://localhost:3000/api/groupes/artistes/`);
    }

    const data = await response.json();
    document.getElementById("cardArtiste").hidden = false;
    document.getElementById("cardGroupes").hidden = true;
    document.getElementById("cardArtiste").innerHTML = makeCardsArtist(data);
  } catch (err) {
    console.error("Erreur :", err);
  }
};
async function showGroupes(groupeId) {
  try {
    let response;
    if (groupeId == 0) {
      response = await fetch(`http://localhost:3000/api/groupes`);
    } else {
      response = await fetch(`http://localhost:3000/api/groupes/${groupeId}`);
    }
    const data = await response.json();
    document.getElementById("cardArtiste").hidden = true;
    document.getElementById("cardGroupes").hidden = false;
    document.getElementById("cardGroupes").innerHTML = makeCardsGroup(data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}
function init(){
    document.getElementById("buttonGroupe").addEventListener('click',function(){showGroupes(0)});
    document.getElementById("buttonArtiste").addEventListener('click',function(){showArtistes(0)});
};

document.addEventListener("DOMContentLoaded",init)