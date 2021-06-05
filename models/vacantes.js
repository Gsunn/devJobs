const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const slug = require('slug')
const shortid = require('shortid')

const vacantesSchema = new mongoose.Schema({
    titulo : {
        type: String,
        required: 'El nombre de la vacante es obligatorio',
        trim: true
    },
    empresa:{
        type: String,
        trim: true 
    },
    ubicacion:{
        type: String,
        trim: true,
        required: 'La ubicacón es obligatoria',
    },
    salario:{
        type: String,
        trim: true,
        default: 0
    },
    contrato: {
        type: String,
        trim: true

    },
    descripcion: {
        type: String,
        trim: true
    },
    url:{
        type: String,
        trim: true,
        lowercase: true
    },
    skills:[String],
    candidatos:[{
        nombre: String,
        email: String,
        cv: String
    }]
})

//Se ejecuta antes de guardar SAVE
vacantesSchema.pre('save', function (next) {
    //crear url
    const url = slug(this.titulo)
    this.url = `${url}-${shortid.generate()}`
    next()
})

// Crear un indice
vacantesSchema.index({ titulo : 'text' });

module.exports = mongoose.model('Vacante', vacantesSchema)
