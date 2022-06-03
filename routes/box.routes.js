const BoxModel = require("../models/Box.model");

const router = require("express").Router();

// POST  '/api/cajas/create' -> Creamos nueva caja
router.post('/create', async (req, res, next) => {
  // const { _id } = req.payload
  const { name, boxmodel, foods, price } = req.body
  const farmer = req.payload._id

  try {
    const createBox = await BoxModel.create({
        name,
        boxmodel,
        foods,
        price,
        farmer
    })

    res.json(createBox)

  } catch(error) {
    next(error)
  }
})

// GET ('/api/cajas/:id) -> Mostramos caja
router.get("/:id", async (req, res, next) => {

    const { id } = req.params

    try{ 
        const response = await BoxModel.findById(id)
        req.json(response)
    } catch(error) {
        next(error)
    }
})

// PATCH ‘/api/cajas/:id/edit’ -> Editamos Caja
router.patch('/:id/edit', async (req, res, next) => {
  const { id } = req.params
  const { name, boxmodel, foods, price } = req.body

  try {
    await BoxModel.findByIdAndUpdate(id, {
            name,
            boxmodel,
            foods,
            price
    })
      res.json("La caja se actualizó correctamente")
  } catch(error) { next(error) }
})

// DELETE '/api/caja/:id/delete -> Borramos caja
router.delete('/:id/delete', async (req, res, next) => {

  const { id } = req.params

  try {
    await BoxModel.findOneAndDelete(id)
    res.json("La caja ha sido borrada")
  } catch(error) { next(error) }
})

module.exports = router;