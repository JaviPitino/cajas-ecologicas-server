const foods =[

  {
    "name": "Alcachofa",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/24alcachofa_uctlxy.png",
    "type": "Verdura",
    "season": ["Verano", "Otoño"]
  },
];

const mongoose = require("mongoose");
const FoodModel = require ("../models/Food.model.js")

require("../db")

const addFood = async () => {
  try {
    await FoodModel.insertMany(foods)
    mongoose.connection.close()
  } catch (error) {
    console.error("Error connecting to the database", error)
  }
}

addFood();