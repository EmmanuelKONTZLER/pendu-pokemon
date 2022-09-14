// --------------------
// Définition des variables
// --------------------
let lettresProposees = [];
let word = "ELEPHANT";
let splitedWord = word.split("");
let underscore = "";


// --------------------
// Définition des fonctions
// --------------------

/* Affiche le mot mystère en clair et/ou en _ */
var updateMotMystere = () => {
  for (var i = 0; i < splitedWord.length; i++) {
    // Si la lettre a été proposée, elle est affichée
    if (lettresProposees.includes(splitedWord[i])) {
      underscore = underscore + splitedWord[i];
    // Sinon on affiche un '_'
    } else {
      underscore = underscore + "_ ";
    }
  }
  document.getElementById("lemot").textContent = underscore;
};



// --------------------
// Exécution des fonctions
// --------------------

updateMotMystere();

for (var i = 1; i < document.getElementsByTagName("button").length; i++) {
  document
    .getElementsByTagName("button")[i].addEventListener("click", function () {
      lettresProposees.push(this.textContent);
      underscore = "";
      updateMotMystere();
    });
}
