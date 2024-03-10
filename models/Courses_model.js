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
    accepted_leads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "leads",
      },
    ],
    description:{
      type: String,
      default: "",
    },
    rejected_leads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "leads",
      },
    ],
    waiting_leads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "leads",
      },
    ],
    max_seats:{
      type: Number,
      required: true,
    },
    start_date:{
      type: Date,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'model_list',
      },
    ],
    model_list: {
      type: String,
      required: true,
      enum: ['leads', 'instructor'] 
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Courses", courseschema);
