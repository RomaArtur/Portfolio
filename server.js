const path = require("path");
const express = require("express");
const { PrismaClient } = new("@prisma/client");

const app = express();
const prisma = new PrismaClient(); 
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.send("Back-end funcionando.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
