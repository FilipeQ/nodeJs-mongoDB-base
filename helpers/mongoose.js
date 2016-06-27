var mongoose = require('mongoose');
var mongoUrl = "mongodb://localhost/zoo";

var mongooseConnect = function(){
    console.log('Mongoose started');
    mongoose.connect(mongoUrl);
};

var disconnectMongoose = function() {
    mongoose.disconnect();
};


module.exports = {
    mongooseConnect : mongooseConnect,
    disconnectMongoose : disconnectMongoose
};