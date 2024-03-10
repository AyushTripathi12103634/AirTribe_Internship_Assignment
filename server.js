import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./db.js";

// Configuring dotenv
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("<h1>Airtribe Internship Project</h1><h3>All API Routes: </h3>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`.bgGreen.white);
});
