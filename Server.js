const express = require('express')
const Server = express()

Server.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Nodemon is working")
})

Server.listen(3002, () => {
    console.log("Server is up and listening on 3001...")
})