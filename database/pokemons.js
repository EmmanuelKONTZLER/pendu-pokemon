var mongoose = require("mongoose");

var frenchDescriptionSchema = mongoose.Schema({
    version: String,
    description: String
})

var englishDescriptionSchema = mongoose.Schema({
    version: String,
    description: String
})

var pokemonSchema = mongoose.Schema ({
number:String,
frenchName:String,
englishName:String,
frenchDescription: [frenchDescriptionSchema],
englishDescription: [englishDescriptionSchema],
imgName:String,
publicUrl: String

});
var pokemonModel = mongoose.model('pokemons', pokemonSchema)
module.exports = pokemonModel;