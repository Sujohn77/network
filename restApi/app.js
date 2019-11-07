const mongoose = require('mongoose');
const express = require('express');

const app = express();
const router = express.Router();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

const serverOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/usersdb", serverOptions,(err)=>{
    console.log(err)
});

const port = 3000;
mongoose.connection.on("connected",function(err,res){
    if (err) console.log(err);

    console.log("App is listening on port "+port );

    app.listen(port);
});

const authScheme = new mongoose.Schema({
    id:Number,
    email: String,
    login: Number,
},{ versionKey: false });

const Auth = mongoose.model("User", authScheme);

Auth.create({id:18264325},(err)=> {
    if(err) console.log(err);

    if(!err) console.log("User been created");
});

// router.get("/",function(req,res){
//     const authJson = Auth.find({});
//
//     if(!authJson){
//         console.log("You're not logged:");
//         res.send(404, "You're not logged");
//     }
//     console.log("Autorized:");
//     res.render(authJson)
// });

app.get("/auth",function(req,res){

    const authUser= Auth.find({});

    if(!authJson){
        console.log("You're not logged:");
        res.send(404, "You're not logged");
    }

    res.json(authUser)
});





