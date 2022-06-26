const express=require("express");
const path = require("path");
const hbs=require('hbs');

const app=express();
const port=( process.env.PORT|| 8000 );

const static_path = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../src/templates/views");
const partialspath = path.join(__dirname, "../src/templates/partials");

app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views',viewspath);
hbs.registerPartials(partialspath);


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error");
})

app.listen(port);