const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const vacantesController = require('../controllers/vacantesController')

module.exports = () => {

    // router.get('/', (req, res)=>{
    //     res.send('Funciona')
    // })

    router.get('/', homeController.mostrarTrabajos)

    router.get('/vacantes/nueva', vacantesController.fomularioNuevaVacante)

    router.post('/vacantes/nueva', vacantesController.agregarVacante)

    return router
}