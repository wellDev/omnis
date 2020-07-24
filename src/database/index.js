const knexfile = require('../../knexfile') // Import knexfile config
const knex = require('knex')(knexfile.development) // Setter knex with our config

module.exports = knex; // Export Knex with our config