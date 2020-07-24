const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json()); // API use JSON data
app.use(routes); // API use the routes config in routes.js

// Path Not Found
app.use((req, res, next) =>{
	const error = new Error('404 Not Found')
	error.status = 404
	next(error)
});

// Cath All Middlere
app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({ error: error.message })
});

app.listen(3333); // API listen the portal 3333 only in devlopment