const path = require("path");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Back-end funcionando.");
});

app.get("/api/profile", async (req, res) => {
  try {
    const profile = await prisma.profile.findFirst();

    res.json(profile);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res
      .status(500)
      .json({ error: "Não foi possível buscar os dados do perfil." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
