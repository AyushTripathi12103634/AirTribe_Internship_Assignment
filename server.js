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
  res.send("<h1>Airtribe Internship Project</h1><p>This project includes several APIs for managing courses and users on Airtribe.</p><h2>Steps to download the project</h2><h3>1. Download the zip File.</h3><h3>2. Extract the Zip File.</h3><h3>3. Open the file in the PowerShell Terminal or VSCode Terminal.</h3><h3>4. Execute command `npm i` to install all the dependencies.</h3><h3>5. Execute the command `npm run create-env` and enter your `PORT`, `MONGOURL`, and `JWT_SECRET` to automatically create .env File.</h3><h3>6. Execute the command `npm run server` and the project is now running on your PORT.</h3><p>This project includes several APIs for managing courses and users on Airtribe.</p><p>API Documentation Link: https://documenter.getpostman.com/view/29192957/2sA2xh3Yub</p><p>Deployment Link: https://airtribe-internship-assignment.onrender.com</p><h2>API Routes</h2>");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`.bgGreen.white);
});
