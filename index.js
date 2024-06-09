import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Bug from "./models/Bug.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
const MONGO_URL="mongodb+srv://younessayy22:Engineer2002@youness.srdvuku.mongodb.net/feedback?retryWrites=true&w=majority"
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

// create a bug
app.post("/createBug", async (req, res) => {
  const newBug = new Bug(req.body);
  try {
    const savedBug = await newBug.save();
    res.status(200).json(savedBug);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a bug
app.put("/update/:id", async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBug);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get("/test", (req, res ) => {
  res.status(200).json("the app is connected on azure and works correctly ")
})

// delete a bug
app.delete("/delete/:id", async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    res.status(500).json(err)
  }
});

// count all documents
app.get("/count", async(req, res)=> {
  try {
    const totalSuggest = await Bug.countDocuments()
    res.status(200).json(totalSuggest)
    
  } catch (error) {
    res.status(500).json(error)
    
  }
})

// get bugs
app.get("/allbugs", async(req, res) => {
  try {
    const bugs = await Bug.find()
    res.status(200).json(bugs)
    
  } catch (error) {
    res.status(500).json(error)
    
  }
})

app.listen(8801, () => {
  connect();
  console.log("Backend is running");
});
