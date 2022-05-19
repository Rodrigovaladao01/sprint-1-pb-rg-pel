const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000);

server.get("/", (req,res)=>{
    return res.send({message: "AGORA VAI PORRA"});
});