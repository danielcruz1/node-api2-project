const router = require('express').Router();

const routePost = require('./routePost');

router.use('/posts', routePost)

module.exports = router; 