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
      enum: ["fruta", "verdura"],
      required: true
    },
    season:{
      type: String,
      enum: ["primavera", "verano", "otoño", "invierno"],
      required: true
    }
  }
)


const FoodModel = model("Food", foodSchema)

module.exports = FoodModel;