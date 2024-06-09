import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  enhacementId : {
    type: [String],
  }
  
});

export default mongoose.model("Hotel", HotelSchema)