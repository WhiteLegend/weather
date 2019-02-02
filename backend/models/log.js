var mongoose=require('mongoose');
var express= require('express');
var Schema = mongoose.Schema;
const bcrypt=require('bcryptjs');
var userSchema  = new Schema({
    Country: {type:String},
    State: {type:String},
    City:{type:String},
    Date:{type:Date},
    Data: {
        type: [{
            Time:{type:String},
            Temperature:{ type:String}
        }]
    }
});

var userModel = mongoose.model('adminlogin',userSchema);



module.exports={userModel};