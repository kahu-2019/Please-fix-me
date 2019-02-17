const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/quote', (req, res) => {
  request.get('http://itsthisforthat.com/api.php?json')
    .then(result => {
      res.send(result.text)
    })
    .catch(e => {
      res.status(500).json(e)
    })
})

module.exports = server
