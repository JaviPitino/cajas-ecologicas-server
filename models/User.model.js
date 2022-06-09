const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true 
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      default: "https://res.cloudinary.com/dikww9ljc/image/upload/v1654707358/EcoFood/pngwing.com_rrguil.png"
    },
    location: String, // COORDENADAS DE LOCALIZACIÓN PARA FUTURA IMPLEMENTACIÓN DE MAPAS

    role: {
      type: String,
      enum: ["admin", "client", "farmer"],// ROL POR EL QUE SE GESTIONARAN ALGUNAS VISTAS
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
