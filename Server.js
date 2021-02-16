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

server.get("/api/tweets",  (req, res) => {
    const queryString = req.query.search;

  axios({
    method: 'get',
    url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}`,
    params: {
      tweet_mode: "extended",
  },
    headers: {
      Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
    }
  })
    .then(function (response) {
      res.json(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
});

server.get("/api/tweets/content", (req, res) => {
    const contentString = req.query.content;

    axios({
      method: 'get',
      url: `https://api.twitter.com/1.1/search/tweets.json?q=${contentString}&tweet_mode=extended`,
      headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH"
      }
    })
    .then(function (response) {
      res.json(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
})

server.listen(3002, () => {
  console.log("Server is up and listening on 3002...")
})