const router = require("express").Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const BoxModel = require("../models/Box.model");
const { findOneAndUpdate, findByIdAndUpdate } = require("../models/Food.model");
const FoodModel = require ('../models/Food.model')


// GET ('/api/cajas') -> Renderizar todas las cajas
router.get("/", isAuthenticated, async (req, res, next) => {

  try {
    const response = await BoxModel.find()
    res.json(response) 

  } catch(error) {
    next(error);
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
  const { _id } = req.payload
  try {
    if (!id){
      id = _id
    }
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
    await BoxModel.findOneAndDelete(id);
    res.json("La caja ha sido borrada");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
