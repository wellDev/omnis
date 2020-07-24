const express =  require('express')
const UserController = require('./controllers/UserController')
const routes = express.Router()

routes
    .post('/users', UserController.create)
    .get('/users', UserController.read)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)

module.exports = routes;
