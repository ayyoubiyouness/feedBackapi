import mongoose from "mongoose";
const BugSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    filepath: {
      type: String,
      required: true,
    },
    comments: {
      type: [String],
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bug", BugSchema);
