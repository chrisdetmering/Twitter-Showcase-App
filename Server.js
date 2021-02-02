const express = require('express');
const server = express();
const axios = require('axios');
const { json } = require('express');
const path = require('path');
var cors = require('cors')

server.use(express.static(path.join('client', 'build')));

server.get("/", (req, res) => {
  res.sendFile(path.join('client', 'build', 'index.html'))
});

server.get("/api/tweets/search",  (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.twitter.com/1.1/users/show.json?screen_name=NASA',
    headers: {
      Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
    }
  })
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

server.listen(3002, () => {
  console.log("Server is up and listening on 3002...")
})