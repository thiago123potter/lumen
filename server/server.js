import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("🌱 MongoDB conectado"))
.catch((err) => console.error("Erro na conexão com MongoDB:", err));

// Rota de teste
app.get("/", (req, res) => {
  res.send("🔮 Backend LUMEN online e em expansão!");
});

// Escutar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
