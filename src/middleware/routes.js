module.exports = (app) => {
    app.use('/', require('./../controller/main/index'));
    app.use('/users', require('./../controller/users/index'));
    app.use('/hello', require('./../controller/hello/index'));
}