require("dotenv").config();
const express = require("express");
const server = express();
const { PORT } = process.env;

server.get("/", (req, res) => res.send("Vai!"));

server.listen(PORT, () => {
  console.log(`Servidor de pé em: http://localhost:${PORT}`);
  console.log("Para desligar o servidor: ctrl + c");
});
