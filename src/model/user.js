const mongoose = require('mongoose');
const bcryptNodejs = require('bcrypt-nodejs');

require('mongoose-type-email');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

User.methods.genHash = (password) => {
    return bcryptNodejs.hashSync(password, bcryptNodejs.genSaltSync(7), null);
};

module.exports = mongoose.model('User', User);