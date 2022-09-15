var express = require('express');
var router = express.Router();
var pokemonModel = require('../database/pokemons');
var poke
var image

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


/* GET home page. */
router.get('/', async function(req, res, next) {

  poke = await pokemonModel.aggregate([{ $sample: { size: 1 } }])
  console.log("poke : ", poke)
  world = poke[0].frenchName
  image = `https://drive.google.com/uc?id=${poke[0].imgName}`

  res.render('index', { title: 'Express', alphabet: alphabet, world:world, image: image });
});


router.get('/victoire', async function(req, res, next) {

  res.render('victoire', { title: 'Express', image: image, poke: poke[0] });
});

router.get('/restart', function(req, res, next) {
  // Permet de relancer une partie
  res.redirect('/');
});


module.exports = router;
