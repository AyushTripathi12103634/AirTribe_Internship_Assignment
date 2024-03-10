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
}

// Function to update a course
export const updateCourseController = async (req, res) => {
    try {
        // Destructure the request body
        const { name, max_seats, start_date, description } = req.body;

        // Extract the token from the request headers
        const token = req.headers.authorization;

        // Decode the token to get the instructor's ID
        const id = decode(token)._id;

        // Extract the course ID from the request parameters
        const courseId = req.params.id;

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
                message: "Please enter a start date"
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
            // Find the course in the database
            let course = await CourseModel.findOne({ _id: courseId });

            // If the course does not exist, return an error
            if (!course) {
                return res.status(404).send({
                    success: false,
                    message: "Course not found"
                });
            }

            // If the course was not created by the instructor, return an error
            if (course.createdBy != id) {
                return res.status(401).send({
                    success: false,
                    message: "Unauthorized Access for Course Updation"
                });
            }

            // Update the course details
            course.name = name;
            course.max_seats = max_seats;
            course.start_date = start_date;
            course.description = description;

            // Save the updated course
            await course.save();

            // Return a success message
            return res.status(200).send({
                success: true,
                message: "Course updated successfully",
                course
            });
        } catch (error) {
            // If there is an error in updating the course, return an error message
            return res.status(400).send({
                success: false,
                message: "Course not updated",
                error
            });
        }
    } catch (error) {
        // If there is an error in the API, return an error message
        return res.status(500).send({
            success: false,
            message: "Error in updateCourse API",
            error
        });
    }
}


// Function to update leads for a course
export const updateLeadsController = async (req, res) => {
    try {
        // Destructure the request body
        const { accepted_leads, rejected_leads, waiting_leads } = req.body;

        // Extract the token from the request headers
        const token = req.headers.authorization;

        // Decode the token to get the instructor's ID
        const id = decode(token)._id;

        // Extract the course ID from the request parameters
        const courseId = req.params.id;

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
            // Find the course in the database
            let course = await CourseModel.findOne({ _id: courseId });

            // If the course does not exist, return an error
            if (!course) {
                return res.status(404).send({
                    success: false,
                    message: "Course not found"
                });
            }

            // If the course was not created by the instructor, return an error
            if (course.createdBy != id) {
                return res.status(401).send({
                    success: false,
                    message: "Unauthorized Access for Course Updation"
                });
            }

            // Update the leads for the course
            course.accepted_leads = accepted_leads;
            course.rejected_leads = rejected_leads;
            course.waiting_leads = waiting_leads;

            // Save the updated course
            await course.save();

            // Return a success message
            return res.status(200).send({
                success: true,
                message: "Leads updated successfully",
                course
            });
        } catch (error) {
            // If there is an error in updating the leads, return an error message
            return res.status(400).send({
                success: false,
                message: "Leads not updated",
                error
            });
        }
    } catch (error) {
        // If there is an error in the API, return an error message
        return res.status(500).send({
            success: false,
            message: "Error in updateLeads API",
            error
        });
    }
}
