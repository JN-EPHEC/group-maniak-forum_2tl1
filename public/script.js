function listMaker(dico){
    let list ="";
    for(let i of dico){
        list+= `<li class="list-group-item d-flex align-items-center">${i['prenom']} ${i['nom']} <button id='${i['id']}'type="button" class="btn btn-danger ms-auto" onclick="deleteUser(this)">X</button></li>`
    };
    return list
};

function listUp(dico){
    let area = document.getElementById("listUsers");
    area.innerHTML = listMaker(dico)
};
function addUser(form){
    let user = {
        "nom" : form.usernom.value,
        "prenom" : form.userprenom.value
    }
    postUser(user);
};

async function deleteUser(button){
    
    try{
        const response = await fetch(`http://localhost:3000/api/users/${button.id}`,{
        method: 'DELETE',
        });
        loadData();
    }
    catch(err) {
        console.error("Erreur :", err);
    };
    
};
async function loadData() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    listUp(data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}
async function postUser(user) {
    try {
        const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        });
        loadData();
    } catch (err) {
    console.error("Erreur :", err);
  }

};

function init(){
    document.getElementById('addUser').addEventListener('submit',function(e){
        e.preventDefault();
        let form = e.target;
        addUser(form);
    });
    
    loadData();
    console.log('JS up ')

};
document.addEventListener("DOMContentLoaded",init);
