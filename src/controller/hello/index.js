const express = require('express');
const router = express.Router();

router.get('/:name', require('./hello'));

module.exports = router;