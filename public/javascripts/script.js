console.log("pouet");
let lettresProposees = [];
let word = "ELEPHANT";
let splitedWord = word.split("");
let underscore = "";

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

updateMotMystere();

for (var i = 1; i < document.getElementsByTagName("button").length; i++) {
  document
    .getElementsByTagName("button")
    [i].addEventListener("click", function () {
      lettresProposees.push(this.textContent);
      underscore = "";
      updateMotMystere();
    });
}


// var pouet = document.getElementById('A')
// var lettre = document.getElementsByTagName('button')
// console.log('pouet :', pouet)
// console.log('typeof pouet :', typeof pouet)

// console.log('lettre :', lettre[1].textContent)
// console.log('typeof lettre :', typeof lettre)
// console.log('Object.keys(lettre) :', lettre.item())
