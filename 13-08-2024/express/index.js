const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("OK")
});

app.get("/status", (req, res)=>{
    res.send("200 OK")
});

const PORT = 8080;

app.listen(PORT, ()=>
    console.log(`App rodando http://localhost:${PORT}`)
);