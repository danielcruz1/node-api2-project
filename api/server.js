const express = require('express');

const server = express();

const postsRouter = require('../posts/posts-router');
const commentsRouter = require('../posts/comments-router');

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcome...slave')
})

module.exports = server; 