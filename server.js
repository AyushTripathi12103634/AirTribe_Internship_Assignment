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
  res.send("<h1>Airtribe Internship Project</h1>  <h2>All API Routes: </h2>    <h4>1. Create Course API</h4>  <p><strong>Route:</strong> POST /api/v1/course/create</p>  <p><strong>Body:</strong></p>  <ul>    <li>name: Name of the course</li>    <li>max_seats: Maximum number of seats in the course</li>    <li>start_date: Start date of the course</li>    <li>description: Description of the course</li>  </ul>    <h4>2. Update Course Details API</h4>  <p><strong>Route:</strong> PUT /api/v1/course/update/:id</p>  <p><strong>Body:</strong></p>  <ul>    <li>name: Updated name of the course</li>    <li>max_seats: Updated maximum number of seats in the course</li>    <li>start_date: Updated start date of the course</li>    <li>description: Updated description of the course</li>  </ul>    <h4>3. Course Registration API</h4>  <p><strong>Route:</strong> POST /api/v1/course/register/:id</p>  <p><strong>Body:</strong></p>  <ul>    <li>name: Name of the user</li>    <li>email: Email of the user</li>    <li>phone: Phone number of the user</li>    <li>linkedin: LinkedIn profile of the user</li>  </ul>    <h4>4. Lead Update API</h4>  <p><strong>Route:</strong> PUT /api/v1/lead/update/:id</p>  <p><strong>Body:</strong></p>  <ul>    <li>status: Updated status of the lead (Accept / Reject / Waitlist)</li>  </ul>    <h4>5. Lead Search API</h4>  <p><strong>Route:</strong> GET /api/v1/lead/search</p>  <p><strong>Query Parameters:</strong></p>  <ul>    <li>name: Name of the lead</li>    <li>email: Email of the lead</li>  </ul>    <h4>6. Add Comment API</h4>  <p><strong>Route:</strong> POST /api/v1/lead/comment/:id</p>  <p><strong>Body:</strong></p>  <ul>    <li>comment: Comment to be added</li>  </ul>    <h4>7. User Registration API</h4>  <p><strong>Route:</strong> POST /api/v1/auth/register</p>  <p><strong>Body:</strong></p>  <ul>    <li>username: Username of the user</li>    <li>name: Name of the user</li>    <li>email: Email of the user</li>    <li>password: Password of the user</li>    <li>phone: Phone number of the user</li>    <li>role: Role of the user (0 for lead, 1 for instructor)</li>  </ul>    <h4>8. User Login API</h4>  <p><strong>Route:</strong> POST /api/v1/auth/login</p>  <p><strong>Body:</strong></p>  <ul>    <li>email: Email of the user</li>    <li>password: Password of the user</li>    <li>role: Role of the user (0 for lead, 1 for instructor)</li>  </ul>  ");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`.bgGreen.white);
});
