const router = require("express").Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const BoxModel = require("../models/Box.model");
const FoodModel = require ('../models/Food.model');
const { findById } = require("../models/User.model");
const UserModel = require ('../models/User.model')

//GET '/api/cajas/:id/' => Renderizamos las caja segun id payload del Farmer
router.get('/', isAuthenticated, async (req, res, next) => {
  
  const { _id } = req.payload
  
  try {
    
    const findBox = await BoxModel.find({"farmer":_id})
    console.log(findBox)
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})

//GET '/api/cajas/:id/' => Renderizamos las caja segun id payload del Cliente
router.get('/', isAuthenticated, async (req, res, next) => {
  
  const { _id } = req.payload
  try {
    const findBox = await BoxModel.find({"client":_id})
    console.log(findBox)
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})

//GET //GET '/api/cajas/:id' => Cliente quiere ver las cajas segun id del Farmer
router.get('/:id/cajas', isAuthenticated, async (req, res, next) => {
  
  const { id } = req.params
  console.log("el id del farmer dinamico",id)
  try {
    const findBox = await BoxModel.find({"farmer":id})
    console.log(findBox)
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})


// POST  '/api/cajas/create' -> Creamos nueva caja
router.post("/create",isAuthenticated, async (req, res, next) => {
  const { name, boxmodel, foods, price } = req.body;
  try {
    const createBox = await BoxModel.create({
      name,
      boxmodel,
      foods,
      price,
      farmer: req.payload._id,
    });

    res.json(createBox);
  } catch (error) {
    next(error);
  }
});

// GET ('/api/cajas/:id/details) -> Mostramos caja
router.get("/:id",isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await BoxModel.findById(id).populate("foods");
    res.json(response);
  } catch (error) {
    next(error);
  }
});


// PATCH ‘/api/cajas/:id/edit’ -> Editamos Caja
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, boxmodel, foods, price } = req.body;

  try {
    const allFoods = await FoodModel.find()
    await BoxModel.findByIdAndUpdate(id, {
      name,
      boxmodel,
      foods,
      price,
    });
    res.status(200).json(allFoods);
  } catch (error) {
    next(error);
  }
});

// DELETE '/api/caja/:id/delete -> Borramos caja
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    await BoxModel.findByIdAndDelete(id);
    res.json("La caja ha sido borrada");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
