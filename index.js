const mongoose = require('mongoose')
const MongoStore = require('connect-mongo') //(session)
require('./config/db')

const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const cookieParseer = require('cookie-parser')
const session = require('express-session')



require('dotenv').config({
    path : 'variables.env'
})


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Habilitar template engine
app.engine('handlebars',
    exphbs({
        defaultLayout : 'layout',
        helpers: require('./helpers/handlebars')
    })
)

app.set('view engine', 'handlebars')

//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParseer())
app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store:  MongoStore.create( mongoose.connection )
}))


app.use('/', router())

app.listen(3002)  //process.env.PUERTO