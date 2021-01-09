const express = require('express');
const router = express.Router();
const isAuth = require('./../../auth/authorization');

router.get('/', isAuth, require('./main'));

module.exports = router;