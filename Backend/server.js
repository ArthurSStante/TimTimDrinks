const express = require("express");
const connectDB = require("./config/db");
const drinkRoutes = require("./routes/drinkRoutes");
require("dotenv").config();

const app = express();


app.use("/api/drinks", drinkRoutes);

// Conectar ao banco
connectDB();

// Middleware para interpretar JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando! 🚀");
});

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
