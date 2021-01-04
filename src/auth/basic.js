const { BasicStrategy } = require('passport-http');
//const basicStrategy = require('passport-http').BasicStrategy;

module.exports = new BasicStrategy(
    function (username, password, cb) {
        if (username === 'admin' && password === 'admin')
            return cb(null, true);
        else
            return cb(null, false);
    }
);