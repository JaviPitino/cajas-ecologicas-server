const foods = [

  {
    "name": "Aguacate",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/01aguacate_mtgyey.png",
    "type": "Fruta",
    "season": ["Otoño", "Invierno" ]
  },
  {
    "name": "Manzana",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176557/EcoFood/02manzana_ptdvfe.png",
    "type": "Fruta",
    "season": ["Otoño", "Invierno"]
  },
  {
    "name": "Naranja",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176557/EcoFood/03naranja_xumpbn.png",
    "type": "Fruta",
    "season": ["Invierno"]
  },
  {
    "name": "Ciruela",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176557/EcoFood/04ciruela_qruxdr.png",
    "type": "Fruta",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Nectarina",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654278810/EcoFood/05nectarina_rsuo1n.png",
    "type": "Fruta",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Cereza",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/06cereza_vfrvre.png",
    "type": "Fruta",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Melón",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/07melon_f9bsjo.png",
    "type": "Fruta",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Sandía",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/08sandia_moitgp.png",
    "type": "Fruta",	
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Melocotón",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/09melocoton_sgyazg.png",
    "type": "Fruta",	
    "season": ["Verano"]
  },
  {
    "name": "Piña",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654278810/EcoFood/10pi%C3%B1a_pewkev.png",
    "type": "Fruta",
    "season": ["Otoño", "Invierno"]
  },
  {
    "name": "Plátano",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/11platano_v6szdr.png",
    "type": "Fruta",	
    "season": ["Primavera", "Verano", "Otoño"]
  },
  {
    "name": "Pera",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/13pera_s0tdch.png",
    "type": "Fruta",
    "season": ["Verano", "Otoño"]
  },
  {
    "name": "Calabaza",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/12calabaza_o3v5wj.png",
    "type": "Verdura",
    "season": ["Invierno"]
  },
  {
    "name": "Coliflor",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176558/EcoFood/14coliflor_i4pzy1.png",
    "type": "Verdura",
    "season": ["Primavera"]
  },
  {
    "name": "Puerro",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/15puerro_ymxrw9.png",
    "type": "Verdura",
    "season": ["Invierno", "Primavera"]
  },
  {
    "name": "Cebolla",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/16cebolla_zwokqt.png",
    "type": "Verdura",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Judía verde",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/17judiasverdes_crdzwc.png",
    "type": "Verdura",
    "season": ["Primavera", "Verano"]
  },
  {
    "name": "Zanahoria",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/18zanahoria_esirme.png",
    "type": "Verdura",
    "season": ["Primavera"]
  },
  {
    "name": "Calabacín",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/19calabacin_qvtb4q.png",
    "type": "Verdura",
    "season": ["Verano"]
  },
  {
    "name": "Lechuga",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/20lechuga_t5ljkh.png",
    "type": "Verdura",
    "season": ["Verano"]
  },
  {
    "name": "Patata",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/21patata_zzgwti.png",
    "type": "Tubérculo",
    "season": ["Verano"]
  },
  {
    "name": "Champiñón",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/22champi_dyfaay.png",
    "type": "Hongo",
    "season": ["Otoño"]
  },
  {
    "name": "Remolacha",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/23remolacha_k1iuoq.png",
    "type": "Verdura",
    "season": ["Primavera", "Otoño", "Invierno"]
  },
  {
    "name": "Alcachofa",
    "image": "https://res.cloudinary.com/dikww9ljc/image/upload/v1654176559/EcoFood/24alcachofa_uctlxy.png",
    "type": "Verdura",
    "season": ["Primavera", "Otoño", "Invierno"]
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