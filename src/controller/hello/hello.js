const { json } = require("body-parser");

module.exports = (req, res) => {
    return res.json({ msg: `Hello Express.js + Passport.js -> ${req.params['name']}`});
};