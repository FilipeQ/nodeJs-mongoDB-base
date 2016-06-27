'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = new Schema({
    name: String,
    type: String

});

var Animal = mongoose.model('animal', animalSchema);

// atribuir a função findSimilarTypes aos metodos do modelo do animal
animalSchema.methods.findSimilarTypes = function (cb) {
    return Animal.find({ type: this.type}, cb);
};

// em cada save, verificamos se já tem nome
animalSchema.pre('save', function(next) {
    // verifica se o nome já existe
    if (!this.name)
        this.name = Math.random();

    next();
});

var addAnimal = function(name,type){
    return new Promise(function(resolve, reject){
        console.log(name+" - "+type)
        let animal = new Animal({
            name: name,
            type:type
        });

        animal.save(function(err, doc){
            if(err)
                reject(err);
            
            resolve(doc);
        });  
    });
};

var listAllAnimals = function(){
    return new Promise(function(resolve, reject){
        Animal.find({}, function(err,doc){
            if(err)
                reject(err);
                
            resolve(doc);
        });
    });
};

var removeAllAnimals = function(){
    return new Promise(function(resolve, reject){
        Animal.remove({}, function(err,doc){
            if(err)
                reject(err);

            resolve(doc);
        });
    });
};

module.exports = {
    addAnimal : addAnimal,
    listAllAnimals :listAllAnimals,
    removeAllAnimals : removeAllAnimals
};

