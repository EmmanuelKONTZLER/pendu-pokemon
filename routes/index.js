var express = require('express');
var router = express.Router();

let alphabet = [
  {lettre: "A"},
  {lettre: "Z"},
  {lettre: "E"},
  {lettre: "R"},
  {lettre: "T"},
  {lettre: "Y"},
  {lettre: "U"},
  {lettre: "I"},
  {lettre: "O"},
  {lettre: "P"},
  {lettre: "Q"},
  {lettre: "S"},
  {lettre: "D"},
  {lettre: "F"},
  {lettre: "G"},
  {lettre: "H"},
  {lettre: "J"},
  {lettre: "K"},
  {lettre: "L"},
  {lettre: "M"},
  {lettre: "W"},
  {lettre: "X"},
  {lettre: "C"},
  {lettre: "V"},
  {lettre: "B"},
  {lettre: "N"},
]

let heart = 5
let lettresProposees = []
let word = "ELEPHANT"

var newWord = () => {
  word = "ELEPHANT"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // Route exécutée au début de partie et à chaque proposition de lettre

  // Sépare les lettres du mot mystère 1 à 1
  let splitedWord = word.split("")

  // Vérifie que la lettre proposée n'ait pas déjà été proposée
  let error = []
  console.log("req.query : ",req.query.lettre)

  /*
  if(req.query.lettre){
    if (lettresProposees.includes(req.query.lettre)) {
      // Si la lettre est déja proposée → Message erreur
      console.log("lettre deja proposée")
      error.push("Lettre déjà proposée")
    } else {
      // Si la lettre n'a pas déjà été proposée → On la 'push' dans le tableau des lettres proposées
      console.log("Nouvelle lettre")
      lettresProposees.push(req.query.lettre)
      if(!splitedWord.includes(req.query.lettre))
        {heart-=1}      
        console.log(heart)
    }
  } else {
    heart = 5
    lettresProposees = []
    newWord()
  }
  */


  // Affichage du mot mystère en bouclant les lettres 1 à 1
  let underscore = []
  for(var i=0 ; i<splitedWord.length ; i++) {
    console.log("lettre", splitedWord[i])
    // Si la lettre a été proposée, elle est affichée
    if (lettresProposees.includes(splitedWord[i])) {
      console.log("yes")
      underscore.push(splitedWord[i])
    // Sinon on affiche un '_'
    } else {
      console.log("no")
      underscore.push("_")
    }
  }
  console.log("underscore : ",underscore)
  res.render('index', { title: 'Express', alphabet: alphabet, underscore: underscore, heart: heart });
});



router.get('/restart', function(req, res, next) {
  // Permet de relancer une partie
  lettresProposees = []
  heart = 5
  
  res.redirect('/');
});

module.exports = router;
