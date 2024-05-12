const express = require('express');
const routeV1 = require('./v1');
const  router = express.Router();

router.use('/v1', routeV1);

module.exports = router;