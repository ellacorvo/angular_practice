var CryptAnimal = require('../models/cryptanimals');

var apiController = {

	get : function(req, res){
		//returns all animals
		CryptAnimal.find({}, function(err, animals){
			res.send(animals)
		});
	},
	create : function(req, res){
		req.body.componentAnimals = req.body.componentAnimals.split(', ');
		var animal = new CryptAnimal(req.body);
		animal.save(function(err, doc){
			res.send(doc);
		});
		// console.log(req.body);
	},
	delete : function(req, res){
		CryptAnimal.remove({_is : req.params.id}, function(err, result){
			res.send(result);
		});
	}
};

module.exports = apiController;