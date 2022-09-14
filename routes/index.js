var express = require('express');
var router = express.Router();
var pokemonModel = require('../database/pokemons');

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
router.get('/', async function(req, res, next) {

  var poke = await pokemonModel.aggregate([{ $sample: { size: 1 } }])
  console.log("poke : ", poke)
  world = poke[0].frenchName
  image = `https://drive.google.com/uc?id=${poke[0].imgName}`
  console.log("world : ", world)

  // res.render('index', { title: 'Express', alphabet: alphabet, underscore: underscore, heart: heart });
  res.render('index', { title: 'Express', alphabet: alphabet, heart: heart, world:world, image: image });
});



router.get('/restart', function(req, res, next) {
  // Permet de relancer une partie
  lettresProposees = []
  heart = 5
  
  res.redirect('/');
});

module.exports = router;
