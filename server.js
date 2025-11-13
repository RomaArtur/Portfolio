const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (request, response) => {
  response.send("Back-end funcionando.");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
