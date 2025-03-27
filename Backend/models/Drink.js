const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String } // URL da imagem
}, { timestamps: true });

module.exports = mongoose.model("Drink", drinkSchema);
