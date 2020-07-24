# OMNIS API REST

Language: Node.js (JavaScript)

Framework: Express (Router, HTTP methods and template engines)

```bash
$ npm install express
```

QueryBuilder: Knex (Handle Database)

```bash
$ npm install knex
$ npx knex init // Create the knexfile.js
$ npx knex migrate:make create_user_tb // Create Migration File
$ npx knex seed:make users_data // Create Seeds to insert data into the table
$ npx knex migrate:latest // Run last migration
$ npx knex seed:run // Run the seed
```

Repository: Github

```bash
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://github.com/ton-correa/omnis.git
$ git push -u origin master
```

.gitignore:

```json
node_modules
```

## Devlopment tools:

Run Script: Nodemon (Runs the code and update automatically)

```bash
$ npm install express
```

Database: Sqlite3

```bash
$ npm install sqlite3
```