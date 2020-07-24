module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/database.sqlite`,
      useNullAsDefault: true,
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
