const port = 4004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
  console.log(`BEACKEND is running on port ${port}.`)
})

module.exports = server
