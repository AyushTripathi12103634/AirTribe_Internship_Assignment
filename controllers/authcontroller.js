import leadsModel from "../models/Leads_model.js";
import instructorModel from "../models/Instructor_model.js";
import { hashPassword } from "../helpers/authhelper.js";
import JWT from "jsonwebtoken";

// Function to register a user (either a lead or an instructor)
export const registerController = async (req, res) => {
    try {
        // Destructure the request body
        const { username, name, email, password, phone, role } = req.body;

        // Validate the request body
        if (!username) {
            return res.status(400).send({
                success: false,
                message: "Username is required",
            });
        }
        if (!name) {
            return res.status(400).send({
                success: false,
                message: "Name is required",
            });
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: "email is required",
            });
        }
        if (!password) {
            return res.status(400).send({
                success: false,
                message: "Password is required",
            });
        }
        if (!phone) {
            return res.status(400).send({
                success: false,
                message: "Phone is required",
            });
        }

        let model;
        // Determine the model based on the role
        if (role == 0) {
            model = leadsModel;
        } else if (role == 1) {
            model = instructorModel;
        } else {
            return res.status(400).send({
                success: false,
                message: "Invalid role",
            });
        }

        // Hash the password
        const hashed_password = await hashPassword(password);

        // Check if the email, username, or phone number already exists
        const exist_email = await model.findOne({ email: email });
        const exist_name = await model.findOne({ username: username });
        const exist_num = await model.findOne({ phone: phone });

        if (exist_email || exist_name || exist_num) {
            return res.status(409).send({
                success: false,
                message: "User already exists",
            });
        }

        try {
            // Create a new user
            const user = await new model({
                name: name,
                email: email,
                username: username,
                password: hashed_password,
                phone: phone,
            }).save();

            // Return a success message
            return res.status(201).send({
                success: true,
                message: "User registered successfully",
                user,
            });
        } catch (error) {
            // If there is an error in creating the user, return an error message
            return res.status(500).send({
                success: false,
                message: "Failed to create user",
                error: error,
            });
        }
    } catch (error) {
        // If there is an error in the API, return an error message
        return res.status(500).send({
            success: false,
            message: "Error in register API",
            error: error,
        });
    }
}