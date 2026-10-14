import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 


connectDB(); 

app.use(express.json());
app.use("/noella", userRouter);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});