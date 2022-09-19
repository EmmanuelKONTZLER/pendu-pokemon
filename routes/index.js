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
  world = poke[0].frenchName
  image = `https://drive.google.com/uc?id=${poke[0].imgName}`
  var newOne = world.replaceAll(" ", "")
  newOne = newOne.replaceAll("é", "e")
  newOne = newOne.replaceAll("è", "e")
  newOne = newOne.replaceAll("ê", "e")
  newOne = newOne.replaceAll("ï", "i")

  res.render('index', { title: 'Express', alphabet: alphabet, world:newOne, image: image });
});


router.get('/victoire', async function(req, res, next) {

  res.render('victoire', { title: 'Express', image: image, poke: poke[0] });
});

router.get('/defaite', async function(req, res, next) {

  res.render('defaite', { title: 'Express', image: image, poke: poke[0] });
});

router.get('/restart', function(req, res, next) {
  // Permet de relancer une partie
  res.redirect('/');
});


module.exports = router;
