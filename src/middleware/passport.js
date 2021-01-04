const passport = require('passport');

module.exports = (app) => {
    app.use(passport.initialize());

    /** PASSPORT BASIC **/
    // passport.use(require('./../auth/basic'));
    // app.get('*', passport.authenticate('basic', { session : false }))    
};