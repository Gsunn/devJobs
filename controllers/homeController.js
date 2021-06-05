//Conexion a BBDD
const mongoose = require('mongoose');
//Importar MODELO
const Vacante = mongoose.model('Vacante');

exports.mostrarTrabajos = async (req, res, next) => {

    const vacantes = await Vacante.find()

    if(!vacantes) return next()

    res.render('home',{
        nombrePagina : 'devJobs',
        tagline : 'Encuentra y publica trabajos para desarrolladores y makers',
        barra : true,
        boton : true,
        vacantes
    })
}