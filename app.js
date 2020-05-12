//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");
const _ = require("lodash") ;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


const imageList= [];
app.get("/", (req,res)=>{
    res.render("home",{
        imagesList:imageList
    })
})

app.get("/compose", (req,res) =>{
    res.render("compose");
})

app.post("/compose", (req,res)=>{
    const imageDetails= {
        imageUrl : req.body.imgSrc,
        imageCat : req.body.imgCat,
        imageDesc : req.body.imgDesc,
    };
    imageList.push(imageDetails);
    res.redirect("/")
})








app.listen(3000, ()=> {
    console.log("Server has started running!");
})
