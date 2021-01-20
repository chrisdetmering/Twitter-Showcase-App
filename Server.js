const express = require('express');
const server = express();
const axios = require('axios');

const twitterKey = () => {
  const API_KEY = "HzSjx6lNrFUYtARRf9dOmaZaK";
  const API_SECRET_KEY = "DJHuIDsrG5hR7Uy85UbDkcgYsogu8WXrXGcOCcae7aHTFun6Kl";
  

  
  
  server.get("/", (req, res) => {
    axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=nasa@app_key=${API_KEY}&app_secret_key=${API_SECRET_KEY}`)
    .then(response => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  })

  twitterKey();
} 

//Route


server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})