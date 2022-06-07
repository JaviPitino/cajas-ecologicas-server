const { Schema, model } = require ('mongoose')

const foodSchema = new Schema(
  {
    image: String,
    name:{
      type: String,
      required: true
    },
    type:{
      type: String,
      enum: ["Fruta", "Verdura", "Tubérculo", "Hongo"],
      required: true,
    },
    season:[{
      type: String,
      enum: ["Invierno", "Primavera", "Verano", "Otoño"],
      required: true,
    }]
  }
)


const FoodModel = model("Food", foodSchema)

module.exports = FoodModel;