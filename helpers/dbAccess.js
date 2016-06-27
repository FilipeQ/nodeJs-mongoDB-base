var Animal = require("../models/animal");


var addAnimal = function(name,type){
    console.log("aqui 2222")
    return Animal.addAnimal(name,type);
};

var listAllAnimals = function(){
    return Animal.listAllAnimals();
};

var removeAllAnimals = function(){
    return Animal.removeAllAnimals();
};

module.exports = {
    addAnimal : addAnimal,
    listAllAnimals : listAllAnimals,
    removeAllAnimals : removeAllAnimals
};