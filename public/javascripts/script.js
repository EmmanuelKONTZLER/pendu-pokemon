console.log('mot : ',document.getElementById("lemot").dataset.world)


// --------------------
// Définition des variables
// --------------------
let lettresProposees = ["-", "."];
let lettresAffichées = []
let word = document.getElementById("lemot").dataset.world.toUpperCase();
let splitedWord = word.split("");
let underscore = "";
let heart = 5
let victoire = false
let defaite = false


// --------------------
// Définition des fonctions
// --------------------


/* Affiche et actualise l'affichage du nombre de coeurs */
var updateHeart = () => {
  console.log('welcome in function updateHeart()')
var heartcontener = document.getElementById('heartcontener')
heartcontener.innerHTML = 'Vies : '
  for(var i=0 ; i<heart ; i++){
    var img = new Image(50, 50);
      img.src = '/images/coeur.png';
      // img.style.width = 50
      heartcontener.appendChild(img);
  }
}

/* Affiche les lettres proposées */
var displayLetters = () =>{
  console.log('welcome in function displayLetters()')
  var lettre = document.getElementById('lettresaffichées')
  lettre.innerHTML = ""
  var temp = ""
  for(var i=0 ; i<lettresAffichées.length ; i++){
    temp = temp + lettresAffichées[i] + " "
  }
  console.log('temp : ', temp)
  lettre.innerHTML = temp
}

/* Affiche le mot mystère en clair et/ou en _ */
var updateMotMystere = () => {
  console.log('welcome in function updateMotMystere()')
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
  updateHeart()
};


/* Vérifie la victoire */
var victoireFunction = () => {
  if (!underscore.includes('_')){
    victoire = true
    fetch('/victoire', {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => {
      console.log('response : ', response)
      if (!response.redirected) {
        console.log("reddirect")
        window.location.href = response.url;
    }
    })
  }
}

var defaiteFunction = () => {
  console.log("heart3 : ", heart)
  if (heart == 0){
    defaite = true
    fetch('/defaite', {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => {
      console.log('response : ', response)
      if (!response.redirected) {
        console.log("reddirect")
        window.location.href = response.url;
    }
    })
  }
}


// --------------------
// Exécution des fonctions
// --------------------

updateHeart();
updateMotMystere();
displayLetters()

for (var i = 1; i < document.getElementsByTagName("button").length; i++) {
  document
    .getElementsByTagName("button")[i].addEventListener("click", function () {
      console.log("lettre : ", this.textContent)
      console.log("lettresProposées.includes(this.textContent) : ", lettresProposees.includes(this.textContent))

      if (!lettresProposees.includes(this.textContent)){
        console.log("good")
        lettresProposees.push(this.textContent);
        lettresAffichées.push(this.textContent)
        underscore = "";
        updateMotMystere();
        victoireFunction();
        displayLetters()
        console.log('lettre dans le mot ? : ', word.includes(this.textContent))
        if (!word.includes(this.textContent)) {
          console.log("heart1 : ", heart)
          heart = heart -1
          console.log("heart2 : ", heart)
          updateHeart()
          defaiteFunction()
        }
      }


    });
}

