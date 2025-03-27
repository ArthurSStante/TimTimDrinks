const Drink = require("../models/Drink");

// [GET] - Listar todos os drinks
const getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os drinks" });
  }
};

// [POST] - Criar um novo drink
const createDrink = async (req, res) => {
  const { name, description, price, image } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
  }

  try {
    const newDrink = await Drink.create({ name, description, price, image });
    res.status(201).json(newDrink);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o drink" });
  }
};

module.exports = { getDrinks, createDrink };
