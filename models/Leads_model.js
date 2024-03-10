import mongoose from "mongoose";

const leadsschema = new mongoose.Schema(
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
    registered_courses: {
      type: Array,
      required: true,
      default: [],
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    linkedin : {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Leads", leadsschema);
