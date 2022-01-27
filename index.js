let questions = [
  "quesque le html ?",
  "quesque le style.css ?",
  "quesque le reponcive ?",
];
let reponse = [
  //tableau 0
  ["language balisage", "cousin du ulm", "des lettre de l'alphabet"],
  //tableau 1
  ["donne du style au html", "marque de vetement", "taille de soutien gorge"],
  //tableau 2
  ["moblie-friendly", "une reponse en anglais", "un fruit"],
];

// let divquestion et ma variable qui va dans mon document html chercher id "question"
let divQuestion = document.getElementById("questions");
// let pQuestion et ma variable egal divQuestion qui a recuperer id question qui est ma div et on selection le "p" de ma div 
let pQuestion = divQuestion.querySelector("p");

//fonction nomfonction (paramettre)
function afficheQuestions() {
//fonction pour afficher se que j y note don ma variable pQuestion que j intergres avec le innerHTLM et que je retourne avec ma variable + [0] de mmon tableau
  pQuestion.innerHTML = "voici ma question <br>";
  pQuestion.innerHTML = pQuestion.innerHTML + questions[0];
}

// mes variables pris avec un id
let divReponse = document.getElementById("reponses"); // cherche uniquement id
let pReponse0 = divReponse.querySelector("#reponse0");// cherche id qu on recupere dans le parametre avec #
let pReponse1 = divReponse.querySelector("#reponse1");
let pReponse2 = divReponse.querySelector("#reponse2");


function afficheResponses() {
// fonction pour afficher mes 3reponses que j integre dans mes <p> avec le innerHTML en lui idiquant chaque enplacement des reponses dans le tableau
  pReponse0.innerHTML = reponse[0][0];
  pReponse1.innerHTML = reponse[0][1];
  pReponse2.innerHTML = reponse[0][2];
}


function verifieReponse(reponseThis) {
// fonction qui verifie si ma reponses et bonne 
  if (reponseThis.innerHTML == reponse[0][0]) {
  // si (<p>.innerHTML et egal a la reponse 0 du tableau 0)
    console.log("gagner");
  //alors on lui dit qu il a gagner
  } else {
  //sinon
    console.log("perdu");
  //on lui dit qu il as perdu
  }
}

//appel ma fonction qui joueras le code demander dedans
afficheQuestions();

//appel ma fonction qui joueras le code demander dedans
afficheResponses();
