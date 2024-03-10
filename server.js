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
  res.send("<h1>Airtribe Internship Project</h1><p>This project includes several APIs for managing courses and users on Airtribe.</p><h2>Steps to download the project</h2><h3>1. Download the zip File.</h3><h3>2. Extract the Zip File.</h3><h3>3. Open the file in the PowerShell Terminal or VSCode Terminal.</h3><h3>4. Execute command `npm i` to install all the dependencies.</h3><h3>5. Execute the command `npm run create-env` and enter your `PORT`, `MONGOURL`, and `JWT_SECRET` to automatically create .env File.</h3><h3>6. Execute the command `npm run server` and the project is now running on your PORT.</h3><p>This project includes several APIs for managing courses and users on Airtribe.</p><p>API Documentation Link: https://documenter.getpostman.com/view/29192957/2sA2xh3Yub</p><p>Deployment Link: https://airtribe-internship-assignment.onrender.com</p><h2>API Routes</h2><h3>1. Create Course API</h3><p><strong>Route</strong>: POST /api/v1/course/createcourse</p><p><strong>Body</strong>: </p><ul><li>name: Name of the course</li><li>max_seats: Maximum number of seats in the course</li><li>start_date: Start date of the course</li><li>description: Description of the course</li></ul><h3>2. Update Course Details API</h3><p><strong>Route</strong>: PUT /api/v1/course//updatecourse/:id</p><p><strong>Body</strong>: </p><ul><li>name: Updated name of the course</li><li>max_seats: Updated maximum number of seats in the course</li><li>start_date: Updated start date of the course</li><li>description: Updated description of the course</li></ul><h3>3. Course Registration API</h3><p><strong>Route</strong>: POST /api/v1/course/registercourse/:id</p><p><strong>Body</strong>: </p><ul><li>name: Name of the user</li><li>email: Email of the user</li><li>phone: Phone number of the user</li><li>linkedin: LinkedIn profile of the user</li></ul><h3>4. Lead Status Update API</h3><p><strong>Route</strong>: PUT /api/v1/course/updateleadstatus/:id</p><p><strong>Body</strong>:</p><ul><li>listname: Name of the list to which lead should be sent to (accepted_leads / rejected_leads / waiting_leads)</li><li>leademail: Email of the Lead</li></ul><h3>5. Lead Search API</h3><p><strong>Route</strong>: GET /api/v1/course/searchlead</p><p><strong>Query Parameters</strong>: </p><ul><li>name: Name of the lead</li><li>email: Email of the lead</li></ul><h3>6. Add Comment API</h3><p><strong>Route</strong>: POST /api/v1/course/addcomment/:id</p><p><strong>Body</strong>: </p><ul><li>comment: Comment to be added</li></ul><h3>7. Fetch Courses API</h3><p><strong>Route</strong>: POST /api/v1/course/fetchcourses</p><p><strong>Body</strong>: N/A</p><h3>8. Course List API</h3><p><strong>Route</strong>: POST /api/v1/course/courselist</p><p><strong>Body</strong>: </p><ul><li>name: Name of the course to search</li></ul><h3>9. User Registration API</h3><p><strong>Route</strong>: POST /api/v1/auth/register</p><p><strong>Body</strong>: </p><ul><li>username: Username of the user</li><li>name: Name of the user</li><li>email: Email of the user</li><li>password: Password of the user</li><li>phone: Phone number of the user</li><li>role: Role of the user (0 for lead, 1 for instructor)</li></ul><h3>10. User Login API</h3><p><strong>Route</strong>: POST /api/v1/auth/login</p><p><strong>Body</strong>: </p><ul><li>email: Email of the user</li><li>password: Password of the user</li><li>role: Role of the user (0 for lead, 1 for instructor)</li></ul>");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`.bgGreen.white);
});
