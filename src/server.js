import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import database from "./config/database";
import Routes from "./Routes";

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Servidor de pé em: http://localhost:${PORT}`);
  console.log("Para desligar o servidor: ctrl + c");
});
