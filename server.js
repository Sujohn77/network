const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
var Cookies = require('cookies')


const server = express();

const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }))

server.use(cookieParser());
// Create a cookies object
const keys = ['keyboard cat']
server.use(function(req, res, next) {
    const cookies = new Cookies(req, res, { keys: keys });
    // CHECK IF CLIENT SENT COOKIE
    let cookie = cookies.get('Auth', { signed: true })

    if (cookie === undefined)
    {
        let randomNumber=Math.random().toString();
        randomNumber=randomNumber.substring(2,randomNumber.length);
        res.cookie('Auth',randomNumber, { maxAge: 900000, httpOnly: true });
        console.log('cookie created successfully');
    }
    else
    {
        console.log('cookie exists', cookie);
    }
    // ALLOW TAKE QUERIES FROM LOCALHOST
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


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

const logScheme = new mongoose.Schema({
    id:Number,
    email: String,
    login: String,
    password:String
},{ versionKey: false });

const User = mongoose.model("User", logScheme);

User.deleteMany({},(err)=>{
    if(err) console.log("Delete failed");
});

User.create({id:18264325,email:"stonebo0sh56@gmail.com",login:"don_ivans",isAuth: true},(err)=> {
    if(err) console.log("Error with user creating "+err);

    if(!err) console.log("User been created");
});

server.post("/auth/login",function(req, res){

    const cookies = new Cookies(req, res, { keys: keys });
    cookies.set('Auth', new Date().toISOString(), { signed: true });

    User.insertOne(req.body.user,(err)=>{
        if(err !== null){
            const response = {
                messages:["Can not login"],
                resultCode:-1,
                data:[]
            };
            res.status(400).json(response);
        }
        else{
            const response = {
                messages:["Login was successful"],
                resultCode:0,
                data:[]
            };

            res.json(response)
        }
    });
});

server.delete("/auth/login",function(req, res){
    User.deleteMany({},(err)=>{
        if(err !== null){
            const response = {
                messages:["You can't logout"],
                data:{
                    resultCode:-1
                }
            };
            res.status(400).json(response);
        }
        else{
            const response = {
                messages:["Logout was successful"],
                resultCode:0,
                data:[]
            };

            res.json(response)
        }
    });
});

server.get("/auth",function(req, res){

    const cookies = new Cookies(req, res, { keys: keys });
    // Get a cookie
    let Auth = cookies.get('Auth', { signed: true });


    if (!Auth) {
        const response = {
            messages:["You're not logged"],
            data:{
                resultCode:-1
            }
        };
        console.log("You're not logged:");
        res.status(400).json(response);
    } else {
        const response = {
            messages:["You're logged"],
            resultCode:0,
            data:user[0]
        };
        console.log("You're  logged:");

        res.json(response);
    }
});







