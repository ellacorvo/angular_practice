var mongoose = require('mongoose');

var cryptAnimalSchema = mongoose.Schema({
	name : {type : String},
	coloring : {type : String},
	calories : {type : Number, default : 0},
	componentAnimals : [{type : String}]
});

var CryptAnimal = mongoose.model('CryptAnimal', cryptAnimalSchema);

module.exports = CryptAnimal;