const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/auth', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    }); //, { useMongoCliente: true });
    mongoose.Promise = global.Promise;
}