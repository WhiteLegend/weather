var mongoose =require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/users");
module.exports={mongoose};