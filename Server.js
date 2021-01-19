const express = require('express');
const server = express();



// Route
server.get("/", (req, res) => {
  res.send("heldwdeerrerwwdlo")
})

server.listen(3002, () => {
    console.log("Server is up and listening on 3002...")
})