const express = require("express");
const { getDrinks, createDrink } = require("../controllers/drinkController");

const router = express.Router();

router.get("/", getDrinks);
router.post("/", createDrink);

module.exports = router;
