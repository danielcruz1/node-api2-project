const express = require('express');

const server = express();

server.use(express.json());

const routes = require('./router/routes');

server.use('/api', routes);

server.get('/', (req, res) => {
  res.send('Welcome...slave')
})

module.exports = server; 