const mongoose = require('mongoose')

require('dotenv').config({
    path: 'variables.env'
})

//Conectar con MngoDB
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB Conectado...'))
    .catch((err) => console.log(err))

mongoose.connection.on('error', error => {
    console.log(error);
})


//importar los modelos
require('../models/vacantes')