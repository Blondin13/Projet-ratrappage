//----------------------------------------------- Les Tableaux ------------------------------------------------------------------------

// Je déclare ma variable: let questions qui seras = a mon tableau déclaré avec []; et ses valeurs serons ["0", "1", "2",]; que l'on sépare avec des , un tableau se compte en commençant de "0", et non de "1",
let questions = [
 // Valeur"0",
  "Quesque le html ?",
 // Valeur"1",
  "Quesque le style.css ?",
 // Valeur"2",
  "Quesque le reponcive ?",
];

// Je déclare ma variable: let responses qui seras = a mon tableau déclaré avec []; qui contient lui même 3 autres tableaux [[0], [1], [2],]; qui seront ses valeurs que l'on sépare avec des ,
let reponses = [
//[Tableau[0] est la Valeur0 de la variables: let reponses               ],
// "      Valeur0       ", "     Valeur1    ", "        Valeur2         "   Sont les Valeur du Tableau[0], 
  ["Un language de balisage", "Le cousin du ulm", "Des lettre de l'alphabet"],
//[Tableau[1] est la Valeur1 de la variables: let reponses                          ],
// "       Valeur0        ", "        Valeur1       ", "          Valeur2          "   Sont les Valeur du Tableau[1],
  ["Donne du style au html", "Une marque de vetement", "Une taille de soutien gorge"],
//[Tableau[2] est la Valeur2 de la variables: let reponses],
// "    Valeur0    ", "        Valeur1       ", " Valeur2"   Sont les Valeur du Tableau[2],
  ["moblie-friendly", "Une reponse en anglais", "Un fruit"],
];

//----------------------------------------------- Questions ---------------------------------------------------------------------------

// Je déclare ma variable: let divQuestion qui seras = à la <div> avec l'(id= "question") de mon index.html
let divQuestion = document.getElementById("question");
// Je déclare ma variable: let pQuestion qui me serviras a integré la Valeur"0" de ma variable: let questions = ["0", "1", "2",]; dans le <p> de ma <div> avec l'(id= "question") de mon index.html
let pQuestion = divQuestion.querySelector("p");
// Je déclare ma variable: let divQuestion2 qui seras = à la <div> avec l'(id= "question2) de mon index.html
let divQuestion2 = document.getElementById("question2");
// Je déclare ma variable: let pQuestion2 qui me serviras a integré la Valeur"1" de ma variable: let questions = ["0", "1", "2",]; dans le <p> de ma <div> avec l'(id= "question2") de mon index.html
let pQuestion2 = divQuestion2.querySelector("p");


//Fonction pour afficher la Valeur"0" de ma variable: let questions = ["0", "1", "2",]; que j'afficherais grace a ma variable: let pQuestion
//function nomFonction(paramettre){
function afficheQuestion(){
  //Dans ma fonction je pose ma variable: let pQuestion que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = à "VOICI MA QUESTION:";
  pQuestion.innerHTML = "<strong> VOICI MA QUESTION: </strong> <br>"; // j'ai rajouter un <strong> pour rendre le texte plus gras et un <br> pour allez a la ligne
  //Dans ma fonction je pose ma variable: let pQuestion que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = à pQuestion.innerHTML + ma variable: qestions[] avec ça Valeur"0";
  pQuestion.innerHTML = pQuestion.innerHTML + questions[0];
}

//------------------------------------------------ Réponses ---------------------------------------------------------------------------

// Je déclare ma variable: let divReponse qui seras = à la <div> avec l'(id= "reponses") de mon index.html
let divReponse = document.getElementById("reponses");
// je declare ma variables: let pText qui seras = à mon <p> avec l'(id= "ptext") de mon index.html
let pText = document.getElementById("ptext");
// Je déclare ma variable: let pReponse0 qui seras = à mon <p> avec l'(id= "reponses0") de mon index.html
let pReponse0 = divReponse.querySelector("#reponse0");
// Je déclare ma variable: let pReponse1 qui seras = à mon <p> avec l'(id= "reponses1") de mon index.html
let pReponse1 = divReponse.querySelector("#reponse1");
// Je déclare ma variable: let pReponse2 qui seras = à mon <p> avec l'(id= "reponses2") de mon index.html
let pReponse2 = divReponse.querySelector("#reponse2");

//Fonction pour afficher les Valeurs"0", "1", "2", du Tableau[0], déclarer avec ma variable: let reponses = [[  Tableau"0"  ],[  Tableau"1"  ],[  Tableau"2"  ]]; que j'afficherais grace a mes variables: let pReponse0; let pReponse1; let pReponse2;
//function nomFonction(paramettre){                                                                         [["0", "1", "2",],["0", "1", "2",],["0", "1", "2",]];
function afficheResponses(){
    
  //Dans ma fonction je pose ma variable: let pText que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = à "VOICI MES REPONSES:";
  pText.innerHTML = "<strong> VOICI MES REPONSES: </strong> <br>";  
  //Dans ma fonction je pose ma variable: let pReponse0 que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = ma variable: responses avec son Tableau[0] et ça Valeur[0];
  pReponse0.innerHTML = reponses[0][0];
  //Dans ma fonction je pose ma variable: let pReponse1 que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = ma variable: responses avec son Tableau[0] et ça Valeur[1];
  pReponse1.innerHTML = reponses[0][1];
  //Dans ma fonction je pose ma variable: let pReponse2 que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = ma variable: responses avec son Tableau[0] et ça Valeur[2]; + deux <br> retours a la ligne pour séparé de la (question2)
  pReponse2.innerHTML = reponses[0][2] + "<br>" + "<br>";
}

//-------------------------------------------  a continuer ----------------------------------------------------------------------------

function verifieReponse(reponseThis){
// fonction qui verifie si ma reponses et bonne 
  if (reponseThis.innerHTML == reponses[0][0]) {
  // si (<p>.innerHTML et egal a la reponse 0 du tableau 0)
    console.log("gagner");
  //alors on lui dit qu il a gagner
  } else {
  //sinon
    console.log("perdu");
  //on lui dit qu il as perdu
  }
}

//Appel ma fonction qui joueras le code demandé dedans
afficheQuestion();

//Appel ma fonction qui joueras le code demandé dedans
afficheResponses();


//----------------------------------------------- Questions2 --------------------------------------------------------------------------

//Fonction pour afficher la Valeur"1" de ma variable: let questions = ["0", "1", "2",]; que j'afficherais grace a ma variable: let pQuestion2
//function nomFonction(paramettre){
function afficheQuestion2() {
  //Dans ma fonction je pose ma variable: let pQuestion2 que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = à "VOICI MA QUESTION 2:";
  pQuestion2.innerHTML = "<strong> VOICI MA QUESTION 2: </strong> <br>";
  //Dans ma fonction je pose ma variable: let pQuestion que j'intègre dans mon index.html avec le (.innerHTML) et lui dit qu'il seras = à pQuestion2.innerHTML + ma variable: qestions[] avec ça Valeur"1"
  pQuestion2.innerHTML = pQuestion2.innerHTML + questions[1]; 
}

//Appel ma fonction qui joueras le code demandé dedans
afficheQuestion2();

//-------------------------------------------------------------------------------------------------------------------------------------