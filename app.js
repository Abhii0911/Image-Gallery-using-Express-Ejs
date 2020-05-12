//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");
const _ = require("lodash") ;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
    res.render("home")
})

app.get("/compose", (req,res) =>{
    res.render("compose");
})








app.listen(3000, ()=> {
    console.log("Server has started running!");
})
