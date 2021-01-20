const express = require('express');
const server = express();
const axios = require('axios');



//Route
server.get("/", (req, res) => {
  axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa`)
  .then(response => {
    res.send(response.data)
  })
  .catch((err) => {
    console.log(err);
  })
})

server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})