const { Schema, model } = require ('mongoose')

const boxSchema = new Schema (
  {

    name: String,
    boxmodel: {
      type: String,
      enum: ["small", "medium", "big"]
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
    price: Number
}
)

const BoxModel = model("Box", boxSchema)

module.exports = BoxModel;