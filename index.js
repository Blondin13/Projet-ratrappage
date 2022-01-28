let questions = [
  "Quesque le html ?",
  "Quesque le style.css ?",
  "Quesque le reponcive ?",
];
let reponse = [
  //tableau 0
  ["Un language balisage", "Le cousin du ulm", "Des lettre de l'alphabet"],
  //tableau 1
  ["Donne du style au html", "Une marque de vetement", "Une taille de soutien gorge"],
  //tableau 2
  ["moblie-friendly", "Une reponse en anglais", "Un fruit"],
];


// let divquestion et ma variable qui va dans mon document html chercher id "questions"
let divQuestion = document.getElementById("questions");
// let pQuestion et ma variable egal divQuestion qui a recuperer id question qui est ma div et on selection le "p" de ma div 
let pQuestion = divQuestion.querySelector("p");
    //-------------------------------------------------------------------------------------------------------------------------------------------------//
    // Je déclare ma variable: let divQuestion2 que j'integre dans mon HTLM ou jai créé une autre <div> avec l'(id= "question2) et un autre <p>
    let divQuestion2 = document.getElementById("questions2");
    // Je déclare ma variable: let pQuestion2 que j'integre dans le <p> de ma <div> avec l'(id= "question2")
    let pQuestion2 = divQuestion2.querySelector("p");
    //-------------------------------------------------------------------------------------------------------------------------------------------------//

//fonction nomfonction (paramettre)
function afficheQuestions() {
//fonction pour afficher se que j y note don ma variable pQuestion que j intergres avec le innerHTLM et que je retourne avec ma variable + [0] de mmon tableau
  pQuestion.innerHTML = "<strong> Voici ma question: </strong> <br>"; // * j'ai rajouter un strong *------------------------------------------------
  pQuestion.innerHTML = pQuestion.innerHTML + questions[0];
}


// mes variables pris avec un id
let divReponse = document.getElementById("reponses"); // cherche uniquement id
    //-------------------------------------------------------------------------------------------------------------------------------------------------//
    // je declare ma variables: let pText = que j integres dans mon <p> avec l'(id= "ptext") de mon HTML
    let pText = document.getElementById("ptext");// 
    //-------------------------------------------------------------------------------------------------------------------------------------------------//          
let pReponse0 = divReponse.querySelector("#reponse0");// cherche id qu on recupere dans le parametre avec #
let pReponse1 = divReponse.querySelector("#reponse1");
let pReponse2 = divReponse.querySelector("#reponse2");


function afficheResponses() {
// fonction pour afficher mes 3reponses que j integre dans mes <p> avec le innerHTML en lui idiquant chaque enplacement des reponses dans le tableau
    //-------------------------------------------------------------------------------------------------------------------------------------------------//
    //Dans ma fonction je recupère ma variable: let pText que j'intègre dans mon HTML avec le (innerHTML) et lui dit qu'il est = à "voici mes reponses:"
    pText.innerHTML = "<strong> Voici mes reponses: </strong> <br>";
    //-------------------------------------------------------------------------------------------------------------------------------------------------//        
  pReponse0.innerHTML = reponse[0][0];
  pReponse1.innerHTML = reponse[0][1];
  pReponse2.innerHTML = reponse[0][2] + "<br>" + "<br>";//*Ajout d'un autre <br> pour séparé de la (question2)*---------------------------------------
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


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Je créé ma fonction pour affiché ma question que j'appel: function afficheQuestion2()
function afficheQuestions2() {
  //Dans ma fonction je recupère ma variable: let pQuestion2 que j'intègre dans mon HTML avec le (innerHTML) et lui dit qu'il est = à "voici ma question:"
  pQuestion2.innerHTML = "<strong> Voici ma question 2: </strong> <br>";
  //Dans ma fonction je recupère ma variable: let pQuestion2 que j'intègre dans mon HTML avec le (innerHTML) et lui dit qu'il est = à pQuestion2.innerHTML + qestion[1] de mon tableau
  pQuestion2.innerHTML = pQuestion2.innerHTML + questions[1]; 
}
// J'affiche ma fontion
afficheQuestions2();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//