var router = require("express").Router();
var dbAccess = require("../helpers/dbAccess");


router.get('/', function(req, res, next){

    return dbAccess.addAnimal('Snow','Dog')
        .then(function(animal){
            console.log(animal);
            return dbAccess.listAllAnimals()
        }).then(function(animals){
            console.log(animals);
            res.json(animals);
        }).catch(function(error){
            res.json(error);
        });
});


router.get('/cleanZoo', function(req, res, next){

    return dbAccess.removeAllAnimals()
        .then(function(){
            res.json("No animals...");
        }).catch(function(error){
            res.json(error);
        });
});

module.exports = router;