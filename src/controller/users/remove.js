
const User = require('./../../model/user')

module.exports = (req, res) => {
    const id = req.params.id;
    console.log(`Id: ${id}`);
    User   
        .findByIdAndRemove(id)
        .then( () => {
            res.redirect('/users');
        })
        .catch((error) => {
            console.error(error);
        });
}