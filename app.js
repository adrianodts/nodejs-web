const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({ secret : "#@XPTO%#@", resave: false, saveUninitialized: true } ));

//require('./src/middleware/passport')(app);
require('./src/auth/local')(passport);
require('./src/middleware/bodyparser')(app);
require('./src/middleware/views')(app);
require('./src/middleware/routes')(app, passport);
require('./src/middleware/mongoose')(app);


app.listen("9000", () => {
    console.log('Express has been started')
});