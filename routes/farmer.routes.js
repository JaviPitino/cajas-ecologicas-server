const router = require("express").Router()
const UserModel = require("../models/User.model")

//GET '/api/agricultores' => Renderizamos la lista de Agricultores para los Clientes
router.get('/', async (req, res, next) => {
  try {
    const response = await UserModel.find({role : "farmer"}).select("username") // Buscamos sólo por el Role de Farmer, para mostrar la lista
    res.json(response)
  } catch (error) {
    next (error)
  }
})

//GET '/api/agricultores/:id' => Mostramos los detalles del Agricultor
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  
  try {
    const response = await UserModel.findById(id)  
    res.json(response)

  } catch (error) {
    next(error)
  }
})


module.exports = router;