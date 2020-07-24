const knex = require("../database")

const users = {
    "id": 1,
    "name": "Tom",
    "email": "tom.correa1@hotmail.com",
    "password": "dsdsfdf",
}

const UserController = {

    // Create new users
    async create(req, res){
        res.send(users)
    },

    // Show Users
    async read(req, res, next){
        try{
            const data = await knex('users')
            return res.status(200).json(data)
        }catch(error){
            next(error)
        }
        res.send(users)
    },

    // Update Users
    async update(req, res){
        res.send('ATUALIZAR')
    },

    // Delete Users
    async delete(req, res){
        res.send('DELETAR')
    }
}

// Exporting the object 
module.exports = UserController;