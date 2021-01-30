const express = require('express');
const server = express();
const axios = require('axios');
const { json } = require('express');
const path = require('path');

server.use(express.static(path.join('client', 'build')));

server.get("/", (req, res) => {
  res.sendFile(path.join('client', 'build', 'index.html'))
});

server.get("/api/tweets/search", (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.twitter.com/1.1/search/tweets.json?q=nasa',
    headers: {
      Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAADEFFRo%2FTfeYUrWjtgp9WtLqcwFI%3DstdGTd0hupHIIxV0E1eB31OOVs7gq3Q5X5mfLCnlVm2FrW4SGF"
    }
  })
    .then(function (response) {
      res.send(response.data.statuses);
    })
    .catch(function (error) {
      console.log(error);
    });
});

server.listen(3002, () => {
  console.log("Server is up and listening on 3002...")
})