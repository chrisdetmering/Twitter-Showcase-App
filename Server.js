const express = require('express');
const Server = express();
const request = require("request");
const axios = require('axios');


// Route
Server.get("/", (req, res) => {
   axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa`)
   .then(res => console.log(response))
   .catch(error => (err))
})

Server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})