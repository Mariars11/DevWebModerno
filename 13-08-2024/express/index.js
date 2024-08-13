const express = require("express");

const app = express();

app.get("/", function(req, res)
    {
        res.send("OK")
    }
);

app.get("/status", function(req, res)
    {
        res.send("200 OK")
    }
);

const PORT = 8080;

app.listen(PORT, ()=>
    console.log(`App rodando http://localhost:${PORT}`)
);