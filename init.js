import './db';
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

//대상을 못찾으면 4000으로
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✔ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);