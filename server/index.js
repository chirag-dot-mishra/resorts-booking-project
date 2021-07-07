const express = require("express");
const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors =require("cors");

const app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"9182736455Cm@",
    database:"reg_login",
});

app.post("/register",(req,res)=>{
    const username = req.body.username;
    const password= req.body.password;
    console.log(req.body);
    const uniqueid=Date.now()
    db.query("INSERT INTO user(Id,username,password) VALUES(?,?,?)",
    [uniqueid,username,password],
    (err,result)=>{
        if(err){
            res.send({err: err})
            }
                
                 else{
                    res.send({message: "User registered successfully",responsecode:"200"});
                }
        console.log(err);
    }
    );
});
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password= req.body.password;
    db.query("SELECT * FROM user WHERE username =? AND password =?",
    [username,password],
    (err,result)=>{
        if(err){
        res.send({err: err})
        }
            if(result.length){
                res.send({result: result,responsecode:"200"})
            } else{
                res.send({message: "Wrong username/password combination!",responsecode:"401"});
            }
        }
    );   
});
app.listen(3001, ()=>{
    console.log("running server");
});