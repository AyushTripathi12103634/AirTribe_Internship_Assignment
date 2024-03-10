import LeadsModel from "../models/Leads_model.js";
import InstructorModel from "../models/Instructor_model.js";
import CourseModel from '../models/Courses_model.js';
import JWT, { decode } from "jsonwebtoken";

// Function to create a new course
export const createCourseController = async (req, res) => {
    try {
        // Destructure the request body
        const { name, max_seats, start_date, description } = req.body;

        // Extract the token from the request headers
        const token = req.headers.authorization;

        // Decode the token to get the instructor's ID
        const id = decode(token)._id;

        // Validate the request body
        if (!name) {
            return res.status(400).send({
                success: false,
                message: "Please enter a name"
            });
        }
        if (!max_seats) {
            return res.status(400).send({
                success: false,
                message: "Please enter maximum seats"
            });
        }
        if (!start_date) {
            return res.status(400).send({
                success: false,
                message: "Please enter a start_date"
            });
        }

        // Find the instructor in the database
        const instructor = await InstructorModel.findOne({ _id: id });

        // If the instructor does not exist, return an error
        if (!instructor) {
            return res.status(401).send({
                success: false,
                message: "No Instructor found"
            });
        }

        try {
            // Create a new course
            let course = await new CourseModel({
                name: name,
                max_seats: max_seats,
                start_date: start_date,
                description: description,
                createdBy: id,
            }).save();

            // Add the course to the instructor's list of courses
            instructor.courses.push(course);

            // Save the updated instructor
            await instructor.save();

            // Return a success message
            return res.status(201).send({
                success: true,
                message: "Course created successfully",
                course
            });
        } catch (error) {
            // If there is an error in creating the course, return an error message
            return res.status(400).send({
                success: false,
                message: "Course not created",
                error
            });
        }
    } catch (error) {
        // If there is an error in the API, return an error message
        return res.status(500).send({
            success: false,
            message: "Error in createCourse API",
            error
        });
    }