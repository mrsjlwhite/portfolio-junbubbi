const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./app/mongodb')
const router = require('./app/routes')
//const nodeMailer = require('nodemailer')

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
mongo.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port))
    .then(() => console.log(`do it! do it! do it! cause we at port: ${port}`))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

// NodeMailer config settings    
// let transporter = nodemailer.createTransport({
//     service: 'gmail', 
//     secure: false,
//     port: 25,
//     auth: {
//         user: 'jeslynleon@gmail.com',
//         pass: config.password
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// })

// let HelperOptions = {
//     form: '"Jeslyn Leon" <jeslynleon@gmail.com',
//     to: 'jeslynleon@gmail.com',
//     subject: 'Did you see it?',
//     text: 'Hell yea you did!'
// }

// transporter.sendMail(HelperOptions, (error, info) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(`The message was sent successfully! ${info}`)
//     }
// })