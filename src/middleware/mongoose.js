const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/auth', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }); //, { useMongoCliente: true });
    mongoose.Promise = global.Promise;
}