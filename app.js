const express = require("express");
const hbs = require("hbs")
require("dotenv").config()

const app = express()
app.use(express.static("public"))

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (req, res)=>{
    res.render("home", {
        titulo:"Curso de Node",
        nombre:"Roger Armando"
    });
})

app.get("/home", (req, res)=>{
    res.render("home", {
        titulo:"Curso de Node",
        nombre:"Roger Armando"
    });
})

app.get("/generic", (req, res)=>{
    res.render("generic", {
        titulo:"Curso de Node",
        nombre:"Roger Armando"
    });
})

app.get("/elements", (req, res)=>{
    res.render("elements", {
        titulo:"Curso de Node",
        nombre:"Roger Armando"
    });
})

app.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/generic", (req, res)=>{
    res.sendFile(__dirname + "/public/generic.html")
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname + "/public/404.html")
})

app.listen(process.env.PORT)