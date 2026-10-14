
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB.getConnection()
  .then(conn => {
    console.log("Database connected successfully!");
    conn.release();
  })
  .catch(err => console.log("Database connection failed:", err.message));


app.use(express.json());
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Student API" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
