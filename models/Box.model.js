const { Schema, model } = require ('mongoose')

const boxSchema = new Schema (
  {

    name: String,
    boxmodel: {
      type: String,
      enum: ["Pequeña", "Mediana", "Grande"]
    },
    client: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    farmer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    foods: [{
      type: Schema.Types.ObjectId,
      ref: "Food"
    }],
    price: Number,
    image:{
      type: String,
      default: "https://res.cloudinary.com/dikww9ljc/image/upload/v1654632560/EcoFood/caja_ecologica_xkkzoo.png"
    }
}
)

const BoxModel = model("Box", boxSchema)

module.exports = BoxModel;