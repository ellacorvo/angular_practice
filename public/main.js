// create a module

var cryptApp = angular.module('cryptApp', ['ngResource', 'ngRoute']);

//route providers control what is used in specific routes. utilizes REST
cryptApp.config(function($routeProvider){

	$routeProvider.when('/', {
		templateUrl : '/templates/cryptAnimalList',
		controller : 'cryptAnimalList'
	})

});

cryptApp.factory('animalFactory', function($resource){//the first argument is the name of the factory you are creating
	var model = $resource('/api/animals/:id', {id : '@_id'})//this is where you add your external apis

	return {
		model : model,
		animals : model.query()//initiates a get request to /api/animals
	}
});

cryptApp.controller('cryptAnimalList', function($scope, animalFactory){//scope gives you access to the views, pass in the name of the factory to get access to it
	console.log('i am the controller', animalFactory);

	$scope.animals = animalFactory.animals;

	$scope.addAnimal = function(){
		var newCryptAnimal = new animalFactory.model(this.newAnimal);//this refers to scope, you can also say $scope.newAnimal
		newCryptAnimal.$save(function(returnData){//save to DB
			// console.log('return', returnData)//returnData represents the animal you just created
			animalFactory.animals.push(returnData)
		});

		this.newAnimal = {};
	}

});