const express = require('express');
const {infoController} = require('../../controllers');
const router = express.Router();

router.get('/getInfo', infoController.info)
module.exports = router;