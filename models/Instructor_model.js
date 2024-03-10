import mongoose from "mongoose";

const instructorschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses : {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Instructors", instructorschema);
