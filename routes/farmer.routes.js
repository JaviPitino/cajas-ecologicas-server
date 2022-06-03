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

// GET '/api/agricultores/:id/cajas -> Renderizamos las cajas de cada agricultor
router.get('/:id/cajas', async (req, res, next) => {

  const { id } = req.params
  const { _id } = req.payload
  // const farmer = "6299ddac8b02bdd00f6090ce"

  try {

    const response = await UserModel.findByIdAndUpdate( _id, {
      $addToSet: { boxes: id }, farmer
    })
    console.log("Response es:", response)
    res.json(response)

  } catch(error) { next(error) }
})

module.exports = router;