const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const server = express();

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: false }))

const serverOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb", serverOptions);

const port = 3001;
mongoose.connection.on("connected",function(err,res){
    if (err) console.log(err);

    console.log("App is listening on port "+port );

    server.listen(port);
});

const authScheme = new mongoose.Schema({
    id:Number,
    email: String,
    login: String
},{ versionKey: false });

const Auth = mongoose.model("User", authScheme);

Auth.deleteMany({},(err)=>{
    if(err) console.log("Delete failed")
});

Auth.create({id:18264325,email:"stonebo0sh56@gmail.com",login:"don_ivans",isAuth: true},(err)=> {
    if(err) console.log("Error with user creating "+err);

    if(!err) console.log("User been created");
});

server.get("/",function(req, res){
    res.render(require.resolve('./../index'));
});

server.get("/auth",function(req, res){
    Auth.find({},(err,user)=>{
        if(err !== null){
            const response = {
                messages:["You're not logged"],
                data:{
                    resultCode:-1
                }
            };
            console.log("You're not logged:");
            res.status(400).json(response);
        }
        else{
            const response = {
                messages:["You're logged"],
                data:{
                    resultCode:0,
                    data:user[0]
                }
            };
            console.log("You're  logged:");
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            });
            res.json(response)
        }
    });
});







