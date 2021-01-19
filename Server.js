const express = require('express');
const server = express();
const request = require("request");
const axios = require('axios');


// Route
server.get("/", (req, res) => {
  res.send("hello")
})

server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})