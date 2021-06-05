const mongoose = require('mongoose');
const Vacante = mongoose.model('Vacante');

//const Vacante = require('../models/vacantes')


exports.fomularioNuevaVacante = (req, res) =>{
   res.render('nuevaVacante',{
       nombrePagina: 'Nueva vacante',
       tagline : 'Llena el formulario y publica tu vacante'
   })
}


exports.agregarVacante = async (req, res) =>{ 
    
    console.log('agregarVacante');
    console.log(req.body);
    const vacante = new Vacante(req.body)

    vacante.skills = req.body.skills.split(',')

    console.log(vacante);

    const nuevaVacante = await vacante.save()

    console.log(nuevaVacante);

    res.redirect(`/vacantes/${nuevaVacante.url}`)
}
