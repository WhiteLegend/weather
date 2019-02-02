var mongoose = require('./backend/db/db');
var {userModel} = require('./backend/models/log');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var express = require('express');
var bodyParser =require('body-parser');
var app =  express();

app.use((req,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,x-token');
    res.setHeader('Access-Control-Expose-Headers','x-token');
    next();
});

app.use(bodyParser.json());

app.post('/adminlogin',(req,res)=>{
    var newusers = new userModel({
        Country:req.body.Country,
        State:req.body.State,
        City:req.body.City,
        Date:req.body.Date,
        Data: req.body.Data
   });
   
   newusers.save().then((result)=>{
       res.status(200).send(result);
    
   }).catch((err)=>{
       res.status(400).send(err);
   });
});
port=3000;
app.listen(port,(res)=>{
    console.log(`listening on port ${port}`);
}); 