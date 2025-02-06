require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/auth"); // Import auth routes
app.use("/api/auth", authRoutes); // Use authentication routes


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.use("/api/workouts", workoutRoutes);
app.use("/api/auth", authRoutes); // Add authentication routes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
