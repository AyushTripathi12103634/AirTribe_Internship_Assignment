import mongoose from "mongoose";

const courseschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    accepted_leads: {
      type: Array,
      required: true,
      default: [],
    }, 
    description:{
      type: String,
      default: "",
    },
    rejected_leads: {
      type: Array,
      required: true,
      default: [],
    },
    waiting_leads: {
      type: Array,
      required: true,
      default: [],
    },
    max_seats:{
      type: Number,
      required: true,
    },
    start_date:{
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Courses", courseschema);
