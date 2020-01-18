const router = require('express').Router();

const routePost = require('./routesPost');

router.use('/posts', routePost)

module.exports = router; 