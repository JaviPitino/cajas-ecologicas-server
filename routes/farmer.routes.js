const router = require("express").Router()
const UserModel = require("../models/User.model")
const isAuthenticated = require("../middlewares/isAuthenticated")

//GET '/api/agricultores' => Renderizamos la lista de Agricultores para los Clientes
router.get('/', async (req, res, next) => {
  try {
    const response = await UserModel.find({role : "farmer"})// Buscamos sólo por el Role de Farmer, para mostrar la lista
    res.json(response)
  } catch (error) {
    next (error)
  }
})

//GET '/api/agricultor => Mostramos los detalles del Agricultor
router.get('/',isAuthenticated, async (req, res, next) => { 
  const { id } = req.payload
  
  try {
    const response = await UserModel.findById(id)  
    res.json(response)

  } catch (error) {
    next(error)
  }
})

module.exports = router;