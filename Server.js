const express = require('express');
const Server = express();
const request = require("request");
const axios = require('axios');


// Route
Server.get("/", (req, res) => {
  res.send("hello")
})

Server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})