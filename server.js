const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./app/mongodb')
const router = require('./app/routes')

// initialize dotenv
dotenv.config()

// set port
const port = process.env.PORT || 80

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// register routes
app.use(router)

// start mongo connection pool, then start express app
mongo.connect(port)
    .then(() => app.listen(port))
    .then(() => console.log(`Connected to port ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
