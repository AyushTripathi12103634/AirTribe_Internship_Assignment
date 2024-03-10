import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from "./db.js";

import authroute from './routes/authroute.js';
import courseroute from './routes/courseroute.js';

// Configuring dotenv
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth",authroute);
app.use("/api/v1/course",courseroute);
app.use("/", (req, res) => {
  res.send("<h1>Airtribe Internship Project</h1><h3>All API Routes: </h3>");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`.bgGreen.white);
});
