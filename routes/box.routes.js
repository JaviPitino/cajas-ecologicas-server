const router = require("express").Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
const BoxModel = require("../models/Box.model");
const FoodModel = require ('../models/Food.model');
const { rawListeners } = require("../models/User.model");
const UserModel = require ('../models/User.model')
const stripe = require("stripe")('sk_test_51L8NSLFGCln7R4wfjSu4H4AeGeRecUEl7SFCDWA0LuqJWbWTf7r3KbpHk3N6vV4thXE3NEcudPDXUDHaLuFMfd9a00Vcl0YKRh');

//GET '/api/cajas/:id/' => Renderizamos las caja segun id payload del Farmer
router.get('/', isAuthenticated, async (req, res, next) => {
  
  const { _id } = req.payload
  
  try {
    
    const findBox = await BoxModel.find({"farmer":_id})
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})

//GET '/api/cajas/:id/' => Renderizamos las caja segun id payload del Cliente
router.get('/miscajas', isAuthenticated, async (req, res, next) => {
  
  const { _id } = req.payload
  try {
    const findBox = await BoxModel.find({"client":_id})
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})


//GET '/api/cajas/:id' => Cliente quiere ver las cajas segun id del Farmer
router.get('/:id/cajas', isAuthenticated, async (req, res, next) => {
  
  const { id } = req.params
  try {
    const findBox = await BoxModel.find({"farmer":id})
    res.json(findBox)
  } catch (error) {
    next (error)
  }
})

//! PASARELA DE PAGO

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};


router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  try {
    const response = await BoxModel.findById(items._id)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: response.price * 100,
      currency: "eur",
      automatic_payment_methods: {
      enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error)
  }
});


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

//PATCH '/api/cajas/:id/delteFood => Borramos una Food de la caja
router.patch('/:idBox/:idFood/deleteFood', isAuthenticated, async (req, res, next) => {
  const { idBox, idFood } = req. params;
  
  try {
    await BoxModel.findByIdAndUpdate(idBox,{
      $pull: {foods: idFood }
    })
    res.json("Alimento borrado")
  } catch (error) {
    next(error)
  }
})


// PATCH ‘/api/cajas/:id/edit’ -> Editamos Caja
router.patch("/:id",isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  const { name, boxmodel, foods, price } = req.body;

  try {
    const allFoods = await FoodModel.find()
    await BoxModel.findByIdAndUpdate(id, {
      push:{foods: foods._id},
      name,
      boxmodel,
      price,
      client: req.payload._id
    });
    res.status(200).json(allFoods);
  } catch (error) {
    next(error);
  }
});

// DELETE '/api/caja/:id/delete -> Borramos caja
router.delete("/:id",isAuthenticated, async (req, res, next) => {
  const { id } = req.params;

  try {
    await BoxModel.findByIdAndDelete(id);
    res.json("La caja ha sido borrada");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
